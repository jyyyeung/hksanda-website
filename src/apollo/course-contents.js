/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-17 17:34:53
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 17:37:15
 * @FilePath: /hksanda-website/src/apollo/course-contents.js
 * @Description: apollo mutation and query for course contents
 */

import {gql} from "apollo-boost";

export const GET_COURSE_CONTENTS = gql`
    query getCourseContentsQuery {
        getCourseContents {
            name
            content
            id
        }
    }
`;

export const UPDATE_COURSE_CONTENT = gql`
    mutation updateCourseContentMutation($course: CourseContentInput) {
        updateCourseContent(course: $course) {
            id
            name
            content
        }
    }
`;

export const ADD_COURSE_CONTENT = gql`
    mutation addCourseContentMutation($course: CourseContentInput) {
        addCourseContent(course: $course) {
            name
            content
        }
    }
`;
