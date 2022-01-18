/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-18 12:31:02
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 15:09:45
 * @FilePath: /hksanda-website/api/resolvers/interview.js
 * @Description: getter and setters for interview
 */

import Interview from "../models/interview.js";
import { uploadAndGetId } from "./image.js";

export const getInterviews = async () => {
  return await Interview.find().populate("images");
};

const formatInterview = (interview) => {
  let formatted = {
    ...interview,
    publishedDate: Date.parse(interview.publishedDate),
    images: interview.images.map((image) => uploadAndGetId(image)),
  };
  console.log(formatted);
  return formatted;
};

export const addInterview = async (_, { interview }) => {
  const newInterview = new Interview(formatInterview(interview));
  newInterview.populate("images");
  const result = await newInterview.save();
  return result.populate();
};

export const updateInterview = async (_, { interview }) => {
  const id = interview.interviewId;
  delete interview.interviewId;
  Interview.findByIdAndUpdate(id, { $set: formatInterview(interview) });
};
