/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-18 20:58:06
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 21:00:00
 * @FilePath: /hksanda-website/api/resolvers/masonry.js
 * @Description: resolvers for masonry db
 */

import Masonry from "../models/masonry";

export const getMasonry = async () => {
  return await Masonry.find().populate("images.image");
};
