import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
        company: String,
        title: String,
        images: [
            {
                imageUrl: String,
                alt: String,
            },
        ],
        url: String,
        publishedDate: Date,
    },
    {timestamp: true}
);
export const Interview = mongoose.model("Interview", schema);
