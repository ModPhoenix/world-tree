use std::net::TcpListener;

use sqlx::PgPool;
use world_tree::{configuration::get_configuration, startup::run};

#[tokio::main]
async fn main() -> std::io::Result<()> {
  let configuration = get_configuration().expect("Failed to read configuration.");
  let application_address = format!("127.0.0.1:{}", configuration.application_port);
  let connection_pool = PgPool::connect(&configuration.database.connection_string())
    .await
    .expect("Failed to connect to Postgres.");
  let listener = TcpListener::bind(application_address.clone())?;

  println!("server started at: http://{}/graphql", application_address);
  run(listener, connection_pool)?.await
}
