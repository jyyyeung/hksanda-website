import { ObjectId } from "mongoose";
import { Syllabus } from "../../types/Syllabus.js";
import AssessmentSyllabus from "../models/assessment-syllabus.js";

interface SyllabusInput {
  levelId: ObjectId;
  syllabus: string[];
  level?: string;
}

export const getAssessmentSyllabus = async () => {
  return await AssessmentSyllabus.find();
};

export const updateAssessmentSyllabus = (
  _: any,
  args: { level: SyllabusInput }
): void => {
  // console.log(args.level);
  AssessmentSyllabus.findByIdAndUpdate(
    args.level.levelId,
    {
      $set: { syllabus: args.level.syllabus, name: args.level.level },
    },
    (err: string, model: Syllabus): void => {
      console.log(err, model);
    }
  );
};
