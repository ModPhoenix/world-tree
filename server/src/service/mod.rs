pub mod jwt;
pub mod user;

use crate::{data::DataError, domain::user::UserError};

/// The possible errors that can occur when working with the [`service layer`](crate::service).
#[derive(Debug, thiserror::Error)]
pub enum ServiceError {
  /// A clip error.
  #[error("clip error: {0}")]
  Clip(#[from] UserError),
  /// A database error.
  #[error("database error: {0}")]
  Data(DataError),
  /// Data not found.
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
