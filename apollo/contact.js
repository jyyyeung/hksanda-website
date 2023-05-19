/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-18 10:49:00
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 11:16:43
 * @FilePath: /hksanda-website/src/apollo/contact.js
 * @Description: apollo query and mutations for contacts page
 */
import gql from "graphql-tag";


export const GET_CONTACTS = gql`
    query getContactsQuery {
        getContacts {
            id
            field
            icon
            to
            content
        }
    }
`;
export const ADD_CONTACT = gql`
    mutation addContactMutation($contact: ContactInput) {
        addContact(contact: $contact) {
            id
            field
            icon
            to
            content
        }
    }
`;
export const UPDATE_CONTACT = gql`
    mutation updateContactMutation($contact: ContactInput) {
        updateContact(contact: $contact) {
            id
            to
            icon
            field
            content
        }
    }
`;
