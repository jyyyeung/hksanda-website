/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 17:30:20
 * @FilePath: /hksanda-website/api/resolvers/index.js
 * @Description: all resolvers
 */
import {
  getAssessmentSyllabus,
  updateAssessmentSyllabus,
} from "./assessment-syllabus.js";
import { getInstructors, addInstructor } from "./instructor.js";
import { getRankings, addPersonToRank } from "./rank.js";
import { getClasses, addClass } from "./class.js";
import { GraphQLUpload } from "graphql-upload";
import { singleUpload } from "./image.js";
import {
  getCourseContents,
  updateCourseContent,
  addCourseContent,
} from "./course-content.js";
const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    getInstructors,
    getRankings,
    getAssessmentSyllabus,
    getClasses,
    getCourseContents,
  },
  Mutation: {
    addInstructor,
    addPersonToRank,
    updateAssessmentSyllabus,
    singleUpload,
    addClass,
    updateCourseContent,
    addCourseContent,
  },
};

export default resolvers;
