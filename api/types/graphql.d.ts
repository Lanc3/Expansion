import { Prisma } from "@prisma/client"
import { MergePrismaWithSdlTypes, MakeRelationsOptional } from '@redwoodjs/api'
import { User as PrismaUser, Post as PrismaPost, NicolaPost as PrismaNicolaPost, ProjectData as PrismaProjectData } from '@prisma/client'
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/functions/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type OptArgsResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>

    export type RequiredResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args: TArgs,
      obj: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: Date | string;
  DateTime: Date | string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: Date | string;
};

export type CreateNicolaPostInput = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePostInput = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type CreateProjectDataInput = {
  body: Scalars['String'];
  by: Scalars['String'];
  category: Scalars['String'];
  clientName: Scalars['String'];
  clientWebsite: Scalars['String'];
  image: Scalars['String'];
  objective: Scalars['String'];
  title: Scalars['String'];
  tools: Scalars['String'];
  video: Scalars['String'];
};

export type CreateProjectInput = {
  body: Scalars['String'];
  category: Scalars['String'];
  clientName: Scalars['String'];
  clientWebsite: Scalars['String'];
  image: Scalars['String'];
  objective: Scalars['String'];
  title: Scalars['String'];
  tools: Scalars['String'];
  video: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNicolaPost: NicolaPost;
  createPost: Post;
  createProject: Project;
  createProjectData: ProjectData;
  deleteNicolaPost: NicolaPost;
  deletePost: Post;
  deleteProject: Project;
  deleteProjectData: ProjectData;
  updateNicolaPost: NicolaPost;
  updatePost: Post;
  updateProject: Project;
  updateProjectData: ProjectData;
};


export type MutationcreateNicolaPostArgs = {
  input: CreateNicolaPostInput;
};


export type MutationcreatePostArgs = {
  input: CreatePostInput;
};


export type MutationcreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationcreateProjectDataArgs = {
  input: CreateProjectDataInput;
};


export type MutationdeleteNicolaPostArgs = {
  id: Scalars['Int'];
};


export type MutationdeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteProjectArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteProjectDataArgs = {
  id: Scalars['Int'];
};


export type MutationupdateNicolaPostArgs = {
  id: Scalars['Int'];
  input: UpdateNicolaPostInput;
};


export type MutationupdatePostArgs = {
  id: Scalars['Int'];
  input: UpdatePostInput;
};


export type MutationupdateProjectArgs = {
  id: Scalars['Int'];
  input: UpdateProjectInput;
};


export type MutationupdateProjectDataArgs = {
  id: Scalars['Int'];
  input: UpdateProjectDataInput;
};

export type NicolaPost = {
  __typename?: 'NicolaPost';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  body: Scalars['String'];
  category: Scalars['String'];
  clientName: Scalars['String'];
  clientWebsite: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  image: Scalars['String'];
  objective: Scalars['String'];
  title: Scalars['String'];
  tools: Scalars['String'];
  video: Scalars['String'];
};

export type ProjectData = {
  __typename?: 'ProjectData';
  body: Scalars['String'];
  by: Scalars['String'];
  category: Scalars['String'];
  clientName: Scalars['String'];
  clientWebsite: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  image: Scalars['String'];
  objective: Scalars['String'];
  title: Scalars['String'];
  tools: Scalars['String'];
  video: Scalars['String'];
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  nicolaPost?: Maybe<NicolaPost>;
  nicolaPosts: Array<NicolaPost>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  project?: Maybe<Project>;
  projectData?: Maybe<ProjectData>;
  projectDatas: Array<ProjectData>;
  projects: Array<Project>;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
};


/** About the Redwood queries. */
export type QuerynicolaPostArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QuerypostArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryprojectArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryprojectDataArgs = {
  id: Scalars['Int'];
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type UpdateNicolaPostInput = {
  body?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdatePostInput = {
  body?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectDataInput = {
  body?: InputMaybe<Scalars['String']>;
  by?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  clientName?: InputMaybe<Scalars['String']>;
  clientWebsite?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  objective?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  tools?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectInput = {
  body?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  clientName?: InputMaybe<Scalars['String']>;
  clientWebsite?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  objective?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  tools?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['String']>;
};

type MaybeOrArrayOfMaybe<T> = T | Maybe<T> | Maybe<T>[];
type AllMappedModels = MaybeOrArrayOfMaybe<NicolaPost | Post | ProjectData>


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateNicolaPostInput: CreateNicolaPostInput;
  CreatePostInput: CreatePostInput;
  CreateProjectDataInput: CreateProjectDataInput;
  CreateProjectInput: CreateProjectInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  NicolaPost: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaNicolaPost, MakeRelationsOptional<NicolaPost, AllMappedModels>, AllMappedModels>>;
  Post: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaPost, MakeRelationsOptional<Post, AllMappedModels>, AllMappedModels>>;
  Project: ResolverTypeWrapper<Project>;
  ProjectData: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaProjectData, MakeRelationsOptional<ProjectData, AllMappedModels>, AllMappedModels>>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateNicolaPostInput: UpdateNicolaPostInput;
  UpdatePostInput: UpdatePostInput;
  UpdateProjectDataInput: UpdateProjectDataInput;
  UpdateProjectInput: UpdateProjectInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  CreateNicolaPostInput: CreateNicolaPostInput;
  CreatePostInput: CreatePostInput;
  CreateProjectDataInput: CreateProjectDataInput;
  CreateProjectInput: CreateProjectInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  NicolaPost: MergePrismaWithSdlTypes<PrismaNicolaPost, MakeRelationsOptional<NicolaPost, AllMappedModels>, AllMappedModels>;
  Post: MergePrismaWithSdlTypes<PrismaPost, MakeRelationsOptional<Post, AllMappedModels>, AllMappedModels>;
  Project: Project;
  ProjectData: MergePrismaWithSdlTypes<PrismaProjectData, MakeRelationsOptional<ProjectData, AllMappedModels>, AllMappedModels>;
  Query: {};
  Redwood: Redwood;
  String: Scalars['String'];
  Time: Scalars['Time'];
  UpdateNicolaPostInput: UpdateNicolaPostInput;
  UpdatePostInput: UpdatePostInput;
  UpdateProjectDataInput: UpdateProjectDataInput;
  UpdateProjectInput: UpdateProjectInput;
};

export type requireAuthDirectiveArgs = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type requireAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = requireAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type skipAuthDirectiveArgs = { };

export type skipAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = skipAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JSONObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createNicolaPost: Resolver<ResolversTypes['NicolaPost'], ParentType, ContextType, RequireFields<MutationcreateNicolaPostArgs, 'input'>>;
  createPost: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationcreatePostArgs, 'input'>>;
  createProject: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationcreateProjectArgs, 'input'>>;
  createProjectData: Resolver<ResolversTypes['ProjectData'], ParentType, ContextType, RequireFields<MutationcreateProjectDataArgs, 'input'>>;
  deleteNicolaPost: Resolver<ResolversTypes['NicolaPost'], ParentType, ContextType, RequireFields<MutationdeleteNicolaPostArgs, 'id'>>;
  deletePost: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationdeletePostArgs, 'id'>>;
  deleteProject: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationdeleteProjectArgs, 'id'>>;
  deleteProjectData: Resolver<ResolversTypes['ProjectData'], ParentType, ContextType, RequireFields<MutationdeleteProjectDataArgs, 'id'>>;
  updateNicolaPost: Resolver<ResolversTypes['NicolaPost'], ParentType, ContextType, RequireFields<MutationupdateNicolaPostArgs, 'id' | 'input'>>;
  updatePost: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationupdatePostArgs, 'id' | 'input'>>;
  updateProject: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationupdateProjectArgs, 'id' | 'input'>>;
  updateProjectData: Resolver<ResolversTypes['ProjectData'], ParentType, ContextType, RequireFields<MutationupdateProjectDataArgs, 'id' | 'input'>>;
};

export type MutationRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createNicolaPost?: RequiredResolverFn<ResolversTypes['NicolaPost'], ParentType, ContextType, RequireFields<MutationcreateNicolaPostArgs, 'input'>>;
  createPost?: RequiredResolverFn<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationcreatePostArgs, 'input'>>;
  createProject?: RequiredResolverFn<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationcreateProjectArgs, 'input'>>;
  createProjectData?: RequiredResolverFn<ResolversTypes['ProjectData'], ParentType, ContextType, RequireFields<MutationcreateProjectDataArgs, 'input'>>;
  deleteNicolaPost?: RequiredResolverFn<ResolversTypes['NicolaPost'], ParentType, ContextType, RequireFields<MutationdeleteNicolaPostArgs, 'id'>>;
  deletePost?: RequiredResolverFn<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationdeletePostArgs, 'id'>>;
  deleteProject?: RequiredResolverFn<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationdeleteProjectArgs, 'id'>>;
  deleteProjectData?: RequiredResolverFn<ResolversTypes['ProjectData'], ParentType, ContextType, RequireFields<MutationdeleteProjectDataArgs, 'id'>>;
  updateNicolaPost?: RequiredResolverFn<ResolversTypes['NicolaPost'], ParentType, ContextType, RequireFields<MutationupdateNicolaPostArgs, 'id' | 'input'>>;
  updatePost?: RequiredResolverFn<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationupdatePostArgs, 'id' | 'input'>>;
  updateProject?: RequiredResolverFn<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationupdateProjectArgs, 'id' | 'input'>>;
  updateProjectData?: RequiredResolverFn<ResolversTypes['ProjectData'], ParentType, ContextType, RequireFields<MutationupdateProjectDataArgs, 'id' | 'input'>>;
};

export type NicolaPostResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['NicolaPost'] = ResolversParentTypes['NicolaPost']> = {
  body: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NicolaPostRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['NicolaPost'] = ResolversParentTypes['NicolaPost']> = {
  body?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  body: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  body?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  body: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  category: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientName: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientWebsite: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  image: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  objective: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  tools: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  video: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  body?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  category?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientName?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientWebsite?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  image?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  objective?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  tools?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  video?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectDataResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ProjectData'] = ResolversParentTypes['ProjectData']> = {
  body: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  by: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  category: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientName: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientWebsite: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  image: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  objective: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  tools: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  video: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectDataRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ProjectData'] = ResolversParentTypes['ProjectData']> = {
  body?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  by?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  category?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientName?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  clientWebsite?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  image?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  objective?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  tools?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  video?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  nicolaPost: Resolver<Maybe<ResolversTypes['NicolaPost']>, ParentType, ContextType, RequireFields<QuerynicolaPostArgs, 'id'>>;
  nicolaPosts: OptArgsResolverFn<Array<ResolversTypes['NicolaPost']>, ParentType, ContextType>;
  post: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QuerypostArgs, 'id'>>;
  posts: OptArgsResolverFn<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  project: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryprojectArgs, 'id'>>;
  projectData: Resolver<Maybe<ResolversTypes['ProjectData']>, ParentType, ContextType, RequireFields<QueryprojectDataArgs, 'id'>>;
  projectDatas: OptArgsResolverFn<Array<ResolversTypes['ProjectData']>, ParentType, ContextType>;
  projects: OptArgsResolverFn<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  redwood: OptArgsResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
};

export type QueryRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  nicolaPost?: RequiredResolverFn<Maybe<ResolversTypes['NicolaPost']>, ParentType, ContextType, RequireFields<QuerynicolaPostArgs, 'id'>>;
  nicolaPosts?: RequiredResolverFn<Array<ResolversTypes['NicolaPost']>, ParentType, ContextType>;
  post?: RequiredResolverFn<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QuerypostArgs, 'id'>>;
  posts?: RequiredResolverFn<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  project?: RequiredResolverFn<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryprojectArgs, 'id'>>;
  projectData?: RequiredResolverFn<Maybe<ResolversTypes['ProjectData']>, ParentType, ContextType, RequireFields<QueryprojectDataArgs, 'id'>>;
  projectDatas?: RequiredResolverFn<Array<ResolversTypes['ProjectData']>, ParentType, ContextType>;
  projects?: RequiredResolverFn<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  redwood?: RequiredResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser: OptArgsResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedwoodRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser?: RequiredResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type Resolvers<ContextType = RedwoodGraphQLContext> = {
  BigInt: GraphQLScalarType;
  Date: GraphQLScalarType;
  DateTime: GraphQLScalarType;
  JSON: GraphQLScalarType;
  JSONObject: GraphQLScalarType;
  Mutation: MutationResolvers<ContextType>;
  NicolaPost: NicolaPostResolvers<ContextType>;
  Post: PostResolvers<ContextType>;
  Project: ProjectResolvers<ContextType>;
  ProjectData: ProjectDataResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Redwood: RedwoodResolvers<ContextType>;
  Time: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = RedwoodGraphQLContext> = {
  requireAuth: requireAuthDirectiveResolver<any, any, ContextType>;
  skipAuth: skipAuthDirectiveResolver<any, any, ContextType>;
};
