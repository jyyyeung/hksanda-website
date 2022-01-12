import mongoose from "mongoose";

export type AssessmentSyllabusModel = mongoose.Document & {
  level: string;
  syllabus: string[];
};

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

export default mongoose.model<AssessmentSyllabusModel>(
  "AssessmentSyllabus",
  assessmentSyllabusSchema
);
