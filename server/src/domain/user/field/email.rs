use serde::{Deserialize, Serialize};

use crate::domain::user::UserError;

/// The email field for a [`User`](crate::domain::user::User).
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Email(String);

impl Email {
  pub fn new(email: &str) -> Result<Self, UserError> {
    if !email.trim().is_empty() {
      Ok(Self(email.to_owned()))
    } else {
      Err(UserError::InvalidEmail(email.to_owned()))
    }
  }

  pub fn into_inner(self) -> String {
    self.0
  }
}

#[cfg(test)]
mod test {
  use super::Email;

  #[test]
  fn disallow_empty_content() {
    assert!(Email::new("").is_err());
  }
}
