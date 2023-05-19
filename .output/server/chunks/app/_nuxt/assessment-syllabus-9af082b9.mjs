import { g as gql$1 } from '../server.mjs';

const GET_SYLLABUS = gql$1`
    query GetAssessmentSyllabusQuery {
        getAssessmentSyllabus {
            syllabus
            level
            id
        }
    }
`;
const MODIFY_SYLLABUS = gql$1`
    mutation UpdateAssessmentSyllabusMutation($level: SyllabusInput) {
        updateAssessmentSyllabus(level: $level) {
            id
            level
            syllabus
        }
    }
`;

export { GET_SYLLABUS as G, MODIFY_SYLLABUS as M };
//# sourceMappingURL=assessment-syllabus-9af082b9.mjs.map
