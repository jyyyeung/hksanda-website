/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-13 14:31:29
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 12:22:41
 * @FilePath: /hksanda-website/src/apollo/image.js
 * @Description: apollo query and mutations for uploading and downloading images
 */
import {gql} from "apollo-boost";

export const GET_IMAGE = gql`
    query GetImagesQuery {
        getImages {
            id
            filename
            mimetype
            encoding
            path
        }
    }
`;
export const GET_IMAGE_BY_ID = gql`
    query GetImageByIdQuery($imageId: String) {
        getImageById(imageId: $imageId) {
            id
            filename
            mimetype
            encoding
            path
        }
    }
`;

export const UPLOAD_IMAGE = gql`
    mutation SingleUploadMutation($file: Upload!) {
        singleUpload(file: $file) {
            filename
            mimetype
            encoding
        }
    }
`;
