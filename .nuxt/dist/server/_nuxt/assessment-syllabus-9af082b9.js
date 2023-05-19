import { g as gql } from "../server.mjs";
const GET_SYLLABUS = gql`
    query GetAssessmentSyllabusQuery {
        getAssessmentSyllabus {
            syllabus
            level
            id
        }
    }
`;
const MODIFY_SYLLABUS = gql`
    mutation UpdateAssessmentSyllabusMutation($level: SyllabusInput) {
        updateAssessmentSyllabus(level: $level) {
            id
            level
            syllabus
        }
    }
`;
export {
  GET_SYLLABUS as G,
  MODIFY_SYLLABUS as M
};
//# sourceMappingURL=assessment-syllabus-9af082b9.js.map
