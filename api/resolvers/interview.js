import Interview from "../models/interview.js";

export const getInterviews = async () => {
    return await Interview.find();
};

const formatInterview = (interview) => {
    let formatted = {
        ...interview,
        publishedDate: Date.parse(interview.publishedDate),
    };
    console.log(formatted);
    return formatted;
};

export const addInterview = async (_, {interview}) => {
    const newInterview = new Interview(formatInterview(interview));
    const result = await newInterview.save();
    return result;
};

export const updateInterview = async (_, {interview}) => {
    const id = interview.interviewId;
    delete interview.interviewId;
    Interview.findByIdAndUpdate(id, {$set: formatInterview(interview)});
};
