"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var proto = _interopRequireWildcard(require("@hashgraph/proto"));

var _RequestType = _interopRequireDefault(require("./RequestType"));

var _FeeData = _interopRequireDefault(require("./FeeData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class TransactionFeeSchedule {
  /**
   * @param {object} [props]
   * @param {RequestType} [props.hederaFunctionality]
   * @param {FeeData} [props.feeData]
   * @param {FeeData[]} [props.fees]
   */
  constructor(props = {}) {
    /*
     * A particular transaction or query
     *
     * @type {RequestType}
     */
    this.hederaFunctionality = props.hederaFunctionality;
    /*
     * Resource price coefficients
     *
     * @type {FeeData}
     */

    this.feeData = props.feeData;
    /*
     * Resource price coefficients
     *
     * @type {FeeData[]}
     */

    this.fees = props.fees;
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {TransactionFeeSchedule}
   */


  static fromBytes(bytes) {
    return TransactionFeeSchedule._fromProtobuf(proto.TransactionFeeSchedule.decode(bytes));
  }
  /**
   * @internal
   * @param {proto.ITransactionFeeSchedule} transactionFeeSchedule
   * @returns {TransactionFeeSchedule}
   */


  static _fromProtobuf(transactionFeeSchedule) {
    return new TransactionFeeSchedule({
      hederaFunctionality: transactionFeeSchedule.hederaFunctionality != null ? _RequestType.default._fromCode(transactionFeeSchedule.hederaFunctionality) : undefined,
      feeData: transactionFeeSchedule.feeData != null ? _FeeData.default._fromProtobuf(transactionFeeSchedule.feeData) : undefined,
      fees: transactionFeeSchedule.fees != null ? transactionFeeSchedule.fees.map(fee => _FeeData.default._fromProtobuf(fee)) : undefined
    });
  }
  /**
   * @internal
   * @returns {proto.ITransactionFeeSchedule}
   */


  _toProtobuf() {
    return {
      hederaFunctionality: this.hederaFunctionality != null ? this.hederaFunctionality.valueOf() : undefined,
      feeData: this.feeData != null ? this.feeData._toProtobuf() : undefined,
      fees: this.fees != null ? this.fees.map(fee => fee._toProtobuf()) : undefined
    };
  }
  /**
   * @returns {Uint8Array}
   */


  toBytes() {
    return proto.TransactionFeeSchedule.encode(this._toProtobuf()).finish();
  }

}

exports.default = TransactionFeeSchedule;