/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-18 20:58:06
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-19 10:38:42
 * @FilePath: /hksanda-website/api/resolvers/masonry.js
 * @Description: resolvers for masonry db
 */

import Masonry from "../models/masonry.js";
import { uploadAndGetId } from "./image.js";

export const getMasonry = async () => {
  return await Masonry.find().populate("images.image");
};

const formatMasonry = (masonry) => {
  let formatted = {
    ...masonry,
    images: masonry.images.map((image) => ({
      ...image,
      image: uploadAndGetId(image),
    })),
  };
  return formatted;
};
export const addMasonry = async (_, { masonry }) => {
  const newMasonry = new Masonry(formatMasonry(masonry));
  const result = newMasonry.save();
  return result.populate("images");
};
export const updateMasonry = async (_, { masonry }) => {
  const id = masonry.masonryId;
  delete masonry.masonryId;
  Masonry.findByIdAndUpdate(id, { $set: formatMasonry(masonry) });
};
