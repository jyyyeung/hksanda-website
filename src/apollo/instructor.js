import { gql } from "apollo-boost";
export const GET_INSTRUCTORS = gql`
  query getInstructors {
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
  mutation Mutation($instructor: InstructorInput) {
    addInstructor(instructor: $instructor) {
      id
      name
      strengths
      certificates
      experiences
    }
  }
`;
