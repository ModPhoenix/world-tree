//! Time wrapper structure.

use chrono::{DateTime, NaiveDateTime, Utc};
use derive_more::From;
use serde::{Deserialize, Serialize};

/// This type uses Utc time only.
#[derive(Clone, Debug, From, Deserialize, Serialize)]
pub struct Time(DateTime<Utc>);

impl Time {
  /// Get the underlying ['DateTime']
  pub fn into_inner(self) -> DateTime<Utc> {
    self.0
  }

  /// Return the number of seconds in the Time.
  pub fn timestamp(&self) -> i64 {
    self.0.timestamp()
  }

  /// Convert a [`NaiveDateTime`] into a [`Time`]
  pub fn from_naive_utc(datetime: NaiveDateTime) -> Self {
    Time(DateTime::from_utc(datetime, Utc))
  }
}

impl From<Time> for DateTime<Utc> {
  fn from(time: Time) -> Self {
    time.0
  }
}
