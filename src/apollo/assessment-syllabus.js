import { gql } from "apollo-boost";
export const GET_SYLLABUS = gql`
  query GetAssessmentSyllabusQuery {
    getAssessmentSyllabus {
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
