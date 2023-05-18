var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
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
var class_exports = {};
__export(class_exports, {
    addClass: () => addClass,
    getClasses: () => getClasses,
    removeClass: () => removeClass,
    updateClass: () => updateClass
});
module.exports = __toCommonJS(class_exports);
var import_class = require("../models/class.js");
const getClasses = async () => {
    return import_class.Class.find();
};
const updateClass = (_, {details}) => {
    console.log(details);
    import_class.Class.findByIdAndUpdate(details.classId, {
        $set: {
            title: details.title,
            type: details.type,
            time: details.time,
            students: details.students,
            location: details.location,
            classroom: details.classroom,
            mapQuery: details.mapQuery
        }
    }, (err, model) => {
        console.log(err, model);
    });
};
const addClass = (_, args) => {
    let details = new import_class.Class(__spreadValues({}, args.details));
    return details.save();
};
const removeClass = (_, {classId}) => {
    import_class.Class.findByIdAndDelete(classId).then(() => console.log(`Successfully Removed ${classId}`)).catch((error) => console.error(`Failed to Removed ${classId}, ${error}`));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    addClass,
    getClasses,
    removeClass,
    updateClass
});
