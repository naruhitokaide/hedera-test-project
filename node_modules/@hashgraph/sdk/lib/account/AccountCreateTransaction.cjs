"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Hbar = _interopRequireDefault(require("../Hbar.cjs"));

var _AccountId = _interopRequireDefault(require("./AccountId.cjs"));

var _Transaction = _interopRequireWildcard(require("../transaction/Transaction.cjs"));

var _Duration = _interopRequireDefault(require("../Duration.cjs"));

var _long = _interopRequireDefault(require("long"));

var _Key = _interopRequireDefault(require("../Key.cjs"));

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
 * @typedef {import("@hashgraph/proto").ICryptoCreateTransactionBody} proto.ICryptoCreateTransactionBody
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 */

/**
 * @typedef {import("bignumber.js").default} BigNumber
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../Timestamp.js").default} Timestamp
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */

/**
 * Create a new Hedera™ crypto-currency account.
 */
class AccountCreateTransaction extends _Transaction.default {
  /**
   * @param {object} [props]
   * @param {Key} [props.key]
   * @param {number | string | Long | BigNumber | Hbar} [props.initialBalance]
   * @param {boolean} [props.receiverSignatureRequired]
   * @param {AccountId} [props.proxyAccountId]
   * @param {Duration | Long | number} [props.autoRenewPeriod]
   * @param {string} [props.accountMemo]
   * @param {Long | number} [props.maxAutomaticTokenAssociations]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?Key}
     */

    this._key = null;
    /**
     * @private
     * @type {?Hbar}
     */

    this._initialBalance = null;
    /**
     * @private
     * @type {Hbar}
     */

    this._sendRecordThreshold = _Transaction.DEFAULT_RECORD_THRESHOLD;
    /**
     * @private
     * @type {Hbar}
     */

    this._receiveRecordThreshold = _Transaction.DEFAULT_RECORD_THRESHOLD;
    /**
     * @private
     * @type {boolean}
     */

    this._receiverSignatureRequired = false;
    /**
     * @private
     * @type {?AccountId}
     */

    this._proxyAccountId = null;
    /**
     * @private
     * @type {Duration}
     */

    this._autoRenewPeriod = new _Duration.default(_Transaction.DEFAULT_AUTO_RENEW_PERIOD);
    /**
     * @private
     * @type {?string}
     */

    this._accountMemo = null;
    /**
     * @private
     * @type {?Long}
     */

    this._maxAutomaticTokenAssociations = null;

    if (props.key != null) {
      this.setKey(props.key);
    }

    if (props.receiverSignatureRequired != null) {
      this.setReceiverSignatureRequired(props.receiverSignatureRequired);
    }

    if (props.initialBalance != null) {
      this.setInitialBalance(props.initialBalance);
    }

    if (props.proxyAccountId != null) {
      this.setProxyAccountId(props.proxyAccountId);
    }

    if (props.autoRenewPeriod != null) {
      this.setAutoRenewPeriod(props.autoRenewPeriod);
    }

    if (props.accountMemo != null) {
      this.setAccountMemo(props.accountMemo);
    }

    if (props.maxAutomaticTokenAssociations != null) {
      this.setMaxAutomaticTokenAssociations(props.maxAutomaticTokenAssociations);
    }
  }
  /**
   * @internal
   * @param {proto.ITransaction[]} transactions
   * @param {proto.ISignedTransaction[]} signedTransactions
   * @param {TransactionId[]} transactionIds
   * @param {AccountId[]} nodeIds
   * @param {proto.ITransactionBody[]} bodies
   * @returns {AccountCreateTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const create =
    /** @type {proto.ICryptoCreateTransactionBody} */
    body.cryptoCreateAccount;
    return _Transaction.default._fromProtobufTransactions(new AccountCreateTransaction({
      key: create.key != null ? _Key.default._fromProtobufKey(create.key) : undefined,
      initialBalance: create.initialBalance != null ? create.initialBalance : undefined,
      receiverSignatureRequired: create.receiverSigRequired != null ? create.receiverSigRequired : undefined,
      proxyAccountId: create.proxyAccountID != null ? _AccountId.default._fromProtobuf(
      /** @type {proto.IAccountID} */
      create.proxyAccountID) : undefined,
      autoRenewPeriod: create.autoRenewPeriod != null ? create.autoRenewPeriod.seconds != null ? create.autoRenewPeriod.seconds : undefined : undefined,
      accountMemo: create.memo != null ? create.memo : undefined,
      maxAutomaticTokenAssociations: create.maxAutomaticTokenAssociations != null ? create.maxAutomaticTokenAssociations : undefined
    }), transactions, signedTransactions, transactionIds, nodeIds, bodies);
  }
  /**
   * @returns {?Key}
   */


  get key() {
    return this._key;
  }
  /**
   * Set the key for this account.
   *
   * This is the key that must sign each transfer out of the account.
   *
   * If `receiverSignatureRequired` is true, then the key must also sign
   * any transfer into the account.
   *
   * @param {Key} key
   * @returns {this}
   */


  setKey(key) {
    this._requireNotFrozen();

    this._key = key;
    return this;
  }
  /**
   * @returns {?Hbar}
   */


  get initialBalance() {
    return this._initialBalance;
  }
  /**
   * Set the initial amount to transfer into this account.
   *
   * @param {number | string | Long | BigNumber | Hbar} initialBalance
   * @returns {this}
   */


  setInitialBalance(initialBalance) {
    this._requireNotFrozen();

    this._initialBalance = initialBalance instanceof _Hbar.default ? initialBalance : new _Hbar.default(initialBalance);
    return this;
  }
  /**
   * @returns {boolean}
   */


  get receiverSignatureRequired() {
    return this._receiverSignatureRequired;
  }
  /**
   * Set to true to require the key for this account to sign any transfer of
   * hbars to this account.
   *
   * @param {boolean} receiverSignatureRequired
   * @returns {this}
   */


  setReceiverSignatureRequired(receiverSignatureRequired) {
    this._requireNotFrozen();

    this._receiverSignatureRequired = receiverSignatureRequired;
    return this;
  }
  /**
   * @returns {?AccountId}
   */


  get proxyAccountId() {
    return this._proxyAccountId;
  }
  /**
   * Set the ID of the account to which this account is proxy staked.
   *
   * @param {AccountId} proxyAccountId
   * @returns {this}
   */


  setProxyAccountId(proxyAccountId) {
    this._requireNotFrozen();

    this._proxyAccountId = proxyAccountId;
    return this;
  }
  /**
   * @returns {Duration}
   */


  get autoRenewPeriod() {
    return this._autoRenewPeriod;
  }
  /**
   * Set the auto renew period for this account.
   *
   * @param {Duration | Long | number} autoRenewPeriod
   * @returns {this}
   */


  setAutoRenewPeriod(autoRenewPeriod) {
    this._requireNotFrozen();

    this._autoRenewPeriod = autoRenewPeriod instanceof _Duration.default ? autoRenewPeriod : new _Duration.default(autoRenewPeriod);
    return this;
  }
  /**
   * @returns {?string}
   */


  get accountMemo() {
    return this._accountMemo;
  }
  /**
   * @param {string} memo
   * @returns {this}
   */


  setAccountMemo(memo) {
    this._requireNotFrozen();

    this._accountMemo = memo;
    return this;
  }
  /**
   * @returns {?Long}
   */


  get maxAutomaticTokenAssociations() {
    return this._maxAutomaticTokenAssociations;
  }
  /**
   * @param {Long | number} maxAutomaticTokenAssociations
   * @returns {this}
   */


  setMaxAutomaticTokenAssociations(maxAutomaticTokenAssociations) {
    this._requireNotFrozen();

    this._maxAutomaticTokenAssociations = typeof maxAutomaticTokenAssociations === "number" ? _long.default.fromNumber(maxAutomaticTokenAssociations) : maxAutomaticTokenAssociations;
    return this;
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._proxyAccountId != null) {
      this._proxyAccountId.validateChecksum(client);
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
    return channel.crypto.createAccount(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "cryptoCreateAccount";
  }
  /**
   * @override
   * @protected
   * @returns {proto.ICryptoCreateTransactionBody}
   */


  _makeTransactionData() {
    return {
      key: this._key != null ? this._key._toProtobufKey() : null,
      initialBalance: this._initialBalance != null ? this._initialBalance.toTinybars() : null,
      autoRenewPeriod: this._autoRenewPeriod._toProtobuf(),
      proxyAccountID: this._proxyAccountId != null ? this._proxyAccountId._toProtobuf() : null,
      receiveRecordThreshold: this._receiveRecordThreshold.toTinybars(),
      sendRecordThreshold: this._sendRecordThreshold.toTinybars(),
      receiverSigRequired: this._receiverSignatureRequired,
      memo: this._accountMemo,
      maxAutomaticTokenAssociations: this._maxAutomaticTokenAssociations != null ? this._maxAutomaticTokenAssociations.toInt() : null
    };
  }

}

exports.default = AccountCreateTransaction;

_Transaction.TRANSACTION_REGISTRY.set("cryptoCreateAccount", // eslint-disable-next-line @typescript-eslint/unbound-method
AccountCreateTransaction._fromProtobuf);