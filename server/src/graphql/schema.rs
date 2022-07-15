use async_graphql::*;

use super::auth::{AuthMutations, AuthQuery};

#[derive(MergedObject, Default)]
pub struct Query(AuthQuery);

#[derive(MergedObject, Default)]
pub struct Mutation(AuthMutations);

pub type GraphqlSchema = Schema<Query, Mutation, EmptySubscription>;
