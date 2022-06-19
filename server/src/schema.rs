use async_graphql::*;
use chrono::Utc;

use crate::{
  models::user::User,
  service::jwt::{encode_jwt, Claims},
  utils::get_db_pool,
};

pub type GraphqlSchema = Schema<QueryRoot, MutationRoot, EmptySubscription>;

pub struct QueryRoot;

#[Object]
impl QueryRoot {
  async fn users(&self, ctx: &Context<'_>) -> Result<Vec<User>> {
    let claims = ctx
      .data::<Claims>()
      .map_err(|_| Error::new("Unauthorized"))?;

    println!("claims: {:?}", claims);

    let pool = get_db_pool(ctx);

    let users = sqlx::query_as!(User, r#"SELECT * FROM users"#)
      .fetch_all(pool)
      .await?;

    Ok(users)
  }
}

pub struct MutationRoot;

#[Object]
impl MutationRoot {
  async fn sign_up(
    &self,
    ctx: &Context<'_>,
    #[graphql(validator(email))] email: String,
    #[graphql(validator(min_length = 2))] username: String,
    #[graphql(validator(min_length = 8))] password: String,
  ) -> Result<String> {
    let pool = get_db_pool(ctx);

    let id = uuid::Uuid::new_v4();

    let _ = sqlx::query_as!(
      User,
      r#"
        INSERT INTO users (id, email, username, password, created_at)
        VALUES ($1, $2, $3, $4, $5)
      "#,
      id,
      email,
      username,
      password,
      Utc::now()
    )
    .execute(pool)
    .await?;

    let user = sqlx::query_as!(User, "SELECT * FROM users WHERE id = $1", id)
      .fetch_one(pool)
      .await?;

    println!("user {:?}", user);

    Ok(encode_jwt(&user))
  }

  async fn sign_in(
    &self,
    ctx: &Context<'_>,
    #[graphql(validator(email))] email: String,
    password: String,
  ) -> Result<String> {
    let pool = get_db_pool(ctx);

    let error = Error::new("invalid email or password");

    let user = sqlx::query_as!(User, "SELECT * FROM users WHERE email = $1", email)
      .fetch_one(pool)
      .await
      .map_err(|_| error.clone())?;

    if user.password == password {
      let token = encode_jwt(&user);
      Ok(token)
    } else {
      Err(error)
    }
  }
}
