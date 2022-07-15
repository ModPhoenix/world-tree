use async_graphql::*;

use crate::{
  service::{
    self,
    jwt::{encode_jwt, Claims},
    user::{create_user, get_user_by_email, get_user_by_id, get_users},
  },
  utils::get_db_pool,
};

use super::User;

#[derive(Default)]
pub struct AuthQuery;

#[Object]
impl AuthQuery {
  async fn me(&self, ctx: &Context<'_>) -> Result<User> {
    let Claims { sub, .. } = ctx
      .data::<Claims>()
      .map_err(|_| Error::new("Unauthorized"))?;

    let pool = get_db_pool(ctx)?;

    let user = get_user_by_id(sub.as_str().try_into()?, &pool)
      .await?
      .try_into()?;

    Ok(user)
  }

  async fn users(&self, ctx: &Context<'_>) -> Result<Vec<User>> {
    ctx
      .data::<Claims>()
      .map_err(|_| Error::new("Unauthorized"))?;

    let pool = get_db_pool(ctx)?;

    let users = get_users(pool)
      .await?
      .into_iter()
      .flat_map(|user| user.try_into())
      .collect();

    Ok(users)
  }
}

#[derive(Default)]
pub struct AuthMutations;

#[Object]
impl AuthMutations {
  async fn sign_up(
    &self,
    ctx: &Context<'_>,
    #[graphql(validator(email))] email: String,
    username: String,
    #[graphql(validator(min_length = 8))] password: String,
  ) -> Result<String> {
    let pool = get_db_pool(ctx)?;

    let user = create_user(
      service::user::NewUser {
        email,
        username,
        password,
      },
      pool,
    )
    .await?;

    println!("user {:?}", user);

    Ok(encode_jwt(&user))
  }

  async fn sign_in(
    &self,
    ctx: &Context<'_>,
    #[graphql(validator(email))] email: String,
    password: String,
  ) -> Result<String> {
    let pool = get_db_pool(ctx)?;

    let error = Error::new("invalid email or password");

    let user = get_user_by_email(&email, pool)
      .await
      .map_err(|_| error.clone())?;

    println!("user {:?}", user);

    if user.password.clone().into_inner() == password {
      Ok(encode_jwt(&user))
    } else {
      Err(error)
    }
  }
}
