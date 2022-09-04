import gql from "graphql-tag";

export const ADD_MASONRY = gql`
    mutation addMasonryMutation($masonry: MasonryInput) {
        addMasonry(masonry: $masonry) {
            id
            title
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
export const GET_MASONRY_BY_ID = gql`
    query GetMasonryByIdQuery($id: ID) {
        getMasonryById(id: $id) {
            id
            route
            title
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
export const GET_MASONRY_BY_ROUTE = gql`
    query GetMasonryByRouteQuery($route: String) {
        getMasonryByRoute(route: $route) {
            id
            route
            title
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

export const UPDATE_MASONRY = gql`
    mutation updateMasonryMutation($masonry: MasonryInput) {
        updateMasonry(masonry: $masonry) {
            id
            route
            order
            title
            images {
                imageUrl
                alt
                title
                paragraph
            }
        }
    }
`;
