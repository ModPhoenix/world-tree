use std::net::TcpListener;

use actix_cors::Cors;
use actix_web::{
  dev::Server,
  guard,
  http::header,
  web::{self, Data},
  App, HttpServer, Result,
};

use async_graphql::{EmptySubscription, Schema};
use sqlx::PgPool;

use crate::graphql::schema::{Mutation, Query};
use crate::handlers::{graphql, graphql_playground, health_check};

pub fn run(listener: TcpListener, db_pool: PgPool) -> Result<Server, std::io::Error> {
  let schema = Schema::build(Query::default(), Mutation::default(), EmptySubscription)
    .data(db_pool)
    .finish();

  let server = HttpServer::new(move || {
    App::new()
      .app_data(Data::new(schema.clone()))
      .wrap(
        Cors::default()
          .allowed_origin("http://localhost:3000")
          .allowed_origin("http://localhost:8000")
          .allowed_methods(vec!["GET", "POST"])
          .allowed_headers(vec![header::AUTHORIZATION, header::ACCEPT])
          .allowed_header(header::CONTENT_TYPE)
          .max_age(3600),
      )
      .route("/health_check", web::get().to(health_check))
      .service(web::resource("/graphql").guard(guard::Post()).to(graphql))
      .service(
        web::resource("/graphql")
          .guard(guard::Get())
          .to(graphql_playground),
      )
  })
  .listen(listener)?
  .run();

  Ok(server)
}
