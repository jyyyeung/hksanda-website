import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        strengths: {
            type: String,
            required: true,
        },
        certificates: [String],
        experiences: [String],
    },
    {
        timestamps: true,
    }
);

export const Instructor = mongoose.model("Instructor", instructorSchema);
