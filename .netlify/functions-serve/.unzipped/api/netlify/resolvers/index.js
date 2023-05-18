var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, {get: all[name], enumerable: true});
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
    }
    return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var resolvers_exports = {};
__export(resolvers_exports, {
    default: () => resolvers_default,
    resolvers: () => resolvers
});
module.exports = __toCommonJS(resolvers_exports);
var import_assessment_syllabus = require("./assessment-syllabus.js");
var import_instructor = require("./instructor.js");
var import_rank = require("./rank.js");
var import_class = require("./class.js");
var import_graphql_upload = require("graphql-upload");
var import_image = require("./image.js");
var import_course_content = require("./course-content.js");
var import_view = require("./view.js");
var import_contact = require("./contact.js");
var import_interview = require("./interview.js");
var import_masonry = require("./masonry.js");
var import_carousel = require("./carousel.js");
const resolvers = {
    Upload: import_graphql_upload.GraphQLUpload,
    Query: {
        getInstructors: import_instructor.getInstructors,
        getRankings: import_rank.getRankings,
        getAssessmentSyllabus: import_assessment_syllabus.getAssessmentSyllabus,
        getClasses: import_class.getClasses,
        getCourseContents: import_course_content.getCourseContents,
        getView: import_view.getView,
        getViewByRoute: import_view.getViewByRoute,
        getContacts: import_contact.getContacts,
        getInterviews: import_interview.getInterviews,
        getMasonryById: import_masonry.getMasonryById,
        getCarouselById: import_carousel.getCarouselById,
        getMasonryByRoute: import_masonry.getMasonryByRoute,
        getCarouselByRoute: import_carousel.getCarouselByRoute
    },
    Mutation: {
        addInstructor: import_instructor.addInstructor,
        updateInstructor: import_instructor.updateInstructor,
        removeInstructor: import_instructor.removeInstructor,
        updateRanking: import_rank.updateRanking,
        updateAssessmentSyllabus: import_assessment_syllabus.updateAssessmentSyllabus,
        singleUpload: import_image.singleUpload,
        addClass: import_class.addClass,
        updateClass: import_class.updateClass,
        removeClass: import_class.removeClass,
        updateCourseContent: import_course_content.updateCourseContent,
        addCourseContent: import_course_content.addCourseContent,
        addView: import_view.addView,
        updateView: import_view.updateView,
        addContact: import_contact.addContact,
        updateContact: import_contact.updateContact,
        addInterview: import_interview.addInterview,
        updateInterview: import_interview.updateInterview,
        updateMasonry: import_masonry.updateMasonry,
        addMasonry: import_masonry.addMasonry,
        addCarousel: import_carousel.addCarousel,
        updateCarousel: import_carousel.updateCarousel
    }
};
var resolvers_default = resolvers;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    resolvers
});
