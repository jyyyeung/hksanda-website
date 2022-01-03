const {
  getAssessmentSyllabus,
  updateAssessmentSyllabus,
} = require("./assessment-syllabus");
const { getInstructors, addInstructor } = require("./instructor");
const { getRankings, addPersonToRank } = require("./rank");

const resolvers = {
  Query: { getInstructors, getRankings, getAssessmentSyllabus },
  Mutation: { addInstructor, addPersonToRank, updateAssessmentSyllabus },
};

module.exports = resolvers;
