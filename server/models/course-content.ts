import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: String,
        content: String,
    },
    {
        timestamp: true,
    }
);

export const CourseContent = mongoose.model("CourseContent", schema);
