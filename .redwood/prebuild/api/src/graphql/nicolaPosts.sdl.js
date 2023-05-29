import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvbmljb2xhUG9zdHMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgTmljb2xhUG9zdCB7XG4gICAgaWQ6IEludCFcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGJvZHk6IFN0cmluZyFcbiAgICBjcmVhdGVkQXQ6IERhdGVUaW1lIVxuICB9XG5cbiAgdHlwZSBRdWVyeSB7XG4gICAgbmljb2xhUG9zdHM6IFtOaWNvbGFQb3N0IV0hIEBza2lwQXV0aFxuICAgIG5pY29sYVBvc3QoaWQ6IEludCEpOiBOaWNvbGFQb3N0IEByZXF1aXJlQXV0aFxuICB9XG5cbiAgaW5wdXQgQ3JlYXRlTmljb2xhUG9zdElucHV0IHtcbiAgICB0aXRsZTogU3RyaW5nIVxuICAgIGJvZHk6IFN0cmluZyFcbiAgfVxuXG4gIGlucHV0IFVwZGF0ZU5pY29sYVBvc3RJbnB1dCB7XG4gICAgdGl0bGU6IFN0cmluZ1xuICAgIGJvZHk6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlTmljb2xhUG9zdChpbnB1dDogQ3JlYXRlTmljb2xhUG9zdElucHV0ISk6IE5pY29sYVBvc3QhIEByZXF1aXJlQXV0aFxuICAgIHVwZGF0ZU5pY29sYVBvc3QoaWQ6IEludCEsIGlucHV0OiBVcGRhdGVOaWNvbGFQb3N0SW5wdXQhKTogTmljb2xhUG9zdCFcbiAgICAgIEByZXF1aXJlQXV0aFxuICAgIGRlbGV0ZU5pY29sYVBvc3QoaWQ6IEludCEpOiBOaWNvbGFQb3N0ISBAcmVxdWlyZUF1dGhcbiAgfVxuYFxuIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEdBQUc7QUFBekIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=