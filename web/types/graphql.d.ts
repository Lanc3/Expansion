import { Prisma } from "@prisma/client"
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
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: string;
};

export type CreateNicolaPostInput = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePostInput = {
  body: Scalars['String'];
  title: Scalars['String'];
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
  deleteNicolaPost: NicolaPost;
  deletePost: Post;
  deleteProject: Project;
  updateNicolaPost: NicolaPost;
  updatePost: Post;
  updateProject: Project;
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


export type MutationdeleteNicolaPostArgs = {
  id: Scalars['Int'];
};


export type MutationdeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteProjectArgs = {
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

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  nicolaPost?: Maybe<NicolaPost>;
  nicolaPosts: Array<NicolaPost>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  project?: Maybe<Project>;
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

export type ArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Post', id: number, title: string, body: string, createdAt: string }> };

export type EditNicolaPostByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditNicolaPostById = { __typename?: 'Query', nicolaPost?: { __typename?: 'NicolaPost', id: number, title: string, body: string, createdAt: string } | null };

export type UpdateNicolaPostMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateNicolaPostInput;
}>;


export type UpdateNicolaPostMutation = { __typename?: 'Mutation', updateNicolaPost: { __typename?: 'NicolaPost', id: number, title: string, body: string, createdAt: string } };

export type CreateNicolaPostMutationVariables = Exact<{
  input: CreateNicolaPostInput;
}>;


export type CreateNicolaPostMutation = { __typename?: 'Mutation', createNicolaPost: { __typename?: 'NicolaPost', id: number } };

export type DeleteNicolaPostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteNicolaPostMutation = { __typename?: 'Mutation', deleteNicolaPost: { __typename?: 'NicolaPost', id: number } };

export type FindNicolaPostByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindNicolaPostById = { __typename?: 'Query', nicolaPost?: { __typename?: 'NicolaPost', id: number, title: string, body: string, createdAt: string } | null };

export type FindNicolaPostsVariables = Exact<{ [key: string]: never; }>;


export type FindNicolaPosts = { __typename?: 'Query', nicolaPosts: Array<{ __typename?: 'NicolaPost', id: number, title: string, body: string, createdAt: string }> };

export type NicolasArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type NicolasArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'NicolaPost', id: number, title: string, body: string, createdAt: string }> };

export type EditPostByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditPostById = { __typename?: 'Query', post?: { __typename?: 'Post', id: number, title: string, body: string, createdAt: string } | null };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: number, title: string, body: string, createdAt: string } };

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: number } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'Post', id: number } };

export type FindPostByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindPostById = { __typename?: 'Query', post?: { __typename?: 'Post', id: number, title: string, body: string, createdAt: string } | null };

export type FindPostsVariables = Exact<{ [key: string]: never; }>;


export type FindPosts = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: number, title: string, body: string, createdAt: string }> };

export type EditProjectByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditProjectById = { __typename?: 'Query', project?: { __typename?: 'Project', id: number, title: string, category: string, createdAt: string, image: string, video: string, clientName: string, clientWebsite: string, objective: string, tools: string, body: string } | null };

export type UpdateProjectMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateProjectInput;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject: { __typename?: 'Project', id: number, title: string, category: string, createdAt: string, image: string, video: string, clientName: string, clientWebsite: string, objective: string, tools: string, body: string } };

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: number } };

export type DeleteProjectMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject: { __typename?: 'Project', id: number } };

export type FindProjectByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindProjectById = { __typename?: 'Query', project?: { __typename?: 'Project', id: number, title: string, category: string, createdAt: string, image: string, video: string, clientName: string, clientWebsite: string, objective: string, tools: string, body: string } | null };

export type FindProjectsVariables = Exact<{ [key: string]: never; }>;


export type FindProjects = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: number, title: string, category: string, createdAt: string, image: string, video: string, clientName: string, clientWebsite: string, objective: string, tools: string, body: string }> };

export type FindProjectQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: number } | null };
