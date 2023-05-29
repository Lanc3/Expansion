export const schema = gql`
  type ProjectData {
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
    by: String!
  }

  type Query {
    projectDatas: [ProjectData!]! @skipAuth
    projectData(id: Int!): ProjectData @requireAuth
  }

  input CreateProjectDataInput {
    title: String!
    category: String!
    image: String!
    video: String!
    clientName: String!
    clientWebsite: String!
    objective: String!
    tools: String!
    body: String!
    by: String!
  }

  input UpdateProjectDataInput {
    title: String
    category: String
    image: String
    video: String
    clientName: String
    clientWebsite: String
    objective: String
    tools: String
    body: String
    by: String
  }

  type Mutation {
    createProjectData(input: CreateProjectDataInput!): ProjectData! @requireAuth
    updateProjectData(id: Int!, input: UpdateProjectDataInput!): ProjectData!
      @requireAuth
    deleteProjectData(id: Int!): ProjectData! @requireAuth
  }
`
