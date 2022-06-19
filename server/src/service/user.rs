use crate::{
  data::{queries, DatabasePool},
  domain::{Id, User},
};

use super::ServiceError;

pub async fn get_user(req: Id, pool: &DatabasePool) -> Result<User, ServiceError> {
  let user: User = queries::user::get_user(req, pool).await?.try_into()?;

  Ok(user)
}
