import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvcG9zdHMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgUG9zdCB7XG4gICAgaWQ6IEludCFcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGJvZHk6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxuICAgIGxpa2VBbW91bnQ6IEludCFcbiAgICBJbWFnZTogU3RyaW5nXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBwb3N0czogW1Bvc3QhXSEgQHNraXBBdXRoXG4gICAgcG9zdChpZDogSW50ISk6IFBvc3QgQHJlcXVpcmVBdXRoXG4gIH1cblxuICBpbnB1dCBDcmVhdGVQb3N0SW5wdXQge1xuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgYm9keTogU3RyaW5nIVxuICAgIGxpa2VBbW91bnQ6IEludCFcbiAgICBJbWFnZTogU3RyaW5nXG4gIH1cblxuICBpbnB1dCBVcGRhdGVQb3N0SW5wdXQge1xuICAgIHRpdGxlOiBTdHJpbmdcbiAgICBib2R5OiBTdHJpbmdcbiAgICBsaWtlQW1vdW50OiBJbnRcbiAgICBJbWFnZTogU3RyaW5nXG4gIH1cbiAgaW5wdXQgVXBkYXRlUG9zdExpa2VzSW5wdXQge1xuICAgIGxpa2VBbW91bnQ6IEludFxuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlUG9zdChpbnB1dDogQ3JlYXRlUG9zdElucHV0ISk6IFBvc3QhIEByZXF1aXJlQXV0aFxuICAgIHVwZGF0ZVBvc3QoaWQ6IEludCEsIGlucHV0OiBVcGRhdGVQb3N0SW5wdXQhKTogUG9zdCEgQHJlcXVpcmVBdXRoXG4gICAgZGVsZXRlUG9zdChpZDogSW50ISk6IFBvc3QhIEByZXF1aXJlQXV0aFxuICAgIHVwZGF0ZUxpa2UoaWQ6IEludCEsIGlucHV0OiBVcGRhdGVQb3N0TGlrZXNJbnB1dCEpOiBQb3N0ISBAcmVxdWlyZUF1dGhcbiAgfVxuYFxuIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEdBQUc7QUFBekIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=