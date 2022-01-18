/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-18 12:26:11
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 13:19:10
 * @FilePath: /hksanda-website/api/models/interview.js
 * @Description: Model for Interview
 */

import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    company: String,
    title: String,
    images: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
    url: String,
    publishedDate: Date,
  },
  { timestamp: true }
);
export default mongoose.model("Interview", schema);
