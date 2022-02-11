"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Transaction = _interopRequireWildcard(require("../transaction/Transaction.cjs"));

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

var _TopicId = _interopRequireDefault(require("./TopicId.cjs"));

var _Duration = _interopRequireDefault(require("../Duration.cjs"));

var _Key = _interopRequireDefault(require("../Key.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IConsensusUpdateTopicTransactionBody} proto.IConsensusUpdateTopicTransactionBody
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */

/**
 * Update a topic.
 *
 * If there is no adminKey, the only authorized update (available to anyone) is to extend the expirationTime.
 * Otherwise transaction must be signed by the adminKey.
 *
 * If an adminKey is updated, the transaction must be signed by the pre-update adminKey and post-update adminKey.
 *
 * If a new autoRenewAccount is specified (not just being removed), that account must also sign the transaction.
 */
class TopicUpdateTransaction extends _Transaction.default {
  /**
   * @param {object} props
   * @param {TopicId | string} [props.topicId]
   * @param {Key} [props.adminKey]
   * @param {Key} [props.submitKey]
   * @param {Duration | Long | number} [props.autoRenewPeriod]
   * @param {AccountId | string} [props.autoRenewAccountId]
   * @param {string} [props.topicMemo]
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
    /**
     * @private
     * @type {?string}
     */


    this._topicMemo = null;

    if (props.topicMemo != null) {
      this.setTopicMemo(props.topicMemo);
    }
    /**
     * @private
     * @type {?Key}
     */


    this._submitKey = null;

    if (props.submitKey != null) {
      this.setSubmitKey(props.submitKey);
    }
    /**
     * @private
     * @type {?Key}
     */


    this._adminKey = null;

    if (props.adminKey != null) {
      this.setAdminKey(props.adminKey);
    }
    /**
     * @private
     * @type {?AccountId}
     */


    this._autoRenewAccountId = null;

    if (props.autoRenewAccountId != null) {
      this.setAutoRenewAccountId(props.autoRenewAccountId);
    }
    /**
     * @private
     * @type {?Duration}
     */


    this._autoRenewPeriod = null;

    if (props.autoRenewPeriod != null) {
      this.setAutoRenewPeriod(props.autoRenewPeriod);
    }
  }
  /**
   * @internal
   * @param {proto.ITransaction[]} transactions
   * @param {proto.ISignedTransaction[]} signedTransactions
   * @param {TransactionId[]} transactionIds
   * @param {AccountId[]} nodeIds
   * @param {proto.ITransactionBody[]} bodies
   * @returns {TopicUpdateTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const update =
    /** @type {proto.IConsensusUpdateTopicTransactionBody} */
    body.consensusUpdateTopic;
    return _Transaction.default._fromProtobufTransactions(new TopicUpdateTransaction({
      topicId: update.topicID != null ? _TopicId.default._fromProtobuf(update.topicID) : undefined,
      adminKey: update.adminKey != null ? _Key.default._fromProtobufKey(update.adminKey) : undefined,
      submitKey: update.submitKey != null ? _Key.default._fromProtobufKey(update.submitKey) : undefined,
      autoRenewAccountId: update.autoRenewAccount != null ? _AccountId.default._fromProtobuf(update.autoRenewAccount) : undefined,
      autoRenewPeriod: update.autoRenewPeriod != null ? update.autoRenewPeriod.seconds != null ? update.autoRenewPeriod.seconds : undefined : undefined,
      topicMemo: update.memo != null ? update.memo.value != null ? update.memo.value : undefined : undefined
    }), transactions, signedTransactions, transactionIds, nodeIds, bodies);
  }
  /**
   * @returns {?TopicId}
   */


  get topicId() {
    return this._topicId;
  }
  /**
   * @param {TopicId | string} topicId
   * @returns {TopicUpdateTransaction}
   */


  setTopicId(topicId) {
    this._requireNotFrozen();

    this._topicId = typeof topicId === "string" ? _TopicId.default.fromString(topicId) : topicId.clone();
    return this;
  }
  /**
   * @returns {TopicUpdateTransaction}
   */


  clearTopicId() {
    this._requireNotFrozen();

    this._topicId = null;
    return this;
  }
  /**
   * @returns {?string}
   */


  get topicMemo() {
    return this._topicMemo;
  }
  /**
   * @param {string} topicMemo
   * @returns {TopicUpdateTransaction}
   */


  setTopicMemo(topicMemo) {
    this._requireNotFrozen();

    this._topicMemo = topicMemo;
    return this;
  }
  /**
   * @returns {TopicUpdateTransaction}
   */


  clearTopicMemo() {
    this._requireNotFrozen();

    this._topicMemo = null;
    return this;
  }
  /**
   * @returns {?Key}
   */


  get adminKey() {
    return this._adminKey;
  }
  /**
   * @param {Key} adminKey
   * @returns {TopicUpdateTransaction}
   */


  setAdminKey(adminKey) {
    this._requireNotFrozen();

    this._adminKey = adminKey;
    return this;
  }
  /**
   * @returns {TopicUpdateTransaction}
   */


  clearAdminKey() {
    this._requireNotFrozen();

    this._adminKey = null;
    return this;
  }
  /**
   * @returns {?Key}
   */


  get submitKey() {
    return this._submitKey;
  }
  /**
   * @param {Key} submitKey
   * @returns {TopicUpdateTransaction}
   */


  setSubmitKey(submitKey) {
    this._requireNotFrozen();

    this._submitKey = submitKey;
    return this;
  }
  /**
   * @returns {TopicUpdateTransaction}
   */


  clearSubmitKey() {
    this._requireNotFrozen();

    this._submitKey = null;
    return this;
  }
  /**
   * @returns {?AccountId}
   */


  get autoRenewAccountId() {
    return this._autoRenewAccountId;
  }
  /**
   * @param {AccountId | string} autoRenewAccountId
   * @returns {TopicUpdateTransaction}
   */


  setAutoRenewAccountId(autoRenewAccountId) {
    this._requireNotFrozen();

    this._autoRenewAccountId = autoRenewAccountId instanceof _AccountId.default ? autoRenewAccountId : _AccountId.default.fromString(autoRenewAccountId);
    return this;
  }
  /**
   * @returns {TopicUpdateTransaction}
   */


  clearAutoRenewAccountId() {
    this._requireNotFrozen();

    this._autoRenewAccountId = null;
    return this;
  }
  /**
   * @returns {?Duration}
   */


  get autoRenewPeriod() {
    return this._autoRenewPeriod;
  }
  /**
   * Set the auto renew period for this account.
   *
   * @param {Duration | Long | number} autoRenewPeriod
   * @returns {TopicUpdateTransaction}
   */


  setAutoRenewPeriod(autoRenewPeriod) {
    this._requireNotFrozen();

    this._autoRenewPeriod = autoRenewPeriod instanceof _Duration.default ? autoRenewPeriod : new _Duration.default(autoRenewPeriod);
    return this;
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._topicId != null) {
      this._topicId.validateChecksum(client);
    }

    if (this._autoRenewAccountId != null) {
      this._autoRenewAccountId.validateChecksum(client);
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
    return channel.consensus.updateTopic(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "consensusUpdateTopic";
  }
  /**
   * @override
   * @protected
   * @returns {proto.IConsensusUpdateTopicTransactionBody}
   */


  _makeTransactionData() {
    return {
      topicID: this._topicId != null ? this._topicId._toProtobuf() : null,
      adminKey: this._adminKey != null ? this._adminKey._toProtobufKey() : null,
      submitKey: this._submitKey != null ? this._submitKey._toProtobufKey() : null,
      memo: this._topicMemo != null ? {
        value: this._topicMemo
      } : null,
      autoRenewAccount: this._autoRenewAccountId != null ? this._autoRenewAccountId._toProtobuf() : null,
      autoRenewPeriod: this._autoRenewPeriod != null ? this._autoRenewPeriod._toProtobuf() : null
    };
  }

}

exports.default = TopicUpdateTransaction;

_Transaction.TRANSACTION_REGISTRY.set("consensusUpdateTopic", // eslint-disable-next-line @typescript-eslint/unbound-method
TopicUpdateTransaction._fromProtobuf);