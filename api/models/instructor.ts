const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const instructorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    strengths: {
      type: String,
      required: true,
    },
    certificates: [String],
    experiences: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Instructor", instructorSchema);
