/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-12 15:48:44
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 12:14:21
 * @FilePath: /hksanda-website/api/resolvers/image.js
 * @Description: image resolver
 */
import { nanoid } from "nanoid";
import { createWriteStream, mkdir } from "fs";
import Image from "../models/image.js";

const storeUpload = async ({ stream, filename, mimetype, encoding }) => {
  const id = nanoid();
  const path = `images/${id}-${filename}`;
  console.log("🚀 ~ file: image.js ~ line 8 ~ storeUpload ~ path", path);
  // (createWriteStream) writes our file to the images directory
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ id, path, filename, mimetype, encoding }))
      .on("error", reject)
  );
};

const processUpload = async (upload) => {
  const { createReadStream, filename, mimetype, encoding } = await upload;
  const stream = createReadStream();
  const file = await storeUpload({ stream, filename, mimetype, encoding });
  console.log("🚀 ~ file: image.js ~ line 21 ~ processUpload ~ file", file);
  return file;
};

export const singleUpload = async (_, { file }) => {
  // Creates an images folder in the root directory
  mkdir("images", { recursive: true }, (err) => {
    if (err) throw err;
  });

  // Process upload
  const upload = await processUpload(file);

  let image = new Image(upload);
  return image.save();
};
