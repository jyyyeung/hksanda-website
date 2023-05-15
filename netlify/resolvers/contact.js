import {Contact} from "../models/contact.js";

export const getContacts = async () => {
    return Contact.find();
};

export const updateContact = (_, {contact}) => {
    const id = contact.contactId;
    delete contact.id;
    Contact.findByIdAndUpdate(id, {
        $set: {...contact},
    });
};
export const addContact = (_, {contact}) => {
    const newContact = new Contact(contact);
    return newContact.save();
};
