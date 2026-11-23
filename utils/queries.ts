export const GET_INSTRUCTORS = groq`*[_type == "instructor"]|order(orderRank)`;

export const GET_RANKINGS = groq`*[_type == "rank"]|order(orderRank)`;

export const GET_COURSE_CONTENTS = groq`*[_type == "course-content"]|order(orderRank)`;
export const GET_SYLLABUS = groq`*[_type == "assessment-syllabus"] |order(orderRank)`;

export const GET_CLASSES = groq`*[_type == "class"]|order(orderRank)`;

export const GET_CONTACTS = groq`*[_type == "contact"] | order(_createdAt asc)`;

// Singleton document (_id: contactPage) holding the /contact page copy.
export const GET_CONTACT_PAGE = groq`*[_id == "contactPage"][0]`;

export const GET_INTERVIEWS = groq`*[_type == "interview"] | order(publishedDate desc)`;
