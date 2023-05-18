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
var masonry_exports = {};
__export(masonry_exports, {
    Masonry: () => Masonry
});
module.exports = __toCommonJS(masonry_exports);
var import_mongoose = __toESM(require("mongoose"), 1);
const schema = new import_mongoose.default.Schema({
    title: String,
    route: String,
    order: Number,
    images: [
        {
            imageUrl: String,
            title: String,
            paragraph: String,
            alt: String
        }
    ]
}, {timestamp: true});
const Masonry = import_mongoose.default.model("Masonry", schema);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Masonry
});
