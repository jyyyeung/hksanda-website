import { gql } from "apollo-boost";
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

export const ADD_INSTRUCTOR = gql`
  mutation AddInstructorMutation($instructor: InstructorInput) {
    addInstructor(instructor: $instructor) {
      id
      name
      strengths
      certificates
      experiences
    }
  }
`;
