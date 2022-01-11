const Class = require("../models/class");

exports.getClasses = async () => {
  return await Class.find();
};

exports.addClass = (_, args) => {
  let details = new Class({
    ...args.details,
  });
  return details.save();
};
