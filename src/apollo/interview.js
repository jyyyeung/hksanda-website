import gql from "graphql-tag";

/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-18 12:45:23
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 18:40:19
 * @FilePath: /hksanda-website/src/apollo/interview.js
 * @Description:
 */
export const ADD_INTERVIEW = gql`
  mutation addInterviewMutation($files: [Upload]) {
    addInterview(interview: interviewInput) {
      company
      id
      publishedDate
      images {
        _id
        imgUrl
        width
        height
        fileName
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
        _id
        imgUrl
        width
        height
        fileName
      }
      url
      publishedDate
    }
  }
`;
