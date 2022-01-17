/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 12:16:17
 * @FilePath: /hksanda-website/api/models/rank.js
 * @Description: mongoose schema for all people with ranking
 */
import mongoose from "mongoose";

const rankSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    awardees: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Rank", rankSchema);
