import Rank from "../models/rank.js";

interface RankInput {
  rankId: string;
  awardee: string;
}

export const getRankings = async () => {
  return await Rank.find();
};

export const addPersonToRank = (_: any, args: { details: RankInput }) => {
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
