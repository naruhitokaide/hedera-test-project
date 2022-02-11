"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @typedef {import("./Status.js").default} Status
 * @typedef {import("./transaction/TransactionId.js").default} TransactionId
 */
class StatusError extends Error {
  /**
   * @param {object} props
   * @param {Status} props.status
   * @param {TransactionId} props.transactionId
   * @param {string} message
   */
  constructor(props, message) {
    super(message);
    this.name = "StatusError";
    this.status = props.status;
    this.transactionId = props.transactionId;
    this.message = message;

    if (typeof Error.captureStackTrace !== "undefined") {
      Error.captureStackTrace(this, StatusError);
    }
  }

}

exports.default = StatusError;