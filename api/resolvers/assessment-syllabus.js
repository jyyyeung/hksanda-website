/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 12:12:22
 * @FilePath: /hksanda-website/api/resolvers/assessment-syllabus.js
 * @Description: Resolver for Assessment Syllabus
 */
import AssessmentSyllabus from "../models/assessment-syllabus.js";

export const getAssessmentSyllabus = async () => {
  return await AssessmentSyllabus.find();
};

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
