import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        width: Number,
        height: Number,
        filename: String,
        storename: String,
        size: Number,
        path: String,
        hash: String,
        timestamp: Number,
        ip: String,
        url: String,
        delete: String
    }
);

export const Image = mongoose.model("Image", schema);
