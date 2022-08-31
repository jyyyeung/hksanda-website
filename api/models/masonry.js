import mongoose from "mongoose";

const schema = mongoose.Schema(
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
    {timestamp: true}
);

export default mongoose.model("Masonry", schema);
