/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 18:10:32
 * @FilePath: /hksanda-website/api/resolvers/image.js
 * @Description: image resolver
 */
import { createWriteStream, mkdir } from "fs";
import Image from "../models/image.js";
import mongoose from "mongoose";
import moment from "moment";
import { uploadPicGo } from "../helpers/picgo.js";

const storeUpload = async ({ stream, filename }) => {
  // TODO: Use a more elegant file name
  const path = `images/${moment().format("YYYYMMDDHHmmss")}-${encodeURI(
    filename
  )}`;

  // (createWriteStream) writes our file to the images directory
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", async () => {
        resolve(await uploadPicGo(path));
      })
      .on("error", reject)
  );
};

const processUpload = async (upload) => {
  const { createReadStream, filename } = await upload;

  const stream = createReadStream();
  const path = await storeUpload({
    stream,
    filename,
  });

  console.log("🚀 ~ file: image.js ~ line 68 ~ processUpload ~ path", path);

  return path;
};

export const singleUpload = async (
  _,
  { file, id = new mongoose.Types.ObjectId() }
) => {
  // Creates an images folder in the root directory
  mkdir("images", { recursive: true }, (err) => {
    if (err) throw err;
  });

  // Process upload
  const upload = await processUpload(file);

  let image = new Image(upload);
  image._id = id;

  console.log("🚀 ~ file: image.js ~ line 82 ~ singleUpload ~ image", image);
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
