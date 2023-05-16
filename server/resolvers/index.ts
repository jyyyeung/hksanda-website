import {getAssessmentSyllabus, updateAssessmentSyllabus} from "./assessment-syllabus";
import {addInstructor, getInstructors, removeInstructor, updateInstructor} from "./instructor";
import {getRankings, updateRanking} from "./rank";
import {addClass, getClasses, removeClass, updateClass} from "./class";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import {singleUpload} from "./image";
import {addCourseContent, getCourseContents, updateCourseContent} from "./course-content";
import {addView, getView, getViewByRoute, updateView} from "./view";
import {addContact, getContacts, updateContact} from "./contact";
import {addInterview, getInterviews, updateInterview} from "./interview";
import {addMasonry, getMasonryById, getMasonryByRoute, updateMasonry} from "./masonry";
import {addCarousel, getCarouselById, getCarouselByRoute, updateCarousel} from "./carousel";

export const resolvers = {
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
        getMasonryByRoute,
        getCarouselByRoute
    },
    Mutation: {
        addInstructor,
        updateInstructor,
        removeInstructor,

        // addPersonToRank,
        updateRanking,

        updateAssessmentSyllabus,

        singleUpload,

        addClass,
        updateClass,
        removeClass,

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
        updateCarousel
    }
};

export default resolvers;
