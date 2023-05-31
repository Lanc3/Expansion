export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    likeAmount: Int!
    Image: String
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
    likeAmount: Int!
    Image: String
  }

  input UpdatePostInput {
    title: String
    body: String
    likeAmount: Int
    Image: String
  }
  input UpdatePostLikesInput {
    likeAmount: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
    updateLike(id: Int!, input: UpdatePostLikesInput!): Post! @requireAuth
  }
`
