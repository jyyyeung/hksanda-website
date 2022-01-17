/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-17 17:21:46
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 17:28:24
 * @FilePath: /hksanda-website/api/resolvers/course-content.js
 * @Description: resolvers for getting and updating course content
 */

import CourseContent from "../models/course-content.js";

export const getCourseContents = async () => {
  return await CourseContent.find();
};

export const updateCourseContent = (_, { course }) => {
  console.log(course);
  CourseContent.findByIdAndUpdate(
    args.level.courseId,
    {
      $set: { content: course.content, name: course.name },
    },
    (err, model) => {
      console.log(err, model);
    }
  );
};
export const addCourseContent = (_, { course }) => {
  console.log(course);

  const courseContent = new CourseContent(course);
  return courseContent.save();
};
