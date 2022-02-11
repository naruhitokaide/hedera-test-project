"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TokenId = _interopRequireDefault(require("./TokenId.cjs"));

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
 * @typedef {import("@hashgraph/proto").ITokenPauseTransactionBody} proto.ITokenPauseTransactionBody
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 * @typedef {import("../account/AccountId.js").default} AccountId
 */

/**
 * Pause a new Hedera™ crypto-currency token.
 */
class TokenPauseTransaction extends _Transaction.default {
  /**
   * @param {object} [props]
   * @param {TokenId | string} [props.tokenId]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?TokenId}
     */

    this._tokenId = null;

    if (props.tokenId != null) {
      this.setTokenId(props.tokenId);
    }
  }
  /**
   * @internal
   * @param {proto.ITransaction[]} transactions
   * @param {proto.ISignedTransaction[]} signedTransactions
   * @param {TransactionId[]} transactionIds
   * @param {AccountId[]} nodeIds
   * @param {proto.ITransactionBody[]} bodies
   * @returns {TokenPauseTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const pauseToken =
    /** @type {proto.ITokenPauseTransactionBody} */
    body.tokenPause;
    return _Transaction.default._fromProtobufTransactions(new TokenPauseTransaction({
      tokenId: pauseToken.token != null ? _TokenId.default._fromProtobuf(pauseToken.token) : undefined
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
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._tokenId != null) {
      this._tokenId.validateChecksum(client);
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
    return channel.token.pauseToken(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "tokenPause";
  }
  /**
   * @override
   * @protected
   * @returns {proto.ITokenPauseTransactionBody}
   */


  _makeTransactionData() {
    return {
      token: this._tokenId != null ? this._tokenId._toProtobuf() : null
    };
  }

}

exports.default = TokenPauseTransaction;

_Transaction.TRANSACTION_REGISTRY.set("tokenPause", // eslint-disable-next-line @typescript-eslint/unbound-method
TokenPauseTransaction._fromProtobuf);