const { getInstructors, addInstructor } = require("./instructor");
const { getRankings, addPersonToRank } = require("./rank");

const resolvers = {
  Query: { getInstructors, getRankings },
  Mutation: { addInstructor, addPersonToRank },
};

module.exports = resolvers;
