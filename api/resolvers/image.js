const { nanoid } = require("nanoid");
const { createWriteStream, mkdir } = require("fs");
const Image = require("../models/image");

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

exports.singleUpload = async (_, { file }) => {
  // Creates an images folder in the root directory
  mkdir("images", { recursive: true }, (err) => {
    if (err) throw err;
  });

  // Process upload
  const upload = await processUpload(file);
  console.log(
    "🚀 ~ file: image.js ~ line 33 ~ exports.singleUpload= ~ upload",
    upload
  );

  let image = new Image(upload);
  console.log(
    "🚀 ~ file: image.js ~ line 40 ~ exports.singleUpload= ~ image",
    image
  );
  return image.save();

  // await Image.create(upload);
  // return upload;
  // return { filename, mimetype, encoding };
};
