"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TokenId = _interopRequireDefault(require("./TokenId.cjs"));

var _Transaction = _interopRequireWildcard(require("../transaction/Transaction.cjs"));

var _long = _interopRequireDefault(require("long"));

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
 * @typedef {import("@hashgraph/proto").ITokenBurnTransactionBody} proto.ITokenBurnTransactionBody
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */

/**
 * Burn a new Hedera™ crypto-currency token.
 */
class TokenBurnTransaction extends _Transaction.default {
  /**
   * @param {object} [props]
   * @param {TokenId | string} [props.tokenId]
   * @param {Long | number} [props.amount]
   * @param {(Long | number)[]} [props.serials]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?TokenId}
     */

    this._tokenId = null;
    /**
     * @private
     * @type {?Long}
     */

    this._amount = null;
    /**
     * @private
     * @type {Long[]}
     */

    this._serials = [];

    if (props.tokenId != null) {
      this.setTokenId(props.tokenId);
    }

    if (props.amount != null) {
      this.setAmount(props.amount);
    }

    if (props.serials != null) {
      this.setSerials(props.serials);
    }
  }
  /**
   * @internal
   * @param {proto.ITransaction[]} transactions
   * @param {proto.ISignedTransaction[]} signedTransactions
   * @param {TransactionId[]} transactionIds
   * @param {AccountId[]} nodeIds
   * @param {proto.ITransactionBody[]} bodies
   * @returns {TokenBurnTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const burnToken =
    /** @type {proto.ITokenBurnTransactionBody} */
    body.tokenBurn;
    return _Transaction.default._fromProtobufTransactions(new TokenBurnTransaction({
      tokenId: burnToken.token != null ? _TokenId.default._fromProtobuf(burnToken.token) : undefined,
      amount: burnToken.amount != null ? burnToken.amount : undefined,
      serials: burnToken.serialNumbers != null ? burnToken.serialNumbers : undefined
    }), transactions, signedTransactions, transactionIds, nodeIds, bodies);
  }
  /**
   * @returns {?TokenId}
   */


  get tokenId() {
    return this._tokenId;
  }
  /**
   * @param {TokenId | string} tokenId
   * @returns {this}
   */


  setTokenId(tokenId) {
    this._requireNotFrozen();

    this._tokenId = typeof tokenId === "string" ? _TokenId.default.fromString(tokenId) : tokenId.clone();
    return this;
  }
  /**
   * @returns {?Long}
   */


  get amount() {
    return this._amount;
  }
  /**
   * @param {Long | number} amount
   * @returns {this}
   */


  setAmount(amount) {
    this._requireNotFrozen();

    this._amount = amount instanceof _long.default ? amount : _long.default.fromValue(amount);
    return this;
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._tokenId != null) {
      this._tokenId.validateChecksum(client);
    }
  }
  /**
   * @returns {Long[]}
   */


  get serials() {
    return this._serials;
  }
  /**
   * @param {(Long | number)[]} serials
   * @returns {this}
   */


  setSerials(serials) {
    this._requireNotFrozen();

    this._serials = serials.map(serial => serial instanceof _long.default ? serial : _long.default.fromValue(serial));
    return this;
  }
  /**
   * @override
   * @internal
   * @param {Channel} channel
   * @param {proto.ITransaction} request
   * @returns {Promise<proto.ITransactionResponse>}
   */


  _execute(channel, request) {
    return channel.token.burnToken(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "tokenBurn";
  }
  /**
   * @override
   * @protected
   * @returns {proto.ITokenBurnTransactionBody}
   */


  _makeTransactionData() {
    return {
      amount: this._amount,
      serialNumbers: this._serials,
      token: this._tokenId != null ? this._tokenId._toProtobuf() : null
    };
  }

}

exports.default = TokenBurnTransaction;

_Transaction.TRANSACTION_REGISTRY.set("tokenBurn", // eslint-disable-next-line @typescript-eslint/unbound-method
TokenBurnTransaction._fromProtobuf);