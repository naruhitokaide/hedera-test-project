"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decode = decode;
exports.encode = encode;

/**
 * @param {Uint8Array} data
 * @returns {string}
 */
function encode(data) {
  return Buffer.from(data).toString("hex");
}
/**
 * @param {string} text
 * @returns {Uint8Array}
 */


function decode(text) {
  const str = text.startsWith("0x") ? text.substring(2) : text;
  return Buffer.from(str, "hex");
}