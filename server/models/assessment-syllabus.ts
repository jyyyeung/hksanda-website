import mongoose from "mongoose";

const assessmentSyllabusSchema = new mongoose.Schema(
    {
        level: {
            type: String,
            required: true,
        },
        index: {
            type: Number
        },
        syllabus: [String],
    },
    {
        timestamps: true,
    }
);

export const AssessmentSyllabus = mongoose.model("assessment-syllabus", assessmentSyllabusSchema);
