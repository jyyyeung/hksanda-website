import {createWriteStream, mkdir} from "fs";
import moment from "moment";
import {uploadPicGo} from "../helpers/picgo.js";
import compress_images from "compress-images";

const storeUpload = async ({stream, filename}) => {
    // TODO: Use a more elegant file name
    const newFileName = `${moment().format("YYYYMMDDHHmmss")}-${encodeURI(
        filename
    )}`;
    const rawPath = `images/${newFileName}`;
    const compressedFolder = `compressedImages/`;
    const compressedPath = compressedFolder + newFileName;
    //TODO:Delete image from local after upload
    // (createWriteStream) writes our file to the images directory
    return new Promise((resolve, reject) =>
        stream
            .pipe(createWriteStream(rawPath))
            .on("finish", async () => {
                await compress_images(
                    rawPath,
                    compressedFolder,
                    {compress_force: false, statistic: true},
                    false,
                    {jpg: {engine: "mozjpeg", command: ["-quality", "60"]}},
                    {png: {engine: false, command: false}},
                    {svg: {engine: false, command: false}},
                    {gif: {engine: false, command: false}},
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
    const {createReadStream, filename} = await upload;

    const stream = createReadStream();
    const path = await storeUpload({
        stream,
        filename,
    });

    console.log("🚀 ~ file: image.js ~ line 68 ~ processUpload ~ path", path);

    return path;
};

export const singleUpload = async (_, {file}) => {
    // Creates an images folder in the root directory
    mkdir("images", {recursive: true}, (err) => {
        if (err) throw err;
    });

    // Process upload
    const upload = await processUpload(file);

    return upload;
};
