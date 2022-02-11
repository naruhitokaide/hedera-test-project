"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ReceiptStatusError = _interopRequireDefault(require("../ReceiptStatusError.cjs"));

var _Status = _interopRequireDefault(require("../Status.cjs"));

var _TransactionReceiptQuery = _interopRequireDefault(require("./TransactionReceiptQuery.cjs"));

var _TransactionRecordQuery = _interopRequireDefault(require("./TransactionRecordQuery.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("./TransactionId.js").default} TransactionId
 * @typedef {import("./TransactionReceipt.js").default} TransactionReceipt
 * @typedef {import("./TransactionRecord.js").default} TransactionRecord
 */
class TransactionResponse {
  /**
   * @internal
   * @param {object} props
   * @param {AccountId} props.nodeId
   * @param {Uint8Array} props.transactionHash
   * @param {TransactionId} props.transactionId
   */
  constructor(props) {
    /** @readonly */
    this.nodeId = props.nodeId;
    /** @readonly */

    this.transactionHash = props.transactionHash;
    /** @readonly */

    this.transactionId = props.transactionId;
    Object.freeze(this);
  }
  /**
   * @param {Client} client
   * @returns {Promise<TransactionReceipt>}
   */


  async getReceipt(client) {
    const receipt = await new _TransactionReceiptQuery.default().setTransactionId(this.transactionId).setNodeAccountIds([this.nodeId]).execute(client);

    if (receipt.status !== _Status.default.Success) {
      throw new _ReceiptStatusError.default({
        transactionReceipt: receipt,
        status: receipt.status,
        transactionId: this.transactionId
      });
    }

    return receipt;
  }
  /**
   * @param {Client} client
   * @returns {Promise<TransactionRecord>}
   */


  async getRecord(client) {
    await this.getReceipt(client);
    return new _TransactionRecordQuery.default().setTransactionId(this.transactionId).setNodeAccountIds([this.nodeId]).execute(client);
  }

}

exports.default = TransactionResponse;