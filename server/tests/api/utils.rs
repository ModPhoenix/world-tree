use std::net::TcpListener;

use graphgram::configuration::get_configuration;
use serde::Serialize;
use serde_json::Map;
use sqlx::PgPool;

pub struct TestApp {
  pub address: String,
  pub db_pool: PgPool,
}

pub async fn spawn_app() -> TestApp {
  let listener = TcpListener::bind("127.0.0.1:0").expect("Failed to bind random port");
  // We retrieve the port assigned to us by the OS
  let port = listener.local_addr().unwrap().port();
  let address = format!("http://127.0.0.1:{port}");

  let configuration = get_configuration().expect("Failed to read configuration.");
  let connection_pool = PgPool::connect(&configuration.database.connection_string())
    .await
    .expect("Failed to connect to Postgres.");

  let server =
    graphgram::startup::run(listener, connection_pool.clone()).expect("Failed to bind address");
  let _ = tokio::spawn(server);

  TestApp {
    address,
    db_pool: connection_pool,
  }
}

#[derive(Serialize)]
pub struct GraphQLRequest {
  pub query: String,
  pub variables: Map<String, serde_json::Value>,
}

impl GraphQLRequest {
  pub fn new(query: &str, variables: Option<Map<String, serde_json::Value>>) -> Self {
    Self {
      query: query.to_string(),
      variables: variables.unwrap_or_default(),
    }
  }
}
