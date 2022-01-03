const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Instructor {
    id: ID!
    name: String!
    strengths: String!
    certificates: [String]
    experiences: [String]
  }

  type Rank {
    id: ID!
    name: String!
    awardees: [String]!
  }

  input InstructorInput {
    name: String!
    strengths: String!
    certificates: [String]
    experiences: [String]
  }

  input RankInput {
    rankId: ID!
    awardee: String!
  }

  type Query {
    getInstructors: [Instructor]!
    getRankings: [Rank]!
  }

  type Mutation {
    addInstructor(instructor: InstructorInput): Instructor
    addPersonToRank(details: RankInput): Rank
  }
`;
module.exports = typeDefs;
