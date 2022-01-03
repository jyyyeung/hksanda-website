const { Schema, model } = require("mongoose");
const imageSchema = new Schema({
  filename: String,
  mimetype: String,
  path: String,
});

exports.default = model("Image", imageSchema);
