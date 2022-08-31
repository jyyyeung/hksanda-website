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
export default mongoose.model("Interview", schema);
