const Rank = require("../models/rank");

exports.getRankings = async () => {
  return await Rank.find();
};

exports.addPersonToRank = (_, args) => {
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
