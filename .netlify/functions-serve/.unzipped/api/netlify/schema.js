var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var schema_exports = {};
__export(schema_exports, {
    schema: () => schema
});
module.exports = __toCommonJS(schema_exports);
var import_graphql_tag = __toESM(require("graphql-tag"), 1);
const schema = import_graphql_tag.default`
    scalar Upload
    scalar Date

    type File {
        _id: ID!
        fileName: String!
        width: Int
        height: Int
        extname: String
        imgUrl: String!
        type: String
    }
    type Image {
        imageUrl: String!
        alt: String!
        title: String
        paragraph: String
    }

    type Instructor {
        id: ID!
        name: String!
        strengths: String!
        certificates: [String]
        experiences: [String]
    }

    type Rank {
        id: ID!
        name: String!
        awardees: [String]!
    }

    type Syllabus {
        id: ID!
        level: String
        index: Int
        syllabus: [String]!
    }

    type Class {
        id: ID!
        title: String!
        type: String!
        classroom: String
        time: String!
        students: String!
        location: String
        mapQuery: String
    }

    type CourseContent {
        id: ID!
        name: String!
        content: String!
    }

    type View {
        id: ID!
        title: String!
        content: String!
        route: String!
    }

    type Contact {
        id: ID!
        field: String!
        icon: String!
        to: String
        content: String!
    }

    type Interview {
        id: ID!
        company: String!
        title: String
        images: [Image]
        url: String
        publishedDate: Date!
    }

    type Masonry {
        id: ID!
        title: String
        route: String
        order: Int
        images: [Image]
    }
    type Carousel {
        id: ID!
        route: String
        order: Int
        images: [Image]!
    }

    input InstructorInput {
        instructorId: ID
        name: String!
        strengths: String!
        certificates: [String]
        experiences: [String]
    }

    input RankInput {
        rankId: ID!
        name: String
        awardees: [String]
    }

    input SyllabusInput {
        levelId: ID!
        level: String
        index: Int
        syllabus: [String]
    }

    input ClassInput {
        classId: ID
        title: String!
        type: String!
        classroom: String
        time: String!
        students: String!
        location: String
        mapQuery: String
    }

    input CourseContentInput {
        courseId: ID
        name: String
        content: String
    }

    input ViewInput {
        viewId: ID
        title: String
        content: String
        route: String
    }

    input ContactInput {
        contactId: ID
        field: String
        to: String
        icon: String
        content: String
    }

    input ImageInput {
        imageUrl: String!
        alt: String!
        title: String
        paragraph: String
    }

    input InterviewInput {
        interviewId: ID
        company: String
        title: String
        images: [ImageInput]
        url: String
        publishedDate: Date
    }
    input MasonryInput {
        masonryId: ID
        title: String
        order: Int
        route: String
        images: [ImageInput]
    }
    input CarouselInput {
        carouselId: ID
        route: String
        order: Int
        images: [ImageInput]
    }
    type Query {
        getInstructors: [Instructor]!
        getRankings: [Rank]!
        getAssessmentSyllabus: [Syllabus]!
        getClasses: [Class]!
        getImages: [File]!
        getCourseContents: [CourseContent]
        getView: [View]
        getViewByRoute(route: String): View
        getContacts: [Contact]
        getInterviews: [Interview]
        getMasonryById(id: ID): Masonry
        getMasonryByRoute(route: String): [Masonry]
        getCarouselById(id: ID): Carousel
        getCarouselByRoute(route: String): [Carousel]
    }

    type Mutation {
        addInstructor(instructor: InstructorInput): Instructor
        updateInstructor(instructor: InstructorInput): Instructor
        removeInstructor(instructorId: ID): Instructor

        updateRanking(details: RankInput): Rank

        addClass(details: ClassInput): Class
        updateClass(details: ClassInput): Class
        removeClass(classId: ID): Class

        updateAssessmentSyllabus(level: SyllabusInput): Syllabus

        addCourseContent(course: CourseContentInput): CourseContent
        updateCourseContent(course: CourseContentInput): CourseContent

        singleUpload(file: Upload): String

        addView(details: ViewInput): View
        updateView(details: ViewInput): View

        addContact(contact: ContactInput): Contact
        updateContact(contact: ContactInput): Contact

        addInterview(interview: InterviewInput): Interview
        updateInterview(interview: InterviewInput): Interview

        addMasonry(masonry: MasonryInput): Masonry
        updateMasonry(masonry: MasonryInput): Masonry

        updateCarousel(carousel: CarouselInput): Carousel
        addCarousel(carousel: CarouselInput): Carousel
    }
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    schema
});
