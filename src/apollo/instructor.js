import {gql} from "apollo-boost";

export const GET_INSTRUCTORS = gql`
    query GetInstructorsQuery {
        getInstructors {
            id
            name
            strengths
            certificates
            experiences
        }
    }
`;

export const UPDATE_INSTRUCTOR = gql`
    mutation updateInstructorMutation($instructor: InstructorInput) {
        updateInstructor(instructor: $instructor) {
            id
            name
            strengths
            certificates
            experiences
        }
    }
`;

export const ADD_INSTRUCTOR = gql`
    mutation addInstructorMutation($instructor: InstructorInput) {
        addInstructor(instructor: $instructor) {
            id
            name
            strengths
            certificates
            experiences
        }
    }
`;

export const REMOVE_INSTRUCTOR = gql`
    mutation removeInstructorMutation($instructorId: ID) {
        removeInstructor(instructorId: $instructorId) {
            id
            name
            strengths
            certificates
            experiences
        }
    }
`;
