use serde::{Deserialize, Serialize};

use crate::domain::user::UserError;

/// The username field for a [`User`](crate::domain::user::User).
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Username(String);

impl Username {
  /// Create a new `Username` field.
  ///
  /// If the username provided is empty, then a [`UserError`] will be returned.
  pub fn new(username: &str) -> Result<Self, UserError> {
    if !username.trim().is_empty() {
      Ok(Self(username.to_owned()))
    } else {
      Err(UserError::InvalidUsername(username.to_owned()))
    }
  }

  pub fn into_inner(self) -> String {
    self.0
  }
}

#[cfg(test)]
mod test {
  use super::Username;

  #[test]
  fn disallow_empty_content() {
    assert!(Username::new("").is_err());
  }
}
