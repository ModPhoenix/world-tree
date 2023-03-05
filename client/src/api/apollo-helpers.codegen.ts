import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type MutationRootKeySpecifier = ('createNode' | 'deleteNode' | 'signIn' | 'signUp' | 'updateNode' | MutationRootKeySpecifier)[];
export type MutationRootFieldPolicy = {
	createNode?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNode?: FieldPolicy<any> | FieldReadFunction<any>,
	signIn?: FieldPolicy<any> | FieldReadFunction<any>,
	signUp?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('children' | 'content' | 'context' | 'createdAt' | 'id' | 'meanings' | 'name' | 'parent' | 'updatedAt' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	context?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	meanings?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryRootKeySpecifier = ('me' | 'node' | QueryRootKeySpecifier)[];
export type QueryRootFieldPolicy = {
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('createdAt' | 'email' | 'id' | 'updatedAt' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	MutationRoot?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationRootKeySpecifier | (() => undefined | MutationRootKeySpecifier),
		fields?: MutationRootFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	QueryRoot?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryRootKeySpecifier | (() => undefined | QueryRootKeySpecifier),
		fields?: QueryRootFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;