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
 * @typedef {import("@hashgraph/proto").ITokenUnpauseTransactionBody} proto.ITokenUnpauseTransactionBody
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 * @typedef {import("../account/AccountId.js").default} AccountId
 */

/**
 * Unpause a new Hedera™ crypto-currency token.
 */
class TokenUnpauseTransaction extends _Transaction.default {
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
   * @returns {TokenUnpauseTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const unpauseToken =
    /** @type {proto.ITokenUnpauseTransactionBody} */
    body.tokenUnpause;
    return _Transaction.default._fromProtobufTransactions(new TokenUnpauseTransaction({
      tokenId: unpauseToken.token != null ? _TokenId.default._fromProtobuf(unpauseToken.token) : undefined
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
    return channel.token.unpauseToken(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "tokenUnpause";
  }
  /**
   * @override
   * @protected
   * @returns {proto.ITokenUnpauseTransactionBody}
   */


  _makeTransactionData() {
    return {
      token: this._tokenId != null ? this._tokenId._toProtobuf() : null
    };
  }

}

exports.default = TokenUnpauseTransaction;

_Transaction.TRANSACTION_REGISTRY.set("tokenUnpause", // eslint-disable-next-line @typescript-eslint/unbound-method
TokenUnpauseTransaction._fromProtobuf);