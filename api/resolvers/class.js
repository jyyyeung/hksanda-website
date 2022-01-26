import Class from "../models/class.js";

export const getClasses = async () => {
  return await Class.find();
};

export const addClass = (_, args) => {
  let details = new Class({
    ...args.details,
  });
  return details.save();
};
