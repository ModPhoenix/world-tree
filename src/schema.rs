use async_graphql::*;
use chrono::Utc;

use crate::{models::user::User, utils::get_db_pool};

pub type GraphqlSchema = Schema<QueryRoot, MutationRoot, EmptySubscription>;

pub struct QueryRoot;

#[Object]
impl QueryRoot {
  async fn users(&self, ctx: &Context<'_>) -> Result<Vec<User>> {
    let pool = get_db_pool(ctx);

    let users = sqlx::query_as!(
      User,
      r#"
SELECT * FROM users
"#
    )
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

    let _ = sqlx::query!(
      r#"
INSERT INTO users (id, email, username, password, created_at)
VALUES ($1, $2, $3, $4, $5)
"#,
      uuid::Uuid::new_v4(),
      email,
      username,
      password,
      Utc::now()
    )
    .execute(pool)
    .await?;

    Ok("sign up".to_string())
  }

  async fn sign_in(&self, _email: String, _password: String) -> String {
    "sign in".to_string()
  }
}
