use async_graphql::*;
use chrono::Utc;

use crate::{
  graphql::user::User,
  service::{
    jwt::{encode_jwt, Claims},
    user::{get_user_by_email, get_user_by_id, get_users},
  },
  utils::get_db_pool,
};

pub type GraphqlSchema = Schema<QueryRoot, MutationRoot, EmptySubscription>;

pub struct QueryRoot;

#[Object]
impl QueryRoot {
  async fn users(&self, ctx: &Context<'_>) -> Result<Vec<User>> {
    ctx
      .data::<Claims>()
      .map_err(|_| Error::new("Unauthorized"))?;

    let pool = get_db_pool(ctx);

    let users = get_users(pool)
      .await?
      .into_iter()
      .map(|user| user.try_into())
      .flatten()
      .collect();

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
    let created_at = Utc::now();

    let _ = sqlx::query_as!(
      User,
      r#"
        INSERT INTO users (id, email, username, password, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6)
      "#,
      id,
      email,
      username,
      password,
      created_at,
      created_at
    )
    .execute(pool)
    .await?;

    let user = get_user_by_id(id.into(), pool).await?;

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

    let user = get_user_by_email(&email, pool)
      .await
      .map_err(|_| error.clone())?;

    println!("user {:?}", user);

    if user.password.clone().into_inner() == password {
      Ok(encode_jwt(&user))
    } else {
      Err(error)
    }
  }
}
