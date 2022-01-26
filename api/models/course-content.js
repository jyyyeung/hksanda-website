import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: String,
    content: String,
  },
  {
    timestamp: true,
  }
);
export default mongoose.model("CourseContent", schema);
