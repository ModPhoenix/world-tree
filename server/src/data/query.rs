use crate::domain::Id;

use super::{model, DataError, DatabasePool};

/// [`Result`] alias for database query functions.
type Result<T> = std::result::Result<T, DataError>;

/// Gets a [`User`](`crate::domain::User`).
pub async fn get_user(id: Id, pool: &DatabasePool) -> Result<model::User> {
  Ok(
    sqlx::query_as!(
      model::User,
      "SELECT * FROM users WHERE id = $1",
      id.into_inner()
    )
    .fetch_one(pool)
    .await?,
  )
}
