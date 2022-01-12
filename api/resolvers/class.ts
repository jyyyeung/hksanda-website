import Class from "../models/class.js";

interface ClassInput {
  title: string;
  type: string;
  classroom?: string;
  time: string;
  students: string;
  location?: string;
  mapQuery?: string;
}

export const getClasses = async () => {
  return await Class.find();
};

export const addClass = (_: any, args: { details: ClassInput }) => {
  const details = new Class({
    ...args.details,
  });
  return details.save();
};
