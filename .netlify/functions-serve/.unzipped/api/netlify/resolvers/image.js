var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, {get: all[name], enumerable: true});
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var image_exports = {};
__export(image_exports, {
    singleUpload: () => singleUpload
});
module.exports = __toCommonJS(image_exports);
var import_fs = require("fs");
var import_moment = __toESM(require("moment"), 1);
var import_picgo = require("../helpers/picgo.ts");
const storeUpload = async ({stream, filename}) => {
    const newFileName = `${(0, import_moment.default)().format("YYYYMMDDHHmmss")}-${encodeURI(filename)}`;
    const rawPath = `/tmp/images/${newFileName}`;
    const compressedFolder = `/tmp/compressedImages/`;
    const compressedPath = compressedFolder + newFileName;
    return new Promise((resolve, reject) => stream.pipe((0, import_fs.createWriteStream)(rawPath)).on("finish", async () => {
        resolve(await (0, import_picgo.uploadSMMS)(rawPath));
    }).on("error", reject));
};
const processUpload = async (upload) => {
    const {createReadStream, filename} = await upload;
    const stream = createReadStream();
    const path = await storeUpload({
        stream,
        filename
    });
    console.log("\u{1F680} ~ file: image.js ~ line 68 ~ processUpload ~ path", path);
    return path;
};
const singleUpload = async (_, {file}) => {
    (0, import_fs.mkdir)("/tmp/images", {recursive: true}, (err) => {
        if (err)
            throw err;
    });
    const upload = await processUpload(file);
    return upload;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    singleUpload
});
