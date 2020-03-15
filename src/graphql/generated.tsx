/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
};

export type AddClientInput = {
  name?: Maybe<Scalars['String']>,
};

export type Client = {
   __typename?: 'Client',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};


export type Invoice = {
   __typename?: 'Invoice',
  id: Scalars['ID'],
  date?: Maybe<Scalars['Date']>,
  client?: Maybe<Client>,
  items?: Maybe<Array<Maybe<InvoiceItem>>>,
  user?: Maybe<User>,
};

export type InvoiceInput = {
  date: Scalars['Date'],
  clientId: Scalars['ID'],
  items: Array<InvoiceItemInput>,
};

export type InvoiceItem = {
   __typename?: 'InvoiceItem',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Float']>,
  unitType?: Maybe<UnitType>,
  price?: Maybe<Scalars['Float']>,
};

export type InvoiceItemInput = {
  id: Scalars['ID'],
  quantity: Scalars['Float'],
  price: Scalars['Float'],
};

export type Mutation = {
   __typename?: 'Mutation',
  register?: Maybe<Scalars['Boolean']>,
  login: Scalars['String'],
  addInvoice?: Maybe<Scalars['Boolean']>,
  addClient?: Maybe<Scalars['Boolean']>,
};


export type MutationRegisterArgs = {
  user: RegisterInputUser
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationAddInvoiceArgs = {
  invoice: InvoiceInput
};


export type MutationAddClientArgs = {
  client: AddClientInput
};

export type Query = {
   __typename?: 'Query',
  currentUser?: Maybe<User>,
  getUserById?: Maybe<User>,
  getInvoiceById?: Maybe<Invoice>,
  getClientById?: Maybe<Array<Maybe<Client>>>,
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']
};


export type QueryGetInvoiceByIdArgs = {
  id: Scalars['ID']
};


export type QueryGetClientByIdArgs = {
  id: Scalars['ID']
};

export type RegisterInputUser = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
};

export enum UnitType {
  Pc = 'PC',
  Kg = 'KG',
  L = 'L'
}

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

export type RegisterMutationVariables = {
  user: RegisterInputUser
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);


export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($user: RegisterInputUser!) {
  register(user: $user)
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;