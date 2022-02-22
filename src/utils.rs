use async_graphql::Context;
use sqlx::PgPool;

pub fn get_db_pool<'a>(ctx: &'a Context<'_>) -> &'a PgPool {
  ctx.data_unchecked::<PgPool>()
}
