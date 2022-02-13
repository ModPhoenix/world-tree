use async_graphql::*;

pub type GraphqlSchema = Schema<QueryRoot, EmptyMutation, EmptySubscription>;

pub struct QueryRoot;

#[Object]
impl QueryRoot {
  async fn sign_up(&self, _username: String, _email: String, _password: String) -> String {
    "sign up".to_string()
  }

  async fn sign_in(&self, _email: String, _password: String) -> String {
    "sign in".to_string()
  }
}
