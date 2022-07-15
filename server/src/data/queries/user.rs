use crate::{
  data::{models, DataError, DatabasePool},
  domain::{self, Id},
};

type Result<T> = std::result::Result<T, DataError>;

pub async fn get_user_by_id(id: Id, pool: &DatabasePool) -> Result<models::User> {
  Ok(
    sqlx::query_as!(
      models::User,
      "SELECT * FROM users WHERE id = $1",
      id.into_inner()
    )
    .fetch_one(pool)
    .await?,
  )
}

pub async fn get_user_by_email(email: &str, pool: &DatabasePool) -> Result<models::User> {
  Ok(
    sqlx::query_as!(models::User, "SELECT * FROM users WHERE email = $1", email)
      .fetch_one(pool)
      .await?,
  )
}

pub async fn get_users(pool: &DatabasePool) -> Result<Vec<models::User>> {
  Ok(
    sqlx::query_as!(models::User, r#"SELECT * FROM users"#)
      .fetch_all(pool)
      .await?,
  )
}

pub async fn create_user(user: domain::User, pool: &DatabasePool) -> Result<models::User> {
  let _ = sqlx::query_as!(
    User,
    r#"
        INSERT INTO users (id, email, username, password, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6)
      "#,
    user.id.clone().into_inner(),
    user.email.into_inner(),
    user.username.into_inner(),
    user.password.into_inner(),
    user.created_at.into_inner(),
    user.updated_at.into_inner(),
  )
  .execute(pool)
  .await?;

  let user = get_user_by_id(user.id, pool).await?;
  Ok(user)
}
