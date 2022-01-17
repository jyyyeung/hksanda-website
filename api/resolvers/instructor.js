/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 12:13:11
 * @FilePath: /hksanda-website/api/resolvers/instructor.js
 * @Description: Instructor resolver
 */
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
