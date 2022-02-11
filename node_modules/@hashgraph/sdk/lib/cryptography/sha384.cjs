"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.digest = digest;
exports.digestSync = digestSync;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Uint8Array} data
 * @returns {Promise<Uint8Array>}
 */
function digest(data) {
  // fallback to trying node-crypto which could be polyfilled by the browser environment
  return Promise.resolve(_crypto.default.createHash("sha384").update(data).digest());
}
/**
 * @param {Uint8Array} data
 * @returns {Uint8Array}
 */


function digestSync(data) {
  return _crypto.default.createHash("sha384").update(data).digest();
}