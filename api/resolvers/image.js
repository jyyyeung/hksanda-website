const { nanoid } = require("nanoid");
const { createWriteStream, mkdir } = require("fs");
const Image = require("../models/image");

const storeUpload = async ({ stream, filename, mimetype }) => {
  const id = nanoid();
  const path = `images/${id}-${filename}`;
  // (createWriteStream) writes our file to the images directory
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ id, path, filename, mimetype }))
      .on("error", reject)
  );
};

const processUpload = async (upload) => {
  const { createReadStream, filename, mimetype } = await upload;
  const stream = createReadStream();
  const file = await storeUpload({ stream, filename, mimetype });
  return file;
};

exports.singleUpload = async (_, { file }) => {
  // Creates an images folder in the root directory
  mkdir("images", { recursive: true }, (err) => {
    if (err) throw err;
  });

  // Process upload
  const upload = await processUpload(file);
  await Image.create(upload);
  return upload;
};
