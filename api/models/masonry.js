import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    title: String,
    images: [
      {
        imageUrl: String,
        alt: String,
      },
    ],
  },
  { timestamp: true }
);

export default mongoose.model("Masonry", schema);
