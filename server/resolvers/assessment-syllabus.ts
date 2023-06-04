import { AssessmentSyllabus } from "../models/assessment-syllabus.js";

export const getAssessmentSyllabus = async () => {
    return AssessmentSyllabus.find().sort('index');
};

export const getSyllabusById = async (_, { id }) => {
    return AssessmentSyllabus.findById(id).sort('index')
}

export const getBadgeSyllabusById = async (_, { id }) => {
    const result = await AssessmentSyllabus.findById(id).sort('index');
    console.log(result)

    const badgeSyllabus = {
        id: result?.id,
        level: result?.level,
        index: result?.index,
        syllabus: result?.syllabus.filter((content) =>
            content.includes("規定動作")
        )
    }
    console.log(badgeSyllabus)

    return badgeSyllabus;
}

export const updateAssessmentSyllabus = (_, args) => {
    console.log(args.level);
    AssessmentSyllabus.findByIdAndUpdate(
        args.level.levelId,
        {
            $set: { syllabus: args.level.syllabus, name: args.level.level },
        },
        { safe: true, upsert: true },
        function (err, model) {
            console.log(err, model);
        }
    );
};
