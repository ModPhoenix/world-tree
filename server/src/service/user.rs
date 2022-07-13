use crate::{
  data::{queries, DatabasePool},
  domain::{Id, User},
};

use super::ServiceError;

pub async fn get_user_by_id(id: Id, pool: &DatabasePool) -> Result<User, ServiceError> {
  let user: User = queries::user::get_user_by_id(id, pool).await?.try_into()?;

  Ok(user)
}

pub async fn get_user_by_email(email: &str, pool: &DatabasePool) -> Result<User, ServiceError> {
  let user: User = queries::user::get_user_by_email(email, pool)
    .await?
    .try_into()?;

  Ok(user)
}

pub async fn get_users(pool: &DatabasePool) -> Result<Vec<User>, ServiceError> {
  Ok(
    queries::user::get_users(pool)
      .await?
      .into_iter()
      .map(|user| user.try_into())
      .flatten()
      .collect(),
  )
}
