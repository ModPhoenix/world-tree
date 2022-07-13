pub mod jwt;
pub mod user;

use crate::{data::DataError, domain::user::UserError};

#[derive(Debug, thiserror::Error)]
pub enum ServiceError {
  #[error("user error: {0}")]
  User(#[from] UserError),

  #[error("database error: {0}")]
  Data(DataError),

  #[error("not found")]
  NotFound,
}

impl From<DataError> for ServiceError {
  fn from(err: DataError) -> Self {
    match err {
      DataError::Database(d) => match d {
        sqlx::Error::RowNotFound => Self::NotFound,
        other => Self::Data(DataError::Database(other)),
      },
    }
  }
}

impl From<sqlx::Error> for ServiceError {
  fn from(err: sqlx::Error) -> Self {
    match err {
      sqlx::Error::RowNotFound => Self::NotFound,
      other => Self::Data(DataError::Database(other)),
    }
  }
}
