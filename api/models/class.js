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

export default mongoose.model("Class", classSchema);
