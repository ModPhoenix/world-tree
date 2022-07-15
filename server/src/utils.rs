use async_graphql::{Context, Result};
use sqlx::PgPool;

pub fn get_db_pool<'a>(ctx: &'a Context<'_>) -> Result<&'a PgPool> {
  ctx.data::<PgPool>()
}
