import { nanoid } from "nanoid";
import { createWriteStream, mkdir } from "fs";
import { ReadStream } from "fs-capacitor";
import Image from "../models/image.js";
import { FileUpload } from "graphql-upload";

const storeUpload = async ({
  createReadStream,
  filename,
  mimetype,
  encoding,
}: FileUpload) => {
  const id = nanoid();
  const path = `images/${id}-${filename}`;
  console.log("🚀 ~ file: image.js ~ line 8 ~ storeUpload ~ path", path);
  // (createWriteStream) writes our file to the images directory
  return new Promise((resolve, reject) =>
    createReadStream()
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ id, path, filename, mimetype, encoding }))
      .on("error", reject)
  );
};

const processUpload = async (upload: PromiseLike<FileUpload> | FileUpload) => {
  // const { createReadStream, filename, mimetype, encoding } = await upload;
  const Upload = await upload;
  // const createReadStream = createReadStream();
  const file = await storeUpload(Upload);
  console.log("🚀 ~ file: image.js ~ line 21 ~ processUpload ~ file", file);
  return file;
};

export const singleUpload = async (
  _: any,
  { file }: { file: Promise<FileUpload> }
) => {
  // Creates an images folder in the root directory
  mkdir("images", { recursive: true }, (err) => {
    if (err) throw err;
  });

  // Process upload
  const upload = await processUpload(file);

  const image = new Image(upload);
  return image.save();
};
