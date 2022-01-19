/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-19 10:39:04
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-19 11:13:55
 * @FilePath: /hksanda-website/src/apollo/masonry.js
 * @Description: apollo query and mutations for masonry
 */
//
import gql from "graphql-tag";

export const ADD_MASONRY = gql`
  mutation addMasonryMutation($masonry: MasonryInput) {
    addMasonry(masonry: $masonry) {
      id
      title
      images {
        image {
          _id
          fileName
          width
          height
          extname
          imgUrl
          type
        }
        caption
      }
    }
  }
`;
export const GET_MASONRY = gql`
  query getMasonryQuery {
    getMasonry {
      id
      title
      images {
        image {
          _id
          fileName
          width
          height
          extname
          imgUrl
          type
        }
        caption
      }
    }
  }
`;
export const UPDATE_MASONRY = gql`
  mutation updateMasonryMutation($masonry: MasonryInput) {
    updateMasonry(masonry: $masonry) {
      id
      title
      images {
        image {
          _id
          fileName
          width
          height
          extname
          imgUrl
          type
        }
        caption
      }
    }
  }
`;
