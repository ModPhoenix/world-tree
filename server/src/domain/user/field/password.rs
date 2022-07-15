use crate::domain::user::UserError;
use serde::{Deserialize, Serialize};
use std::str::FromStr;

#[derive(Clone, Debug, Deserialize, Serialize, PartialEq, PartialOrd)]
pub struct Password(String);

impl Password {
  pub fn new<T: Into<String>>(password: T) -> Result<Self, UserError> {
    let password: String = password.into();

    if !password.trim().is_empty() {
      Ok(Self(password))
    } else {
      Err(UserError::InvalidPassword(password))
    }
  }

  pub fn into_inner(self) -> String {
    self.0
  }
}

impl FromStr for Password {
  type Err = UserError;

  fn from_str(s: &str) -> Result<Self, Self::Err> {
    Self::new(s.to_string())
  }
}

#[cfg(test)]
mod test {
  use super::Password;

  #[test]
  fn reject_invalid_password() {
    assert!(Password::new("".to_owned()).is_err());
  }

  #[test]
  fn accepts_valid_password() {
    assert!(Password::new("123".to_owned()).is_ok());
  }
}
