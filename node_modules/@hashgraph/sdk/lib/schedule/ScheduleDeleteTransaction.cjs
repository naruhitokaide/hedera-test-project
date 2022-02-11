"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ScheduleId = _interopRequireDefault(require("./ScheduleId.cjs"));

var _Transaction = _interopRequireWildcard(require("../transaction/Transaction.cjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").IScheduleDeleteTransactionBody} proto.IScheduleDeleteTransactionBody
 * @typedef {import("@hashgraph/proto").IScheduleID} proto.IScheduleID
 */

/**
 * @typedef {import("bignumber.js").default} BigNumber
 * @typedef {import("@hashgraph/cryptography").Key} Key
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../Timestamp.js").default} Timestamp
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 * @typedef {import("../account/AccountId.js").default} AccountId
 */

/**
 * Create a new Hedera™ crypto-currency account.
 */
class ScheduleDeleteTransaction extends _Transaction.default {
  /**
   * @param {object} [props]
   * @param {ScheduleId | string} [props.scheduleId]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?ScheduleId}
     */

    this._scheduleId = null;

    if (props.scheduleId != null) {
      this.setScheduleId(props.scheduleId);
    }
  }
  /**
   * @internal
   * @param {proto.ITransaction[]} transactions
   * @param {proto.ISignedTransaction[]} signedTransactions
   * @param {TransactionId[]} transactionIds
   * @param {AccountId[]} nodeIds
   * @param {proto.ITransactionBody[]} bodies
   * @returns {ScheduleDeleteTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const scheduleDelete =
    /** @type {proto.IScheduleDeleteTransactionBody} */
    body.scheduleDelete;
    return _Transaction.default._fromProtobufTransactions(new ScheduleDeleteTransaction({
      scheduleId: scheduleDelete.scheduleID != null ? _ScheduleId.default._fromProtobuf(
      /** @type {proto.IScheduleID} */
      scheduleDelete.scheduleID) : undefined
    }), transactions, signedTransactions, transactionIds, nodeIds, bodies);
  }
  /**
   * @returns {?ScheduleId}
   */


  get scheduleId() {
    return this._scheduleId;
  }
  /**
   * @param {ScheduleId | string} scheduleId
   * @returns {this}
   */


  setScheduleId(scheduleId) {
    this._requireNotFrozen();

    this._scheduleId = typeof scheduleId === "string" ? _ScheduleId.default.fromString(scheduleId) : scheduleId.clone();
    return this;
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._scheduleId != null) {
      this._scheduleId.validateChecksum(client);
    }
  }
  /**
   * @override
   * @internal
   * @param {Channel} channel
   * @param {proto.ITransaction} request
   * @returns {Promise<proto.ITransactionResponse>}
   */


  _execute(channel, request) {
    return channel.schedule.deleteSchedule(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "scheduleDelete";
  }
  /**
   * @override
   * @protected
   * @returns {proto.IScheduleDeleteTransactionBody}
   */


  _makeTransactionData() {
    return {
      scheduleID: this._scheduleId != null ? this._scheduleId._toProtobuf() : null
    };
  }

}

exports.default = ScheduleDeleteTransaction;

_Transaction.TRANSACTION_REGISTRY.set("scheduleDelete", // eslint-disable-next-line @typescript-eslint/unbound-method
ScheduleDeleteTransaction._fromProtobuf);