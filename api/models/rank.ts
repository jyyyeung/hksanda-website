import mongoose from "mongoose";

const Schema = mongoose.Schema;
const rankSchema = new Schema(
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
