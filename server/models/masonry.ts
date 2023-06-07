import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        title: String,
        route: String,
        order: Number,
        images: [
            {
                imageUrl: String,
                title: String,
                paragraph: String,
                alt: String
            }
        ]
    },
    { timestamp: true }
);

export const Masonry = mongoose.model("Masonry", schema);
