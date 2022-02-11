"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _long = _interopRequireDefault(require("long"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITimestamp} proto.ITimestamp
 */
const MAX_NS = _long.default.fromNumber(1000000000);

class Timestamp {
  /**
   * @param {Long | number} seconds
   * @param {Long | number} nanos
   */
  constructor(seconds, nanos) {
    /**
     * @readonly
     * @type {Long}
     */
    this.seconds = seconds instanceof _long.default ? seconds : _long.default.fromNumber(seconds);
    /**
     * @readonly
     * @type {Long}
     */

    this.nanos = nanos instanceof _long.default ? nanos : _long.default.fromNumber(nanos);
    Object.freeze(this);
  }
  /**
   * @returns {Timestamp}
   */


  static generate() {
    const jitter = Math.floor(Math.random() * 5000) + 8000;
    const now = Date.now() - jitter;
    const seconds = Math.floor(now / 1000);
    const nanos = Math.floor(now % 1000) * 1000000 + Math.floor(Math.random() * 1000000);
    return new Timestamp(seconds, nanos);
  }
  /**
   * @param {string | number | Date} date
   * @returns {Timestamp}
   */


  static fromDate(date) {
    let ms;

    if (typeof date === "number") {
      ms = date;
    } else if (typeof date === "string") {
      ms = Date.parse(date);
    } else if (date instanceof Date) {
      ms = date.getTime();
    } else {
      throw new TypeError(`invalid type '${typeof date}' for 'data', expected 'Date'`);
    }

    const seconds = Math.floor(ms / 1000);
    const nanos = Math.floor(ms % 1000) * 1000000;
    return new Timestamp(seconds, nanos);
  }
  /**
   * @returns {Date}
   */


  toDate() {
    return new Date(this.seconds.toInt() * 1000 + Math.floor(this.nanos.toInt() / 1000000));
  }
  /**
   * @param {Long | number} nanos
   * @returns {Timestamp}
   */


  plusNanos(nanos) {
    const ns = this.nanos.add(nanos);
    return new Timestamp(this.seconds.add(ns.div(MAX_NS)), ns.mod(MAX_NS));
  }
  /**
   * @internal
   * @returns {proto.ITimestamp}
   */


  _toProtobuf() {
    return {
      seconds: this.seconds,
      nanos: this.nanos.toInt()
    };
  }
  /**
   * @internal
   * @param {proto.ITimestamp} timestamp
   * @returns {Timestamp}
   */


  static _fromProtobuf(timestamp) {
    return new Timestamp(timestamp.seconds instanceof _long.default ? timestamp.seconds.toInt() : timestamp.seconds != null ? timestamp.seconds : 0, timestamp.nanos != null ? timestamp.nanos : 0);
  }
  /**
   * @returns {string}
   */


  toString() {
    return `${this.seconds.toString()}.${this.nanos.toString()}`;
  }
  /**
   * @param {Timestamp} other
   * @returns {number}
   */


  compare(other) {
    const comparison = this.seconds.compare(other.seconds);

    if (comparison != 0) {
      return comparison;
    }

    return this.nanos.compare(other.nanos);
  }

}

exports.default = Timestamp;