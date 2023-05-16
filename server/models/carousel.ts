import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        route: String,
        order: Number,
        images: [
            {
                imageUrl: String,
                alt: String,
                title: String,
                paragraph: String
            }
        ]
    },
    {
        timestamp: true
    }
);

export const Carousel = mongoose.model("Carousel", schema);
