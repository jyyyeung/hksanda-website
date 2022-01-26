import mongoose from "mongoose";

const assessmentSyllabusSchema = new mongoose.Schema(
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

export default mongoose.model("assessment-syllabus", assessmentSyllabusSchema);
