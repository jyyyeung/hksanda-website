/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 12:13:53
 * @FilePath: /hksanda-website/api/resolvers/class.js
 * @Description: Resolver for class information
 */
import Class from "../models/class.js";

export const getClasses = async () => {
  return await Class.find();
};

export const addClass = (_, args) => {
  let details = new Class({
    ...args.details,
  });
  return details.save();
};
