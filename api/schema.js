/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 12:21:52
 * @FilePath: /hksanda-website/api/schema.js
 * @Description: Graphql Schema
 */
import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Upload

  type File {
    id: ID!
    filename: String!
    mimetype: String!
    encoding: String!
    path: String!
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
  }
`;
export default typeDefs;
