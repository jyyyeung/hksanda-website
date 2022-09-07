import {gql} from "apollo-server-express";

const typeDefs = gql`
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
        awardee: String!
    }

    input SyllabusInput {
        levelId: ID!
        level: String
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

        addPersonToRank(details: RankInput): Rank

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
export default typeDefs;
