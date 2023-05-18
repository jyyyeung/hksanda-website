var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var interview_exports = {};
__export(interview_exports, {
    addInterview: () => addInterview,
    getInterviews: () => getInterviews,
    updateInterview: () => updateInterview
});
module.exports = __toCommonJS(interview_exports);
var import_interview = require("../models/interview.js");
const getInterviews = async () => {
    return import_interview.Interview.find();
};
const formatInterview = (interview) => {
    let formatted = __spreadProps(__spreadValues({}, interview), {
        publishedDate: Date.parse(interview.publishedDate)
    });
    console.log(formatted);
    return formatted;
};
const addInterview = async (_, {interview}) => {
    const newInterview = new import_interview.Interview(formatInterview(interview));
    const result = await newInterview.save();
    return result;
};
const updateInterview = async (_, {interview}) => {
    const id = interview.interviewId;
    delete interview.interviewId;
    import_interview.Interview.findByIdAndUpdate(id, {$set: formatInterview(interview)});
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    addInterview,
    getInterviews,
    updateInterview
});
