import mongoose from "mongoose";

const Schema = mongoose.Schema;
const classSchema = new Schema(
  {
    title: String,
    type: String,
    classroom: String,
    time: String,
    students: String,
    location: String,
    mapQuery: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("class", classSchema);
