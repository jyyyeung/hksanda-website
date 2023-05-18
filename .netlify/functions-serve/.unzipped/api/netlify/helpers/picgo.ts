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
var picgo_exports = {};
__export(picgo_exports, {
    deleteImage: () => deleteImage,
    getUploadHistory: () => getUploadHistory,
    uploadSMMS: () => uploadSMMS
});
module.exports = __toCommonJS(picgo_exports);
var import_smms_cli = __toESM(require("smms-cli"), 1);
const uploadSMMS = async (path) => {
    const res = await import_smms_cli.default.upload(path);
    return res.data;
};
const getUploadHistory = async () => {
    import_smms_cli.default.history().then((json) => {
        console.log(json);
    }).catch((err) => {
        console.error(err.message);
    });
};
const deleteImage = async (hash) => {
    import_smms_cli.default.delete(hash).then((status) => {
        console.log(status.msg);
    }).catch((err) => {
        console.error(err.msg);
    });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    deleteImage,
    getUploadHistory,
    uploadSMMS
});
