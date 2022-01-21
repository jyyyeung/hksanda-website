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
import compress_images from "compress-images";

const storeUpload = async ({ stream, filename }) => {
  // TODO: Use a more elegant file name
  const newFileName = `${moment().format("YYYYMMDDHHmmss")}-${encodeURI(
    filename
  )}`;
  const rawPath = `images/${newFileName}`;
  const compressedFolder = `compressedImages/`;
  const compressedPath = compressedFolder + newFileName;

  // (createWriteStream) writes our file to the images directory
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(rawPath))
      .on("finish", async () => {
        await compress_images(
          rawPath,
          compressedFolder,
          { compress_force: false, statistic: true },
          false,
          { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
          { png: { engine: false, command: false } },
          { svg: { engine: false, command: false } },
          { gif: { engine: false, command: false } },
          async (error, completed, statistic) => {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");
            resolve(await uploadPicGo(compressedPath));
          }
        );
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
