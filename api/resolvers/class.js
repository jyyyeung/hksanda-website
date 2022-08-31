import Class from "../models/class.js";

export const getClasses = async () => {
    return Class.find();
};

export const updateClass = (_, {details}) => {
    console.log(details);
    Class.findByIdAndUpdate(
        details.classId,
        {
            $set: {
                title: details.title,
                type: details.type,
                time: details.time,
                students: details.students,
                location: details.location,
                classroom: details.classroom,
                mapQuery: details.mapQuery
            },
        },
        (err, model) => {
            console.log(err, model);
        }
    );
};

export const addClass = (_, args) => {
    let details = new Class({
        ...args.details,
    });

    return details.save();
};

export const removeClass = (_, {classId}) => {
    Class.findByIdAndDelete(classId).then(() => console.log(`Successfully Removed ${classId}`)).catch(error => console.error(`Failed to Removed ${classId}, ${error}`))
};
