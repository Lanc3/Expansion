import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvcHJvamVjdERhdGFzLnNkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlIFByb2plY3REYXRhIHtcbiAgICBpZDogSW50IVxuICAgIHRpdGxlOiBTdHJpbmchXG4gICAgY2F0ZWdvcnk6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxuICAgIGltYWdlOiBTdHJpbmchXG4gICAgdmlkZW86IFN0cmluZyFcbiAgICBjbGllbnROYW1lOiBTdHJpbmchXG4gICAgY2xpZW50V2Vic2l0ZTogU3RyaW5nIVxuICAgIG9iamVjdGl2ZTogU3RyaW5nIVxuICAgIHRvb2xzOiBTdHJpbmchXG4gICAgYm9keTogU3RyaW5nIVxuICAgIGJ5OiBTdHJpbmchXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBwcm9qZWN0RGF0YXM6IFtQcm9qZWN0RGF0YSFdISBAc2tpcEF1dGhcbiAgICBwcm9qZWN0RGF0YShpZDogSW50ISk6IFByb2plY3REYXRhIEByZXF1aXJlQXV0aFxuICB9XG5cbiAgaW5wdXQgQ3JlYXRlUHJvamVjdERhdGFJbnB1dCB7XG4gICAgdGl0bGU6IFN0cmluZyFcbiAgICBjYXRlZ29yeTogU3RyaW5nIVxuICAgIGltYWdlOiBTdHJpbmchXG4gICAgdmlkZW86IFN0cmluZyFcbiAgICBjbGllbnROYW1lOiBTdHJpbmchXG4gICAgY2xpZW50V2Vic2l0ZTogU3RyaW5nIVxuICAgIG9iamVjdGl2ZTogU3RyaW5nIVxuICAgIHRvb2xzOiBTdHJpbmchXG4gICAgYm9keTogU3RyaW5nIVxuICAgIGJ5OiBTdHJpbmchXG4gIH1cblxuICBpbnB1dCBVcGRhdGVQcm9qZWN0RGF0YUlucHV0IHtcbiAgICB0aXRsZTogU3RyaW5nXG4gICAgY2F0ZWdvcnk6IFN0cmluZ1xuICAgIGltYWdlOiBTdHJpbmdcbiAgICB2aWRlbzogU3RyaW5nXG4gICAgY2xpZW50TmFtZTogU3RyaW5nXG4gICAgY2xpZW50V2Vic2l0ZTogU3RyaW5nXG4gICAgb2JqZWN0aXZlOiBTdHJpbmdcbiAgICB0b29sczogU3RyaW5nXG4gICAgYm9keTogU3RyaW5nXG4gICAgYnk6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlUHJvamVjdERhdGEoaW5wdXQ6IENyZWF0ZVByb2plY3REYXRhSW5wdXQhKTogUHJvamVjdERhdGEhIEByZXF1aXJlQXV0aFxuICAgIHVwZGF0ZVByb2plY3REYXRhKGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlUHJvamVjdERhdGFJbnB1dCEpOiBQcm9qZWN0RGF0YSFcbiAgICAgIEByZXF1aXJlQXV0aFxuICAgIGRlbGV0ZVByb2plY3REYXRhKGlkOiBJbnQhKTogUHJvamVjdERhdGEhIEByZXF1aXJlQXV0aFxuICB9XG5gXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==