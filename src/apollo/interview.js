import gql from "graphql-tag";

export const ADD_INTERVIEW = gql`
  mutation addInterviewMutation($files: [Upload]) {
    addInterview(interview: interviewInput) {
      company
      id
      publishedDate
      images {
        imageUrl
        alt
      }
      title
      url
    }
  }
`;

export const GET_INTERVIEWS = gql`
  query getInterviewsQuery {
    getInterviews {
      id
      company
      title
      images {
        imageUrl
        alt
      }
      url
      publishedDate
    }
  }
`;
