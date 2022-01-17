/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 12:17:42
 * @FilePath: /hksanda-website/api/models/instructor.js
 * @Description: Model for each instructor in the association
 */
import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    strengths: {
      type: String,
      required: true,
    },
    certificates: [String],
    experiences: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Instructor", instructorSchema);
