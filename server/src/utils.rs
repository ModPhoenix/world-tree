use async_graphql::{Context, Error, Result};
use sqlx::PgPool;

use crate::service::jwt::Claims;

pub fn get_db_pool<'a>(ctx: &'a Context<'_>) -> Result<&'a PgPool> {
  ctx.data::<PgPool>()
}

pub fn get_claims<'a>(ctx: &'a Context<'_>) -> Result<&'a Claims> {
  ctx.data::<Claims>().map_err(|_| Error::new("Unauthorized"))
}
