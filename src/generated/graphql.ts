import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Filme = {
  __typename?: 'Filme';
  duracao: Scalars['Float'];
  estreia: Scalars['String'];
  genero: Scalars['String'];
  lancamento: Scalars['Boolean'];
  titulo: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  filme?: Maybe<Filme>;
  filmes: Array<Filme>;
};


export type QueryFilmeArgs = {
  titulo: Scalars['String'];
};

export type FilmePorNomeQueryVariables = Exact<{
  titulo: Scalars['String'];
}>;


export type FilmePorNomeQuery = { __typename?: 'Query', filme?: { __typename?: 'Filme', titulo: string, duracao: number, estreia: string, genero: string, lancamento: boolean } | null };

export type GetFilmesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFilmesQuery = { __typename?: 'Query', filmes: Array<{ __typename?: 'Filme', titulo: string, duracao: number, estreia: string, genero: string, lancamento: boolean }> };


export const FilmePorNomeDocument = gql`
    query filmePorNome($titulo: String!) {
  filme(titulo: $titulo) {
    titulo
    duracao
    estreia
    genero
    lancamento
  }
}
    `;
export const GetFilmesDocument = gql`
    query getFilmes {
  filmes {
    titulo
    duracao
    estreia
    genero
    lancamento
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    filmePorNome(variables: FilmePorNomeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FilmePorNomeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FilmePorNomeQuery>(FilmePorNomeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'filmePorNome', 'query');
    },
    getFilmes(variables?: GetFilmesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetFilmesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFilmesQuery>(GetFilmesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFilmes', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;