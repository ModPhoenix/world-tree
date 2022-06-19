use chrono::{DateTime, Utc};
use uuid::Uuid;

use crate::domain::{user::UserError, Id, Time};

/// User that is stored in, and retrieved from, the database.
#[derive(Debug)]
pub struct User {
  pub(in crate::data) id: Uuid,
  pub(in crate::data) username: String,
  pub(in crate::data) email: String,
  pub(in crate::data) password: String,
  pub(in crate::data) created_at: DateTime<Utc>,
  pub(in crate::data) updated_at: DateTime<Utc>,
}

/// Convert from a database model into a domain Clip.
impl TryFrom<User> for crate::domain::User {
  type Error = UserError;

  fn try_from(user: User) -> Result<Self, Self::Error> {
    use crate::domain::user::field;
    use std::str::FromStr;

    Ok(Self {
      id: Id::from(user.id),
      username: field::Username::new(&user.username)?,
      email: field::Email::new(&user.email)?,
      password: field::Password::from_str(&user.password)?,
      created_at: Time::from(user.created_at),
      updated_at: Time::from(user.updated_at),
    })
  }
}
