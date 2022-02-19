use async_graphql::*;

pub type GraphqlSchema = Schema<QueryRoot, MutationRoot, EmptySubscription>;

pub struct QueryRoot;

#[Object]
impl QueryRoot {
  async fn test(&self) -> String {
    "test".to_string()
  }
}

pub struct MutationRoot;

#[Object]
impl MutationRoot {
  async fn sign_up(&self, _username: String, _email: String, _password: String) -> String {
    "sign up".to_string()
  }

  async fn sign_in(&self, _email: String, _password: String) -> String {
    "sign in".to_string()
  }
}
