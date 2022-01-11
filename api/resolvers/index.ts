const {
  getAssessmentSyllabus,
  updateAssessmentSyllabus,
} = require("./assessment-syllabus");
const { getInstructors, addInstructor } = require("./instructor");
const { getRankings, addPersonToRank } = require("./rank");
const { getClasses, addClass } = require("./class");
const { GraphQLUpload } = require("graphql-upload");
const { singleUpload } = require("./image");

const resolvers = {
  Upload: GraphQLUpload,
  Query: { getInstructors, getRankings, getAssessmentSyllabus, getClasses },
  Mutation: {
    addInstructor,
    addPersonToRank,
    updateAssessmentSyllabus,
    singleUpload,
    addClass,
  },
};

module.exports = resolvers;
