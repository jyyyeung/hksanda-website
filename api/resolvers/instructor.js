import Instructor from "../models/instructor.js";

export const getInstructors = async () => {
  return await Instructor.find();
};

export const addInstructor = (_, args) => {
  let instructor = new Instructor({
    ...args.instructor,
  });
  return instructor.save();
};
