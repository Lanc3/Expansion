import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvcHJvamVjdHMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgUHJvamVjdCB7XG4gICAgaWQ6IEludCFcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGNhdGVnb3J5OiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBEYXRlVGltZSFcbiAgICBpbWFnZTogU3RyaW5nIVxuICAgIHZpZGVvOiBTdHJpbmchXG4gICAgY2xpZW50TmFtZTogU3RyaW5nIVxuICAgIGNsaWVudFdlYnNpdGU6IFN0cmluZyFcbiAgICBvYmplY3RpdmU6IFN0cmluZyFcbiAgICB0b29sczogU3RyaW5nIVxuICAgIGJvZHk6IFN0cmluZyFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIHByb2plY3RzOiBbUHJvamVjdCFdISBAcmVxdWlyZUF1dGhcbiAgICBwcm9qZWN0KGlkOiBJbnQhKTogUHJvamVjdCBAcmVxdWlyZUF1dGhcbiAgfVxuXG4gIGlucHV0IENyZWF0ZVByb2plY3RJbnB1dCB7XG4gICAgdGl0bGU6IFN0cmluZyFcbiAgICBjYXRlZ29yeTogU3RyaW5nIVxuICAgIGltYWdlOiBTdHJpbmchXG4gICAgdmlkZW86IFN0cmluZyFcbiAgICBjbGllbnROYW1lOiBTdHJpbmchXG4gICAgY2xpZW50V2Vic2l0ZTogU3RyaW5nIVxuICAgIG9iamVjdGl2ZTogU3RyaW5nIVxuICAgIHRvb2xzOiBTdHJpbmchXG4gICAgYm9keTogU3RyaW5nIVxuICB9XG5cbiAgaW5wdXQgVXBkYXRlUHJvamVjdElucHV0IHtcbiAgICB0aXRsZTogU3RyaW5nXG4gICAgY2F0ZWdvcnk6IFN0cmluZ1xuICAgIGltYWdlOiBTdHJpbmdcbiAgICB2aWRlbzogU3RyaW5nXG4gICAgY2xpZW50TmFtZTogU3RyaW5nXG4gICAgY2xpZW50V2Vic2l0ZTogU3RyaW5nXG4gICAgb2JqZWN0aXZlOiBTdHJpbmdcbiAgICB0b29sczogU3RyaW5nXG4gICAgYm9keTogU3RyaW5nXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjcmVhdGVQcm9qZWN0KGlucHV0OiBDcmVhdGVQcm9qZWN0SW5wdXQhKTogUHJvamVjdCEgQHJlcXVpcmVBdXRoXG4gICAgdXBkYXRlUHJvamVjdChpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZVByb2plY3RJbnB1dCEpOiBQcm9qZWN0ISBAcmVxdWlyZUF1dGhcbiAgICBkZWxldGVQcm9qZWN0KGlkOiBJbnQhKTogUHJvamVjdCEgQHJlcXVpcmVBdXRoXG4gIH1cbmBcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==