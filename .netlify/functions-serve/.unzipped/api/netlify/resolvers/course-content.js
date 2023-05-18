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
var course_content_exports = {};
__export(course_content_exports, {
    addCourseContent: () => addCourseContent,
    getCourseContents: () => getCourseContents,
    updateCourseContent: () => updateCourseContent
});
module.exports = __toCommonJS(course_content_exports);
var import_course_content = require("../models/course-content.js");
const getCourseContents = async () => {
    return import_course_content.CourseContent.find();
};
const updateCourseContent = (_, {course}) => {
    console.log(course);
    import_course_content.CourseContent.findByIdAndUpdate(course.courseId, {
        $set: {content: course.content, name: course.name}
    }, (err, model) => {
        console.log(err, model);
    });
};
const addCourseContent = (_, {course}) => {
    console.log(course);
    const courseContent = new import_course_content.CourseContent(course);
    return courseContent.save();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    addCourseContent,
    getCourseContents,
    updateCourseContent
});
