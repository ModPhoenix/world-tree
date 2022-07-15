use world_tree::service::user::get_user_by_email;

use crate::utils::{spawn_app, GraphQLRequest};

#[tokio::test]
async fn sign_up_works() {
  // Arrange
  let app = spawn_app().await;

  let client = reqwest::Client::new();
  let query = r#"
    mutation {
      signUp(username: "ronin", email: "johndoe@example.com", password: "password")
    }
  "#;
  let request_body = GraphQLRequest::new(query, None);

  // Act
  let response = client
    .post(&format!("{}/graphql", &app.address))
    .json(&request_body)
    .send()
    .await
    .unwrap();

  // Assert
  assert!(response.status().is_success());

  let saved = get_user_by_email("johndoe@example.com", &app.db_pool)
    .await
    .unwrap();

  assert_eq!(saved.email.into_inner(), "johndoe@example.com");
  assert_eq!(saved.username.into_inner(), "ronin");
  assert_eq!(saved.password.into_inner(), "password");
}

#[tokio::test]
async fn sign_in_works() {
  // Arrange
  let app = spawn_app().await;
  let client = reqwest::Client::new();
  let query = r#"
    mutation {
      signIn(email: "johndoe@example.com", password: "password")
    }
  "#;
  let request_body = GraphQLRequest::new(query, None);

  // Act
  let response = client
    .post(&format!("{}/graphql", &app.address))
    .json(&request_body)
    .send()
    .await
    .expect("Failed to execute query.");

  // Assert
  assert!(response.status().is_success());
}
