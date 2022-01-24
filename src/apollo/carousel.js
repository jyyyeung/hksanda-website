import { gql } from "apollo-boost";
export const GET_CAROUSEL_BY_ID = gql`
  query GetCarouselByIdQuery($id: ID) {
    getCarouselById(id: $id) {
      id
      images {
        imageUrl
        alt
        title
        paragraph
      }
    }
  }
`;

export const UPDATE_CAROUSEL = gql`
  mutation UpdateCarouselMutation($carousel: CarouselInput) {
    updateCarousel(carousel: $carousel) {
      id
      images {
        imageUrl
        paragraph
        title
        alt
      }
    }
  }
`;
