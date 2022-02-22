use actix_web::{web, HttpResponse, Result};
use async_graphql::http::{playground_source, GraphQLPlaygroundConfig};

use async_graphql_actix_web::{GraphQLRequest, GraphQLResponse};

use crate::schema::GraphqlSchema;

pub async fn health_check() -> HttpResponse {
  HttpResponse::Ok().finish()
}

pub async fn graphql(schema: web::Data<GraphqlSchema>, req: GraphQLRequest) -> GraphQLResponse {
  schema.execute(req.into_inner()).await.into()
}

pub async fn graphql_playground() -> Result<HttpResponse> {
  let source =
    playground_source(GraphQLPlaygroundConfig::new("/graphql").subscription_endpoint("/graphql"));
  Ok(
    HttpResponse::Ok()
      .content_type("text/html; charset=utf-8")
      .body(source),
  )
}
