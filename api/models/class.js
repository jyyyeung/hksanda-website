/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 12:16:42
 * @FilePath: /hksanda-website/api/models/class.js
 * @Description: Class information model for mongoose
 */
import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    classroom: String,
    time: String,
    students: String,
    location: String,
    mapQuery: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Class", classSchema);
