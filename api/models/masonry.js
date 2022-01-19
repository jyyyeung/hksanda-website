import mongoose from "mongoose";
/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-18 20:46:33
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 20:57:09
 * @FilePath: /hksanda-website/api/models/masonry.js
 * @Description: database model for masonry wall
 */
const schema = mongoose.Schema(
  {
    title: String,
    images: [
      {
        image: {
          type: mongoose.Types.ObjectId,
          ref: "Image",
        },
        caption: String,
      },
    ],
  },
  { timestamp: true }
);

export default mongoose.model("Masonry", schema);
