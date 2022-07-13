use crate::{
  data::{models, DataError, DatabasePool},
  domain::Id,
};

type Result<T> = std::result::Result<T, DataError>;

pub async fn get_user_by_id(id: Id, pool: &DatabasePool) -> Result<models::User> {
  Ok(
    sqlx::query_as!(
      models::User,
      "SELECT * FROM users WHERE id = $1",
      id.into_inner()
    )
    .fetch_one(pool)
    .await?,
  )
}

pub async fn get_user_by_email(email: &str, pool: &DatabasePool) -> Result<models::User> {
  Ok(
    sqlx::query_as!(models::User, "SELECT * FROM users WHERE email = $1", email)
      .fetch_one(pool)
      .await?,
  )
}

pub async fn get_users(pool: &DatabasePool) -> Result<Vec<models::User>> {
  Ok(
    sqlx::query_as!(models::User, r#"SELECT * FROM users"#)
      .fetch_all(pool)
      .await?,
  )
}
