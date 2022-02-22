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
    .expect("Failed to execute query.");

  // Assert
  assert!(response.status().is_success());
  assert_eq!(
    "{\"data\":{\"signUp\":\"sign up\"}}",
    response.text().await.unwrap()
  );

  let saved = sqlx::query!("SELECT email, username, password FROM users")
    .fetch_one(&app.db_pool)
    .await
    .expect("Failed to fetch saved subscription.");

  assert_eq!(saved.email, "johndoe@example.com");
  assert_eq!(saved.username, "ronin");
  assert_eq!(saved.password, "password");
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
  assert_eq!(
    "{\"data\":{\"signIn\":\"sign in\"}}",
    response.text().await.unwrap()
  );
}
