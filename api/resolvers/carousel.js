import Carousel from "../models/Carousel.js";

export const getCarouselById = async (_, { id }) => {
  return await Carousel.findById(id);
};

export const addCarousel = async (_, { carousel }) => {
  const newCarousel = new Carousel(carousel);
  const result = newCarousel.save();
  return result;
};
export const updateCarousel = async (_, { carousel }) => {
  const id = carousel.carouselId;
  delete carousel.carouselId;
  Carousel.findByIdAndUpdate(id, { $set: carousel });
};
