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
var instructor_exports = {};
__export(instructor_exports, {
    addInstructor: () => addInstructor,
    getInstructors: () => getInstructors,
    removeInstructor: () => removeInstructor,
    updateInstructor: () => updateInstructor
});
module.exports = __toCommonJS(instructor_exports);
var import_instructor = require("../models/instructor.js");
const getInstructors = async () => {
    return import_instructor.Instructor.find();
};
const updateInstructor = (_, {instructor}) => {
    console.log(instructor);
    import_instructor.Instructor.findByIdAndUpdate(instructor.instructorId, {
        $set: {
            name: instructor.name,
            strengths: instructor.strengths,
            certificates: instructor.certificates,
            experiences: instructor.experiences
        }
    }, (err, model) => {
        console.log(err, model);
    });
};
const addInstructor = (_, args) => {
    const instructor = new import_instructor.Instructor(__spreadValues({}, args.instructor));
    return instructor.save();
};
const removeInstructor = (_, {instructorId}) => {
    import_instructor.Instructor.findByIdAndDelete(instructorId).then(() => console.log(`Successfully Removed ${instructorId}`)).catch((error) => console.error(`Failed to Removed ${instructorId}, ${error}`));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    addInstructor,
    getInstructors,
    removeInstructor,
    updateInstructor
});
