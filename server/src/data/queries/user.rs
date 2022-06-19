use crate::{
  data::{models, DataError, DatabasePool},
  domain::Id,
};

/// [`Result`] alias for database query functions.
type Result<T> = std::result::Result<T, DataError>;

/// Gets a [`User`](`crate::domain::User`).
pub async fn get_user(id: Id, pool: &DatabasePool) -> Result<models::User> {
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
