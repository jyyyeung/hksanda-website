import AssessmentSyllabus from "../models/assessment-syllabus.js";

export const getAssessmentSyllabus = async () => {
    return await AssessmentSyllabus.find();
};

export const updateAssessmentSyllabus = (_, args) => {
    console.log(args.level);
    AssessmentSyllabus.findByIdAndUpdate(
        args.level.levelId,
        {
            $set: {syllabus: args.level.syllabus, name: args.level.level},
        },
        {safe: true, upsert: true},
        function (err, model) {
            console.log(err, model);
        }
    );
};
