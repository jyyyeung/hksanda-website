const mongoose = require("mongoose");

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

module.exports = mongoose.model("Rank", rankSchema);
