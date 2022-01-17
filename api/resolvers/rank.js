/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 12:13:34
 * @FilePath: /hksanda-website/api/resolvers/rank.js
 * @Description: Rank resolver
 */
import Rank from "../models/rank.js";

export const getRankings = async () => {
  return await Rank.find();
};

export const addPersonToRank = (_, args) => {
  console.log(args.details);
  Rank.findByIdAndUpdate(
    args.details.rankId,
    {
      $push: { awardees: args.details.awardee },
    },
    { safe: true, upsert: true },
    function (err, model) {
      console.log(err, model);
    }
  );
};
