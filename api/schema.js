const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Instructor {
    id: ID!
    name: String!
    strengths: String!
    certificates: [String]
    experiences: [String]
  }

  input InstructorInput {
    name: String!
    strengths: String!
    certificates: [String]
    experiences: [String]
  }
  type Query {
    getInstructors: [Instructor]
  }
  type Mutation {
    addInstructor(instructor: InstructorInput): Instructor
  }
`;
module.exports = typeDefs;
