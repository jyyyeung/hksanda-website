/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 15:23:17
 * @FilePath: /hksanda-website/api/resolvers/image.js
 * @Description: image resolver
 */
import { nanoid } from "nanoid";
import { createWriteStream, mkdir } from "fs";
import Image from "../models/image.js";
import mongoose from "mongoose";
const storeUpload = async ({ id, stream, filename, mimetype, encoding }) => {
  const path = `/images/${nanoid()}-${encodeURI(filename)}`;

  // (createWriteStream) writes our file to the images directory
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ path, filename, mimetype, encoding }))
      .on("error", reject)
  );
};

const processUpload = async (upload) => {
  const { createReadStream, filename, mimetype, encoding } = await upload;

  const stream = createReadStream();
  const file = await storeUpload({
    stream,
    filename,
    mimetype,
    encoding,
  });

  return file;
};

export const singleUpload = async (_, { file, id = nanoid() }) => {
  // Creates an images folder in the root directory
  mkdir("images", { recursive: true }, (err) => {
    if (err) throw err;
  });

  console.log(file, id);
  // Process upload
  const upload = await processUpload(file);

  let image = new Image(upload);
  image._id = id;

  return image.save();
};

export const getImages = async () => {
  return await Image.find();
};

export const getImageById = async (_, { imageId }) => {
  return await Image.findById(imageId);
};

export const uploadAndGetId = (image) => {
  const _id = new mongoose.Types.ObjectId();
  singleUpload(null, {
    file: image,
    id: _id,
  });
  return _id;
};
