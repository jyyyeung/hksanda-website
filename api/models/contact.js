/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-18 10:49:43
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 11:11:49
 * @FilePath: /hksanda-website/api/models/contact.js
 * @Description: db model for contacts page
 */
import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    field: String,
    to: String,
    icon: String,
    content: String,
  },
  { timestamps: true }
);
export default mongoose.model("Contact", schema);
