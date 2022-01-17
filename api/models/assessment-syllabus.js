/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 12:15:17
 * @FilePath: /hksanda-website/api/models/assessment-syllabus.js
 * @Description: Assessment Syllabus Model for mongoose
 */
import mongoose from "mongoose";

const assessmentSyllabusSchema = new mongoose.Schema(
  {
    level: {
      type: String,
      required: true,
    },
    syllabus: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("assessment-syllabus", assessmentSyllabusSchema);
