use std::net::TcpListener;

use actix_web::{
  dev::Server,
  guard,
  web::{self, Data},
  App, HttpServer, Result,
};

use async_graphql::{EmptySubscription, Schema};

use crate::handlers::{graphql, graphql_playground, health_check};
use crate::model::{MutationRoot, QueryRoot};

pub fn run(listener: TcpListener) -> Result<Server, std::io::Error> {
  let schema = Schema::build(QueryRoot, MutationRoot, EmptySubscription).finish();

  let server = HttpServer::new(move || {
    App::new()
      .app_data(Data::new(schema.clone()))
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
