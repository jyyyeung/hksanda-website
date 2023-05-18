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
var carousel_exports = {};
__export(carousel_exports, {
    addCarousel: () => addCarousel,
    getCarouselById: () => getCarouselById,
    getCarouselByRoute: () => getCarouselByRoute,
    updateCarousel: () => updateCarousel
});
module.exports = __toCommonJS(carousel_exports);
var import_carousel = require("../models/carousel.js");
const getCarouselById = async (_, {id}) => {
    return import_carousel.Carousel.findById(id);
};
const getCarouselByRoute = async (_, {route}) => {
    return import_carousel.Carousel.find({route});
};
const addCarousel = async (_, {carousel}) => {
    const newCarousel = new import_carousel.Carousel(carousel);
    const result = newCarousel.save();
    return result;
};
const updateCarousel = async (_, {carousel}) => {
    const id = carousel.carouselId;
    delete carousel.carouselId;
    import_carousel.Carousel.findByIdAndUpdate(id, {$set: carousel});
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    addCarousel,
    getCarouselById,
    getCarouselByRoute,
    updateCarousel
});
