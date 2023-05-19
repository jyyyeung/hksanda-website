"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subtle = exports.randomUUID = exports.getRandomValues = exports.default = void 0;
const webcrypto = globalThis.crypto;
const subtle = webcrypto.subtle;
exports.subtle = subtle;
const randomUUID = () => {
  return webcrypto.randomUUID();
};
exports.randomUUID = randomUUID;
const getRandomValues = array => {
  return webcrypto.getRandomValues(array);
};
exports.getRandomValues = getRandomValues;
var _default = {
  randomUUID,
  getRandomValues,
  subtle,
  webcrypto
};
module.exports = _default;