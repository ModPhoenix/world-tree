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
    format!("{}", id.into_inner())
  }
}

impl TryFrom<&str> for Id {
  type Error = &'static str;

  fn try_from(value: &str) -> Result<Self, Self::Error> {
    if let Ok(uuid) = Uuid::parse_str(value) {
      Ok(Id(uuid))
    } else {
      Err("Invalid id")
    }
  }
}
