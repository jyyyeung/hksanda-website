import Carousel from "../models/Carousel.js";
import { uploadAndGetId } from "./image.js";

export const getCarousel = async () => {
  return await Carousel.find().populate("images.image");
};

const formatCarousel = (carousel) => {
  let formatted = {
    ...carousel,
    images: carousel.images.map((image) => ({
      ...image,
      image: uploadAndGetId(image),
    })),
  };
  return formatted;
};
export const addCarousel = async (_, { carousel }) => {
  const newCarousel = new Carousel(formatCarousel(carousel));
  const result = newCarousel.save();
  return result.populate("images");
};
export const updateCarousel = async (_, { carousel }) => {
  const id = carousel.carouselId;
  delete carousel.carouselId;
  Carousel.findByIdAndUpdate(id, { $set: formatCarousel(masonry) });
};
