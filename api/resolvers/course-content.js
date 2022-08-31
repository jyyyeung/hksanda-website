import CourseContent from "../models/course-content.js";

export const getCourseContents = async () => {
    return await CourseContent.find();
};

export const updateCourseContent = (_, {course}) => {
    console.log(course);
    CourseContent.findByIdAndUpdate(
        course.courseId,
        {
            $set: {content: course.content, name: course.name},
        },
        (err, model) => {
            console.log(err, model);
        }
    );
};
export const addCourseContent = (_, {course}) => {
    console.log(course);

    const courseContent = new CourseContent(course);
    return courseContent.save();
};
