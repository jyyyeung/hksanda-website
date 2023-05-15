import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        field: String,
        to: String,
        icon: String,
        content: String,
    },
    {timestamps: true}
);
export const Contact = mongoose.model("Contact", schema);
 