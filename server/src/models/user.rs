use async_graphql::*;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct User {
  pub id: Uuid,
  pub email: String,
  pub username: String,
  pub password: String,
  pub created_at: DateTime<Utc>,
  pub updated_at: DateTime<Utc>,
}

#[Object]
impl User {
  async fn id(&self) -> Uuid {
    self.id
  }

  async fn email(&self) -> String {
    self.email.to_string()
  }

  async fn username(&self) -> String {
    self.username.to_string()
  }

  async fn created_at(&self) -> DateTime<Utc> {
    self.created_at
  }

  async fn updated_at(&self) -> DateTime<Utc> {
    self.updated_at
  }
}
