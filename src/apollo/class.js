import { gql } from "apollo-boost";

export const GET_CLASSES = gql`
  query GetClassesQuery {
    getClasses {
      id
      title
      type
      classroom
      time
      students
      location
      mapQuery
    }
  }
`;

export const ADD_CLASS = gql`
  mutation AddClassMutation($details: ClassInput) {
    addClass(details: $details) {
      id
      title
      type
      classroom
      time
      students
      location
      mapQuery
    }
  }
`;
