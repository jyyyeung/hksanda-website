/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-19 10:30:20
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
import { singleUpload, getImages, getImageById } from "./image.js";
import {
  getCourseContents,
  updateCourseContent,
  addCourseContent,
} from "./course-content.js";
import { addView, updateView, getView, getViewByRoute } from "./view.js";
import { addContact, updateContact, getContacts } from "./contact.js";
import { addInterview, getInterviews, updateInterview } from "./interview.js";
import { addMasonry, getMasonry, updateMasonry } from "./masonry.js";
import { addCarousel, getCarousel, updateCarousel } from "./carousel.js";

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    getInstructors,
    getRankings,
    getAssessmentSyllabus,
    getClasses,
    getCourseContents,
    getView,
    getViewByRoute,
    getContacts,
    getImages,
    getImageById,
    getInterviews,
    getMasonry,
    getCarousel,
  },
  Mutation: {
    addInstructor,
    addPersonToRank,
    updateAssessmentSyllabus,
    singleUpload,
    addClass,
    updateCourseContent,
    addCourseContent,
    addView,
    updateView,
    addContact,
    updateContact,
    addInterview,
    updateInterview,
    updateMasonry,
    addMasonry,
    addCarousel,
    updateCarousel,
  },
};

export default resolvers;
