import mongoose from "mongoose";

const Schema = mongoose.Schema;
const imageSchema = new Schema(
  {
    filename: String,
    mimetype: String,
    encoding: String,
    // buffer: Buffer,
    path: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Image", imageSchema);
