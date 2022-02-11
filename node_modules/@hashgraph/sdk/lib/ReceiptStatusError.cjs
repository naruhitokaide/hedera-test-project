"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _StatusError = _interopRequireDefault(require("./StatusError.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {import("./Status.js").default} Status
 * @typedef {import("./transaction/TransactionId.js").default} TransactionId
 * @typedef {import("./transaction/TransactionReceipt.js").default} TransactionReceipt
 */
class ReceiptStatusError extends _StatusError.default {
  /**
   * @param {object} props
   * @param {TransactionReceipt} props.transactionReceipt
   * @param {Status} props.status
   * @param {TransactionId} props.transactionId
   */
  constructor(props) {
    super(props, `receipt for transaction ${props.transactionId.toString()} contained error status ${props.status.toString()}`);
    /**
     * @type {TransactionReceipt}
     * @readonly
     */

    this.transactionReceipt = props.transactionReceipt;
  }

}

exports.default = ReceiptStatusError;