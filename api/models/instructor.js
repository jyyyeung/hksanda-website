import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema(
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

export default mongoose.model("Instructor", instructorSchema);
