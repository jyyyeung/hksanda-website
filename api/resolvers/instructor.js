const { Instructor } = require("../models/instructor");

exports.getInstructors = () => {
  return Instructor.find();
};

exports.addInstructor = (_, args) => {
  console.log(args.instructor);
  let instructor = new Instructor({
    ...args.instructor,
  });
  console.log(instructor);
  return instructor.save();
};
