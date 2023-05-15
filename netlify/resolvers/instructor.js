import {Instructor} from "../models/instructor.js";

export const getInstructors = async () => {
    return Instructor.find();
};

export const updateInstructor = (_, {instructor}) => {
    console.log(instructor);
    Instructor.findByIdAndUpdate(
        instructor.instructorId,
        {
            $set: {
                name: instructor.name,
                strengths: instructor.strengths,
                certificates: instructor.certificates,
                experiences: instructor.experiences,

            },
        },
        (err, model) => {
            console.log(err, model);
        }
    );
};

export const addInstructor = (_, args) => {
    const instructor = new Instructor({
        ...args.instructor,
    });
    return instructor.save();
};

export const removeInstructor = (_, {instructorId}) => {
    Instructor.findByIdAndDelete(instructorId).then(() => console.log(`Successfully Removed ${instructorId}`)).catch(error => console.error(`Failed to Removed ${instructorId}, ${error}`))
};
