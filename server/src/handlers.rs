use actix_web::{web, HttpRequest, HttpResponse, Result};
use async_graphql::http::{playground_source, GraphQLPlaygroundConfig};

use async_graphql_actix_web::{GraphQLRequest, GraphQLResponse};

use crate::{graphql::schema::GraphqlSchema, service::jwt::get_claims_from_req};

pub async fn health_check() -> HttpResponse {
  HttpResponse::Ok().finish()
}

pub async fn graphql(
  schema: web::Data<GraphqlSchema>,
  http_req: HttpRequest,
  req: GraphQLRequest,
) -> GraphQLResponse {
  let mut query = req.into_inner();

  let maybe_claims = get_claims_from_req(http_req);
  if let Some(claims) = maybe_claims {
    if let Ok(claims) = claims {
      query = query.data(claims);
    }
  }

  schema.execute(query).await.into()
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
