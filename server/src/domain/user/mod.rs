pub mod field;

use self::field::{Email, Password, Username};

use super::{id::Id, time::Time};
use serde::{Deserialize, Serialize};
use thiserror::Error;

/// The possible errors that can occur when building a [`User`]
#[derive(Debug, Error)]
pub enum UserError {
  #[error("invalid username: {0}")]
  InvalidUsername(String),

  #[error("invalid email: {0}")]
  InvalidEmail(String),

  /// Password does not meet complexity requirements.
  #[error("invalid password: {0}")]
  InvalidPassword(String),
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct User {
  pub id: Id,
  pub username: Username,
  pub email: Email,
  pub password: Password,
  pub created_at: Time,
  pub updated_at: Time,
}
