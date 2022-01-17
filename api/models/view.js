/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-17 18:41:00
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 18:42:20
 * @FilePath: /hksanda-website/api/models/view.js
 * @Description: model for page view contents
 */

import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: String,
  content: String,
  route: String,
});

export default mongoose.model("View", schema);
