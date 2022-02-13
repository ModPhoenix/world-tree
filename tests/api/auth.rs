use crate::utils::{spawn_app, GraphQLRequest};

#[tokio::test]
async fn sign_in_works() {
  // Arrange
  let address = spawn_app();
  let client = reqwest::Client::new();
  let query = r#"
    query {
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

#[tokio::test]
async fn sign_up_works() {
  // Arrange
  let address = spawn_app();
  let client = reqwest::Client::new();
  let query = r#"
    query {
      signUp(username: "John", email: "johndoe@example.com", password: "password")
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
}
