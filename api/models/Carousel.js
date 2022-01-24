import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    images: [
      {
        imageUrl: String,
        alt: String,
        title: String,
        paragraph: String,
      },
    ],
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("Carousel", schema);
