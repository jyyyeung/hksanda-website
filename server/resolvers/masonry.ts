import {Masonry} from "../models/masonry.js";

export const getMasonryById = async (_, {id}) => {
    return Masonry.findById(id);
};

export const getMasonryByRoute = async (_, {route}) => {
    //console.log(route);
    //console.log(await Masonry.find({ route: route }));
    return Masonry.find({route: route}).sort([["order", "asc"]]);
};
export const addMasonry = async (_, {masonry}) => {
    const newMasonry = new Masonry(masonry);
    const result = newMasonry.save();
    return result;
};
export const updateMasonry = async (_, {masonry}) => {
    const id = masonry.masonryId;
    delete masonry.masonryId;
    Masonry.findByIdAndUpdate(id, {$set: masonry});
};
