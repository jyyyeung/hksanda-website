import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    content: String,
    masonries: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Masonry"
        }
    ],
    route: String
});

export default mongoose.model("View", schema);
