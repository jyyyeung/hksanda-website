const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const assessmentSyllabusSchema = new Schema(
  {
    level: {
      type: String,
      required: true,
    },
    syllabus: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "assessment-syllabus",
  assessmentSyllabusSchema
);
