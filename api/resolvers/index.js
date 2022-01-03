const { getInstructors, addInstructor } = require("./instructor");

const resolvers = {
  Query: { getInstructors },
  Mutation: { addInstructor },
};

module.exports = resolvers;
