const {
  getAssessmentSyllabus,
  updateAssessmentSyllabus,
} = require("./assessment-syllabus");
const { getInstructors, addInstructor } = require("./instructor");
const { getRankings, addPersonToRank } = require("./rank");
const { GraphQLUpload } = require("graphql-upload");
const { singleUpload } = require("./image");

const resolvers = {
  Upload: GraphQLUpload,
  Query: { getInstructors, getRankings, getAssessmentSyllabus },
  Mutation: {
    addInstructor,
    addPersonToRank,
    updateAssessmentSyllabus,
    singleUpload,
  },
};

module.exports = resolvers;
