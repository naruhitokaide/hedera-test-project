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
 */
class PrecheckStatusError extends _StatusError.default {
  /**
   * @param {object} props
   * @param {Status} props.status
   * @param {TransactionId} props.transactionId
   */
  constructor(props) {
    super(props, `transaction ${props.transactionId.toString()} failed precheck with status ${props.status.toString()}`);
  }

}

exports.default = PrecheckStatusError;