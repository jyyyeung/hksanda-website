import {getAssessmentSyllabus, updateAssessmentSyllabus} from "./assessment-syllabus.js";
import {addInstructor, getInstructors, removeInstructor, updateInstructor} from "./instructor.js";
import {addPersonToRank, getRankings} from "./rank.js";
import {addClass, getClasses, removeClass, updateClass} from "./class.js";
import {GraphQLUpload} from "graphql-upload";
import {singleUpload} from "./image.js";
import {addCourseContent, getCourseContents, updateCourseContent} from "./course-content.js";
import {addView, getView, getViewByRoute, updateView} from "./view.js";
import {addContact, getContacts, updateContact} from "./contact.js";
import {addInterview, getInterviews, updateInterview} from "./interview.js";
import {addMasonry, getMasonryById, getMasonryByRoute, updateMasonry} from "./masonry.js";
import {addCarousel, getCarouselById, getCarouselByRoute, updateCarousel} from "./carousel.js";

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
        getMasonryByRoute,
        getCarouselByRoute
    },
    Mutation: {
        addInstructor,
        updateInstructor,
        removeInstructor,

        addPersonToRank,

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
