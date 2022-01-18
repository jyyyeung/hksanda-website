/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-18 10:53:10
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 11:14:15
 * @FilePath: /hksanda-website/api/resolvers/contact.js
 * @Description: resolver for contact information
 */

import Contact from "../models/contact.js";

export const getContacts = async () => {
  return await Contact.find();
};

export const updateContact = (_, { contact }) => {
  const id = contact.contactId;
  delete contact.id;
  Contact.findByIdAndUpdate(id, {
    $set: { ...contact },
  });
};
export const addContact = (_, { contact }) => {
  const newContact = new Contact(contact);
  return newContact.save();
};
