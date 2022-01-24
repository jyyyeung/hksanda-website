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
import { addView, updateView, getView, getViewByRoute } from "./view.js";
import { addContact, updateContact, getContacts } from "./contact.js";
import { addInterview, getInterviews, updateInterview } from "./interview.js";
import { addMasonry, getMasonryById, updateMasonry } from "./masonry.js";
import { addCarousel, getCarouselById, updateCarousel } from "./carousel.js";

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
    getInterviews,
    getMasonryById,
    getCarouselById,
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
