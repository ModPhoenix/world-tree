use actix_web::HttpRequest;
use chrono::{Duration, Local};
use jsonwebtoken::{decode, encode, errors::Error, DecodingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};

use crate::domain::User;

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
  // subject
  pub sub: String,
  // issued at
  pub iat: i64,
  // expiry
  pub exp: i64,
  // user email
  pub email: String,
}

impl Claims {
  pub(crate) fn new(user: &User, auth_duration_in_hour: u16) -> Self {
    let User { id, email, .. } = user;

    let iat = Local::now();
    let exp = iat + Duration::hours(i64::from(auth_duration_in_hour));

    Claims {
      sub: id.to_string(),
      email: email.into(),
      iat: iat.timestamp(),
      exp: exp.timestamp(),
    }
  }
}

pub fn encode_jwt(user: &User) -> String {
  let claims = Claims::new(user, 24);
  let encoded = encode(
    &Header::default(),
    &claims,
    &EncodingKey::from_secret("secret".as_ref()),
  )
  .unwrap();

  encoded
}

pub fn decode_jwt(token: String) -> Result<Claims, Error> {
  let claims = decode::<Claims>(
    &token,
    &DecodingKey::from_secret("secret".as_ref()),
    &Validation::default(),
  )?
  .claims;

  Ok(claims)
}

pub fn get_claims_from_req(request: HttpRequest) -> Option<Result<Claims, Error>> {
  request
    .headers()
    .get("Authorization")
    .and_then(|header_value| {
      header_value.to_str().ok().map(|s| {
        let jwt = s.split(' ').last().unwrap_or_default();

        let token_data = decode_jwt(jwt.to_owned());

        token_data
      })
    })
}
