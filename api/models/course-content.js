/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-17 17:17:26
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 17:32:32
 * @FilePath: /hksanda-website/api/models/course-content.js
 * @Description: db model for course syllabus and intro
 */

import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: String,
    content: String,
  },
  {
    timestamp: true,
  }
);
export default mongoose.model("CourseContent", schema);
