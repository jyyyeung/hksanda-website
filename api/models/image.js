/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 17:03:50
 * @FilePath: /hksanda-website/api/models/image.js
 * @Description: mongoose model for uploading and downloading images
 */
import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    fileName: String,
    height: Number,
    width: Number,
    extname: String,
    imgUrl: String,
    type: String,
  },
  {
    timestamps: true,
    id: false,
  }
);

export default mongoose.model("Image", imageSchema);
