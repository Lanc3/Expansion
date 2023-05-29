export const schema = gql`
  type NicolaPost {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    nicolaPosts: [NicolaPost!]! @skipAuth
    nicolaPost(id: Int!): NicolaPost @requireAuth
  }

  input CreateNicolaPostInput {
    title: String!
    body: String!
  }

  input UpdateNicolaPostInput {
    title: String
    body: String
  }

  type Mutation {
    createNicolaPost(input: CreateNicolaPostInput!): NicolaPost! @requireAuth
    updateNicolaPost(id: Int!, input: UpdateNicolaPostInput!): NicolaPost!
      @requireAuth
    deleteNicolaPost(id: Int!): NicolaPost! @requireAuth
  }
`
