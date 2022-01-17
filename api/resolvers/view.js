/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-17 18:42:29
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 19:10:42
 * @FilePath: /hksanda-website/api/resolvers/view.js
 * @Description: resolvers for view page contents
 */

import View from "../models/view.js";

export const getView = async () => {
  return await View.find();
};
export const getViewByRoute = async (_, { route }) => {
  return await View.findOne({ route: route });
};
export const addView = (_, { details }) => {
  let view = new View(details);
  return view.save();
};

export const updateView = (_, { details }) => {
  View.findByIdAndUpdate(
    details.viewId,
    {
      $set: { ...details },
    },
    (err, model) => {
      console.log(err, model);
    }
  );
};
