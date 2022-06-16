//! Database models and queries.
pub mod model;
pub mod query;

use sqlx::Postgres;

/// The possible errors that may occur when working with a database.
#[derive(Debug, thiserror::Error)]
pub enum DataError {
  /// Database error.
  #[error("database error: {0}")]
  Database(#[from] sqlx::Error),
}

/// Concrete database pool wrapper.
pub type AppDatabase = Database<Postgres>;
/// Concrete database pool.
pub type DatabasePool = sqlx::postgres::PgPool;
/// Concrete database transaction.
pub type Transaction<'t> = sqlx::Transaction<'t, Postgres>;
/// Concrete database row.
pub type AppDatabaseRow = sqlx::postgres::PgRow;
/// Concrete database query result.
pub type AppQueryResult = sqlx::postgres::PgQueryResult;

/// Wrapper around a database pool.
pub struct Database<D: sqlx::Database>(sqlx::Pool<D>);

impl Database<Postgres> {
  /// Create a new `Database` with the provided `connection_string`.
  pub async fn new(connection_str: &str) -> Self {
    let pool = sqlx::postgres::PgPoolOptions::new()
      .connect(connection_str)
      .await;

    match pool {
      Ok(pool) => Self(pool),
      Err(e) => {
        eprintln!("{}\n", e);
        eprintln!("If the database has not yet been created, run: \n   $ sqlx database setup\n");
        panic!("database connection error");
      }
    }
  }
  /// Get a reference to the database connection pool.
  pub fn get_pool(&self) -> &DatabasePool {
    &self.0
  }
}

#[cfg(test)]
pub mod test {
  use crate::data::*;
  use tokio::runtime::Handle;

  pub fn new_db(handle: &Handle) -> AppDatabase {
    use sqlx::migrate::Migrator;
    use std::path::Path;

    handle.block_on(async move {
      let db = Database::new(":memory:").await;
      let migrator = Migrator::new(Path::new("./migrations")).await.unwrap();
      let pool = db.get_pool();
      migrator.run(pool).await.unwrap();
      db
    })
  }
}
