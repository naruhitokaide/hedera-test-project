"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueToLong = valueToLong;

var _bignumber = _interopRequireDefault(require("bignumber.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {{low: number, high: number, unsigned: boolean}} LongObject
 * @typedef {import("long")} Long
 */

/**
 * @param {Long | number | string | LongObject | BigNumber} value
 * @returns {BigNumber}
 */
function valueToLong(value) {
  if (_bignumber.default.isBigNumber(value)) {
    return value;
  } else {
    return new _bignumber.default(value.toString());
  }
}