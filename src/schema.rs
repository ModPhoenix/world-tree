use async_graphql::*;
use chrono::Utc;
use uuid::Uuid;

use crate::utils::get_db_pool;

pub type GraphqlSchema = Schema<QueryRoot, MutationRoot, EmptySubscription>;

pub struct QueryRoot;

#[Object]
impl QueryRoot {
  async fn test(&self) -> String {
    "test".to_string()
  }
}

pub struct MutationRoot;

#[Object]
impl MutationRoot {
  async fn sign_up(
    &self,
    ctx: &Context<'_>,
    email: String,
    username: String,
    password: String,
  ) -> String {
    let pool = get_db_pool(ctx);

    sqlx::query!(
      r#"
INSERT INTO users (id, email, username, password, created_at)
VALUES ($1, $2, $3, $4, $5)
"#,
      Uuid::new_v4(),
      email,
      username,
      password,
      Utc::now()
    )
    .execute(pool)
    .await;

    "sign up".to_string()
  }

  async fn sign_in(&self, _email: String, _password: String) -> String {
    "sign in".to_string()
  }
}
