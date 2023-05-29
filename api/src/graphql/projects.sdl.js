export const schema = gql`
  type Project {
    id: Int!
    title: String!
    category: String!
    createdAt: DateTime!
    image: String!
    video: String!
    clientName: String!
    clientWebsite: String!
    objective: String!
    tools: String!
    body: String!
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: Int!): Project @requireAuth
  }

  input CreateProjectInput {
    title: String!
    category: String!
    image: String!
    video: String!
    clientName: String!
    clientWebsite: String!
    objective: String!
    tools: String!
    body: String!
  }

  input UpdateProjectInput {
    title: String
    category: String
    image: String
    video: String
    clientName: String
    clientWebsite: String
    objective: String
    tools: String
    body: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
