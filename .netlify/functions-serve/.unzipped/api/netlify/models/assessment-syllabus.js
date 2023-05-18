var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var assessment_syllabus_exports = {};
__export(assessment_syllabus_exports, {
    AssessmentSyllabus: () => AssessmentSyllabus
});
module.exports = __toCommonJS(assessment_syllabus_exports);
var import_mongoose = __toESM(require("mongoose"), 1);
const assessmentSyllabusSchema = new import_mongoose.default.Schema({
    level: {
        type: String,
        required: true
    },
    index: Number,
    syllabus: [String]
}, {
    timestamps: true
});
const AssessmentSyllabus = import_mongoose.default.model("assessment-syllabus", assessmentSyllabusSchema);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AssessmentSyllabus
});
