const Instructor = require("../models/instructor");

exports.getInstructors = async () => {
  return await Instructor.find();
};

exports.addInstructor = (_, args) => {
  let instructor = new Instructor({
    ...args.instructor,
  });
  return instructor.save();
};
