import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';
export type MutationRootKeySpecifier = (
  | 'signIn'
  | 'signUp'
  | MutationRootKeySpecifier
)[];
export type MutationRootFieldPolicy = {
  signIn?: FieldPolicy<any> | FieldReadFunction<any>;
  signUp?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryRootKeySpecifier = ('users' | QueryRootKeySpecifier)[];
export type QueryRootFieldPolicy = {
  users?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | 'createdAt'
  | 'email'
  | 'id'
  | 'username'
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  username?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  MutationRoot?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationRootKeySpecifier
      | (() => undefined | MutationRootKeySpecifier);
    fields?: MutationRootFieldPolicy;
  };
  QueryRoot?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryRootKeySpecifier
      | (() => undefined | QueryRootKeySpecifier);
    fields?: QueryRootFieldPolicy;
  };
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
