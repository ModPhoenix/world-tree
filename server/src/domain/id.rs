use derive_more::{Display, From};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

/// Internal database ID that can be used for any ID purposes.
#[derive(Clone, Debug, From, Display, Deserialize, Serialize)]
pub struct Id(Uuid);

impl Id {
  /// Create a new database ID.
  pub fn new() -> Id {
    Uuid::new_v4().into()
  }

  pub fn into_inner(self) -> Uuid {
    self.0
  }
}

impl Default for Id {
  fn default() -> Self {
    Self::new()
  }
}

impl From<Id> for String {
  fn from(id: Id) -> Self {
    format!("{}", id.0)
  }
}

impl TryFrom<&str> for Id {
  type Error = &'static str;

  fn try_from(value: &str) -> Result<Self, Self::Error> {
    // Uuid::parse_str("a1a2a3a4-b1b2-c1c2-d1d2-d3d4d5d6d7d8");
    // Ok(Id(Uuid::parse_str(value)?))

    if let Ok(uuid) = Uuid::parse_str(value) {
      Ok(Id(uuid))
    } else {
      Err("Invalid id")
    }

    // if value <= 0 {
    //   Err("GreaterThanZero only accepts value superior than zero!")
    // } else {
    //   Ok(GreaterThanZero(value))
    // }
  }
}
