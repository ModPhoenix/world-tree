use sqlx::{Connection, PgConnection};

use crate::utils::{spawn_app, GraphQLRequest};
use graphgram::configuration::get_configuration;

#[tokio::test]
async fn sign_up_works() {
  // Arrange
  let address = spawn_app();
  let configuration = get_configuration().expect("Failed to read configuration");
  let connection_string = configuration.database.connection_string();
  let mut connection = PgConnection::connect(&connection_string)
    .await
    .expect("Failed to connect to Postgres.");

  let client = reqwest::Client::new();
  let query = r#"
    mutation {
      signUp(username: "ronin", email: "johndoe@example.com", password: "password")
    }
  "#;
  let request_body = GraphQLRequest::new(query, None);

  // Act
  let response = client
    .post(&format!("{address}/graphql"))
    .json(&request_body)
    .send()
    .await
    .expect("Failed to execute query.");

  // Assert
  assert!(response.status().is_success());
  assert_eq!(
    "{\"data\":{\"signUp\":\"sign up\"}}",
    response.text().await.unwrap()
  );

  let saved = sqlx::query!("SELECT email, username FROM users")
    .fetch_one(&mut connection)
    .await
    .expect("Failed to fetch saved subscription.");

  assert_eq!(saved.email, "johndoe@example.com");
  assert_eq!(saved.username, "ronin");
}

#[tokio::test]
async fn sign_in_works() {
  // Arrange
  let address = spawn_app();
  let client = reqwest::Client::new();
  let query = r#"
    mutation {
      signIn(email: "johndoe@example.com", password: "password")
    }
  "#;
  let request_body = GraphQLRequest::new(query, None);

  // Act
  let response = client
    .post(&format!("{address}/graphql"))
    .json(&request_body)
    .send()
    .await
    .expect("Failed to execute query.");

  // Assert
  assert!(response.status().is_success());
  assert_eq!(
    "{\"data\":{\"signIn\":\"sign in\"}}",
    response.text().await.unwrap()
  );
}
