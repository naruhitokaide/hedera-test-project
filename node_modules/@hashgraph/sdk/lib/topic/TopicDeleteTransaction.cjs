"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Transaction = _interopRequireWildcard(require("../transaction/Transaction.cjs"));

var _TopicId = _interopRequireDefault(require("./TopicId.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IConsensusDeleteTopicTransactionBody} proto.IConsensusDeleteTopicTransactionBody
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */

/**
 * Delete a topic.
 *
 * No more transactions or queries on the topic will succeed.
 *
 * If an adminKey is set, this transaction must be signed by that key.
 * If there is no adminKey, this transaction will fail with Status#Unautorized.
 */
class TopicDeleteTransaction extends _Transaction.default {
  /**
   * @param {object} props
   * @param {TopicId | string} [props.topicId]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?TopicId}
     */

    this._topicId = null;

    if (props.topicId != null) {
      this.setTopicId(props.topicId);
    }
  }
  /**
   * @internal
   * @param {proto.ITransaction[]} transactions
   * @param {proto.ISignedTransaction[]} signedTransactions
   * @param {TransactionId[]} transactionIds
   * @param {AccountId[]} nodeIds
   * @param {proto.ITransactionBody[]} bodies
   * @returns {TopicDeleteTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const topicDelete =
    /** @type {proto.IConsensusDeleteTopicTransactionBody} */
    body.consensusDeleteTopic;
    return _Transaction.default._fromProtobufTransactions(new TopicDeleteTransaction({
      topicId: topicDelete.topicID != null ? _TopicId.default._fromProtobuf(topicDelete.topicID) : undefined
    }), transactions, signedTransactions, transactionIds, nodeIds, bodies);
  }
  /**
   * @returns {?TopicId}
   */


  get topicId() {
    return this._topicId;
  }
  /**
   * Set the topic ID which is being deleted in this transaction.
   *
   * @param {TopicId | string} topicId
   * @returns {TopicDeleteTransaction}
   */


  setTopicId(topicId) {
    this._requireNotFrozen();

    this._topicId = typeof topicId === "string" ? _TopicId.default.fromString(topicId) : topicId.clone();
    return this;
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._topicId != null) {
      this._topicId.validateChecksum(client);
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
    return channel.consensus.deleteTopic(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "consensusDeleteTopic";
  }
  /**
   * @override
   * @protected
   * @returns {proto.IConsensusDeleteTopicTransactionBody}
   */


  _makeTransactionData() {
    return {
      topicID: this._topicId != null ? this._topicId._toProtobuf() : null
    };
  }

}

exports.default = TopicDeleteTransaction;

_Transaction.TRANSACTION_REGISTRY.set("consensusDeleteTopic", // eslint-disable-next-line @typescript-eslint/unbound-method
TopicDeleteTransaction._fromProtobuf);