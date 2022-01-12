import InstructorModel from "../models/instructor.js";

interface InstructorInput {
  name: string;
  strengths: string;
  certificates: string[];
  experiences: string[];
}

export const getInstructors = async () => {
  return await InstructorModel.find();
};

export const addInstructor = (
  _: any,
  args: { instructor: InstructorInput }
) => {
  const instructor = new InstructorModel({
    ...args.instructor,
  });
  return instructor.save();
};
