const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const imageSchema = new Schema(
  {
    filename: String,
    mimetype: String,
    encoding: String,
    path: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Image", imageSchema);
