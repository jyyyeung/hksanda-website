import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
    {
        title: String,
        type: String,
        classroom: String,
        time: String,
        students: String,
        location: String,
        mapQuery: String,
    },
    {
        timestamps: true,
    }
);

export const Class = mongoose.model("Class", classSchema);
