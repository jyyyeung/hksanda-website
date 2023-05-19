import { Rank } from "../models/rank.js";

export const getRankings = async () => {
    return Rank.find();
};

export const updateRanking = (_, { details }) => {
    console.log(details);
    Rank.findByIdAndUpdate(
        details.rankId,
        {
            $set: {
                awardees: details.awardees,
                name: details.name,
            },
        },
        (err, model) => {
            console.log(err, model);
        }
    );
};

// export const addPersonToRank = (_, args) => {
//     console.log(args.details);
//     Rank.findByIdAndUpdate(
//         args.details.rankId,
//         {
//             $push: {awardees: args.details.awardee},
//         },
//         {safe: true, upsert: true},
//         function (err, model) {
//             console.log(err, model);
//         }
//     );
// };
