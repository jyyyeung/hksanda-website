import { gql } from "apollo-boost";

// export const GET_IMAGE = gql`
// # query GetClassesQuery {
// #   getClasses {
// #     id
// #     title
// #     type
// #     classroom
// #     time
// #     students
// #     location
// #     mapQuery
// #   }
// # }
// `;

export const UPLOAD_IMAGE = gql`
  mutation SingleUploadMutation($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;
