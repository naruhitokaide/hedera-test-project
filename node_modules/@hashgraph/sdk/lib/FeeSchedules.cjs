"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var proto = _interopRequireWildcard(require("@hashgraph/proto"));

var _FeeSchedule = _interopRequireDefault(require("./FeeSchedule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class FeeSchedules {
  /**
   * @param {object} [props]
   * @param {FeeSchedule} [props.currentFeeSchedule]
   * @param {FeeSchedule} [props.nextFeeSchedule]
   */
  constructor(props = {}) {
    /*
     * Contains current Fee Schedule
     *
     * @type {FeeSchedule}
     */
    this.current = props.currentFeeSchedule;
    /*
     * Contains next Fee Schedule
     *
     * @type {FeeSchedule}
     */

    this.next = props.nextFeeSchedule;
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {FeeSchedules}
   */


  static fromBytes(bytes) {
    return FeeSchedules._fromProtobuf(proto.CurrentAndNextFeeSchedule.decode(bytes));
  }
  /**
   * @internal
   * @param {proto.ICurrentAndNextFeeSchedule} feeSchedules
   * @returns {FeeSchedules}
   */


  static _fromProtobuf(feeSchedules) {
    return new FeeSchedules({
      currentFeeSchedule: feeSchedules.currentFeeSchedule != null ? _FeeSchedule.default._fromProtobuf(feeSchedules.currentFeeSchedule) : undefined,
      nextFeeSchedule: feeSchedules.nextFeeSchedule != null ? _FeeSchedule.default._fromProtobuf(feeSchedules.nextFeeSchedule) : undefined
    });
  }
  /**
   * @internal
   * @returns {proto.ICurrentAndNextFeeSchedule}
   */


  _toProtobuf() {
    return {
      currentFeeSchedule: this.current != null ? this.current._toProtobuf() : undefined,
      nextFeeSchedule: this.next != null ? this.next._toProtobuf() : undefined
    };
  }
  /**
   * @returns {Uint8Array}
   */


  toBytes() {
    return proto.CurrentAndNextFeeSchedule.encode(this._toProtobuf()).finish();
  }

}

exports.default = FeeSchedules;