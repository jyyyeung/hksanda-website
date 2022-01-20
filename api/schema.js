/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-19 10:38:27
 * @FilePath: /hksanda-website/api/schema.js
 * @Description: Graphql Schema
 */
import { gql } from "apollo-server-express";

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
    images: [File]
    url: String
    publishedDate: Date!
  }

  type ImageWithCaption {
    image: File!
    caption: String
  }
  type Masonry {
    id: ID!
    title: String
    images: [ImageWithCaption]
  }
  type Carousel {
    id: ID!
    images: [ImageWithCaption]
  }

  input InstructorInput {
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

  input InterviewInput {
    interviewId: ID
    company: String
    title: String
    images: [Upload]
    url: String
    publishedDate: Date
  }

  input ImageWithCaptionInput {
    image: Upload
    caption: String
  }
  input MasonryInput {
    masonryId: ID
    title: String
    images: [ImageWithCaptionInput]
  }
  input CarouselInput {
    carouselId: ID
    images: [ImageWithCaptionInput]
  }
  type Query {
    getInstructors: [Instructor]!
    getRankings: [Rank]!
    getAssessmentSyllabus: [Syllabus]!
    getClasses: [Class]!
    getImages: [File]!
    getImageById(imageId: String): File
    getCourseContents: [CourseContent]
    getView: [View]
    getViewByRoute(route: String): View
    getContacts: [Contact]
    getInterviews: [Interview]
    getMasonry: [Masonry]
    getCarousel: [Carousel]
  }

  type Mutation {
    addInstructor(instructor: InstructorInput): Instructor
    addPersonToRank(details: RankInput): Rank
    addClass(details: ClassInput): Class
    updateAssessmentSyllabus(level: SyllabusInput): Syllabus
    addCourseContent(course: CourseContentInput): CourseContent
    updateCourseContent(course: CourseContentInput): CourseContent
    singleUpload(file: Upload): File!
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
