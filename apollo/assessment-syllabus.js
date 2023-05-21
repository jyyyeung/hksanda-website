import gql from "graphql-tag";

export const GET_SYLLABUS = gql`
    query GetAssessmentSyllabusQuery {
        getAssessmentSyllabus {
            syllabus
            level
            id
        }
    }
`;


export const GET_SYLLABUS_BY_ID = gql`
    query getSyllabusById($id: ID) {
        getSyllabusById(id: $id) {
            syllabus
            level
            id
        }
    }
`;

export const GET_BADGE_SYLLABUS_BY_ID = gql`
    query getBadgeSyllabusById($id: ID) {
        getBadgeSyllabusById(id: $id) {
            syllabus
            level
            id
        }
    }
`;


export const MODIFY_SYLLABUS = gql`
    mutation UpdateAssessmentSyllabusMutation($level: SyllabusInput) {
        updateAssessmentSyllabus(level: $level) {
            id
            level
            syllabus
        }
    }
`;
