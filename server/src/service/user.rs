use chrono::Utc;

use crate::{
  data::{queries, DatabasePool},
  domain::{
    user::field::{Email, Password, Username},
    Id, User,
  },
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
      .flat_map(|user| user.try_into())
      .collect(),
  )
}

pub struct NewUser {
  pub email: String,
  pub username: String,
  pub password: String,
}

pub async fn create_user(new_user: NewUser, pool: &DatabasePool) -> Result<User, ServiceError> {
  let id = uuid::Uuid::new_v4();
  let created_at = Utc::now();

  let user = User {
    id: id.into(),
    email: Email::new(&new_user.email)?,
    username: Username::new(&new_user.username)?,
    password: Password::new(&new_user.password)?,
    created_at: created_at.into(),
    updated_at: created_at.into(),
  };

  let user: User = queries::user::create_user(user, pool).await?.try_into()?;

  Ok(user)
}
