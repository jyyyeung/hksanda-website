import mongoose from "mongoose";

const schema = mongoose.Schema({
  images: [
    {
      image: { type: mongoose.Types.ObjectId, key: "Image" },
      caption: String,
    },
  ],
});

export default mongoose.model("Carousel", schema);
