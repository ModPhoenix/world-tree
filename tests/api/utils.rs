use std::net::TcpListener;

use serde::Serialize;
use serde_json::Map;

pub fn spawn_app() -> String {
  let listener = TcpListener::bind("127.0.0.1:0").expect("Failed to bind random port");
  // We retrieve the port assigned to us by the OS
  let port = listener.local_addr().unwrap().port();
  let server = graphgram::startup::run(listener).expect("Failed to bind address");
  let _ = tokio::spawn(server);

  format!("http://127.0.0.1:{port}",)
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
