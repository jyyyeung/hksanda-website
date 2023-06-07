export const GET_INSTRUCTORS = groq`*[_type == "instructor"] | order(_createdAt asc)`

export const GET_RANKINGS = groq`*[_type == "rank"] | order(index desc)`

export const GET_COURSE_CONTENTS = groq`*[_type == "course-content"]`
export const GET_SYLLABUS = groq`*[_type == "assessment-syllabus"] | order(index asc)`

export const GET_CLASSES = groq`*[_type == "class"]`
