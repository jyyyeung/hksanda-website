import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: String,
  content: String,
  route: String,
});

export default mongoose.model("View", schema);
