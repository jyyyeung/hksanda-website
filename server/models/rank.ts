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

export const Rank = mongoose.model("Rank", rankSchema);
