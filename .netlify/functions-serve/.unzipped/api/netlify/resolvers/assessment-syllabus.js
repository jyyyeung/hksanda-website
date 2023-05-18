var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var assessment_syllabus_exports = {};
__export(assessment_syllabus_exports, {
    getAssessmentSyllabus: () => getAssessmentSyllabus,
    updateAssessmentSyllabus: () => updateAssessmentSyllabus
});
module.exports = __toCommonJS(assessment_syllabus_exports);
var import_assessment_syllabus = require("../models/assessment-syllabus.js");
const getAssessmentSyllabus = async () => {
    return import_assessment_syllabus.AssessmentSyllabus.find().sort("index");
};
const updateAssessmentSyllabus = (_, args) => {
    console.log(args.level);
    import_assessment_syllabus.AssessmentSyllabus.findByIdAndUpdate(args.level.levelId, {
        $set: {syllabus: args.level.syllabus, name: args.level.level}
    }, {safe: true, upsert: true}, function (err, model) {
        console.log(err, model);
    });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    getAssessmentSyllabus,
    updateAssessmentSyllabus
});
