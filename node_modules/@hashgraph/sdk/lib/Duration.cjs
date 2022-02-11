"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _long = _interopRequireDefault(require("long"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IDuration} proto.IDuration
 */
class Duration {
  /**
   * @param {Long | number} seconds
   */
  constructor(seconds) {
    /**
     * @readonly
     * @type {Long}
     */
    this.seconds = seconds instanceof _long.default ? seconds : _long.default.fromNumber(seconds);
    Object.freeze(this);
  }
  /**
   * @internal
   * @returns {proto.IDuration}
   */


  _toProtobuf() {
    return {
      seconds: this.seconds
    };
  }
  /**
   * @internal
   * @param {proto.IDuration} duration
   * @returns {Duration}
   */


  static _fromProtobuf(duration) {
    return new Duration(
    /** @type {Long} */
    duration.seconds);
  }

}

exports.default = Duration;