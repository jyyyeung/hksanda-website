var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, {get: all[name], enumerable: true});
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
    }
    return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var contact_exports = {};
__export(contact_exports, {
    addContact: () => addContact,
    getContacts: () => getContacts,
    updateContact: () => updateContact
});
module.exports = __toCommonJS(contact_exports);
var import_contact = require("../models/contact.js");
const getContacts = async () => {
    return import_contact.Contact.find();
};
const updateContact = (_, {contact}) => {
    const id = contact.contactId;
    delete contact.id;
    import_contact.Contact.findByIdAndUpdate(id, {
        $set: __spreadValues({}, contact)
    });
};
const addContact = (_, {contact}) => {
    const newContact = new import_contact.Contact(contact);
    return newContact.save();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    addContact,
    getContacts,
    updateContact
});