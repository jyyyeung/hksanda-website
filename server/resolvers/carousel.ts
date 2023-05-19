import {Carousel} from "../models/carousel.js";

export const getCarouselById = async (_, {id}) => {
    return Carousel.findById(id);
};

export const getCarouselByRoute = async (_, {route}) => {
    return Carousel.find({route: route});
};

export const addCarousel = async (_, {carousel}) => {
    const newCarousel = new Carousel(carousel);
    const result = newCarousel.save();
    return result;
};
export const updateCarousel = async (_, {carousel}) => {
    const id = carousel.carouselId;
    delete carousel.carouselId;
    Carousel.findByIdAndUpdate(id, {$set: carousel});
};
