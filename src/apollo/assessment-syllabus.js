import { gql } from "apollo-boost";
export const GET_SYLLABUS = gql`
  query GetAssessmentSyllabus {
    getAssessmentSyllabus {
      syllabus
      level
      id
    }
  }
`;

export const MODIFY_SYLLABUS = gql`
  mutation Mutation($level: SyllabusInput) {
    updateAssessmentSyllabus(level: $level) {
      id
      level
      syllabus
    }
  }
`;
