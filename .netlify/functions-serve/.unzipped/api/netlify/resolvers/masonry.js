var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var masonry_exports = {};
__export(masonry_exports, {
    addMasonry: () => addMasonry,
    getMasonryById: () => getMasonryById,
    getMasonryByRoute: () => getMasonryByRoute,
    updateMasonry: () => updateMasonry
});
module.exports = __toCommonJS(masonry_exports);
var import_masonry = require("../models/masonry.js");
const getMasonryById = async (_, {id}) => {
    return import_masonry.Masonry.findById(id);
};
const getMasonryByRoute = async (_, {route}) => {
    return import_masonry.Masonry.find({route}).sort([["order", "asc"]]);
};
const addMasonry = async (_, {masonry}) => {
    const newMasonry = new import_masonry.Masonry(masonry);
    const result = newMasonry.save();
    return result;
};
const updateMasonry = async (_, {masonry}) => {
    const id = masonry.masonryId;
    delete masonry.masonryId;
    import_masonry.Masonry.findByIdAndUpdate(id, {$set: masonry});
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    addMasonry,
    getMasonryById,
    getMasonryByRoute,
    updateMasonry
});
