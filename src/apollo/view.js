import gql from "graphql-tag";

/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-17 18:40:31
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 19:03:37
 * @FilePath: /hksanda-website/src/apollo/view.js
 * @Description: apollo query and mutations for page view contents
 */
export const ADD_VIEW = gql`
  mutation addViewMutation($details: ViewInput) {
    addView(details: $details) {
      title
      content
      route
    }
  }
`;

export const GET_VIEW_BY_ROUTE = gql`
  query getViewByRouteQuery($route: String) {
    getViewByRoute(route: $route) {
      id
      title
      content
      route
    }
  }
`;
export const GET_VIEW = gql`
  query getViewQuery {
    getView {
      id
      title
      route
      content
    }
  }
`;

export const UPDATE_VIEW = gql`
  mutation updateViewMutation($details: ViewInput) {
    updateView(details: $details) {
      id
      title
      content
      route
    }
  }
`;
