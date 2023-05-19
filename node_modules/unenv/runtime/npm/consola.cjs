"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = exports.consola = void 0;
var _proxy = _interopRequireDefault(require("../mock/proxy.cjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const consola = _proxy.default.__createMock__("consola", {
  ...console
});
exports.consola = consola;
var _default = consola;
module.exports = _default;