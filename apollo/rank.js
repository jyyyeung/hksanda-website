import gql from "graphql-tag";

export const GET_RANKINGS = gql`
    query GetRankingsQuery {
        getRankings {
            id
            name
            awardees
        }
    }
`;

export const UPDATE_RANK = gql`
    mutation updateRankMutation($details: RankInput) {
        updateRanking(details: $details) {
            id
            name
            awardees
        }
    }
`;
