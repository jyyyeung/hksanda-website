import {gql} from "apollo-boost";

export const GET_CAROUSEL_BY_ID = gql`
    query GetCarouselByIdQuery($id: ID) {
        getCarouselById(id: $id) {
            id
            route
            order
            images {
                imageUrl
                alt
                title
                paragraph
            }
        }
    }
`;
export const GET_CAROUSEL_BY_ROUTE = gql`
    query GetCarouselByRouteQuery($route: String) {
        getCarouselByRoute(route: $route) {
            id
            route
            order
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
            route
            order
            images {
                imageUrl
                paragraph
                title
                alt
            }
        }
    }
`;
