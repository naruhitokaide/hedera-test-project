"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Hbar = _interopRequireDefault(require("../Hbar.cjs"));

var _TokenId = _interopRequireDefault(require("./TokenId.cjs"));

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

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
 * @typedef {import("@hashgraph/proto").ITokenDissociateTransactionBody} proto.ITokenDissociateTransactionBody
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */

/**
 * Dissociate a new Hedera™ crypto-currency token.
 */
class TokenDissociateTransaction extends _Transaction.default {
  /**
   * @param {object} [props]
   * @param {(TokenId | string)[]} [props.tokenIds]
   * @param {AccountId | string} [props.accountId]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?TokenId[]}
     */

    this._tokenIds = null;
    /**
     * @private
     * @type {?AccountId}
     */

    this._accountId = null;
    this.setMaxTransactionFee(new _Hbar.default(5));

    if (props.tokenIds != null) {
      this.setTokenIds(props.tokenIds);
    }

    if (props.accountId != null) {
      this.setAccountId(props.accountId);
    }
  }
  /**
   * @internal
   * @param {proto.ITransaction[]} transactions
   * @param {proto.ISignedTransaction[]} signedTransactions
   * @param {TransactionId[]} transactionIds
   * @param {AccountId[]} nodeIds
   * @param {proto.ITransactionBody[]} bodies
   * @returns {TokenDissociateTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const dissociateToken =
    /** @type {proto.ITokenDissociateTransactionBody} */
    body.tokenDissociate;
    return _Transaction.default._fromProtobufTransactions(new TokenDissociateTransaction({
      tokenIds: dissociateToken.tokens != null ? dissociateToken.tokens.map(token => _TokenId.default._fromProtobuf(token)) : undefined,
      accountId: dissociateToken.account != null ? _AccountId.default._fromProtobuf(dissociateToken.account) : undefined
    }), transactions, signedTransactions, transactionIds, nodeIds, bodies);
  }
  /**
   * @returns {?TokenId[]}
   */


  get tokenIds() {
    return this._tokenIds;
  }
  /**
   * @param {(TokenId | string)[]} tokenIds
   * @returns {this}
   */


  setTokenIds(tokenIds) {
    this._requireNotFrozen();

    this._tokenIds = tokenIds.map(tokenId => typeof tokenId === "string" ? _TokenId.default.fromString(tokenId) : tokenId.clone());
    return this;
  }
  /**
   * @returns {?AccountId}
   */


  get accountId() {
    return this._accountId;
  }
  /**
   * @param {AccountId | string} accountId
   * @returns {this}
   */


  setAccountId(accountId) {
    this._requireNotFrozen();

    this._accountId = typeof accountId === "string" ? _AccountId.default.fromString(accountId) : accountId.clone();
    return this;
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._accountId != null) {
      this._accountId.validateChecksum(client);
    }

    for (const tokenId of this._tokenIds != null ? this._tokenIds : []) {
      if (tokenId != null) {
        tokenId.validateChecksum(client);
      }
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
    return channel.token.dissociateTokens(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "tokenDissociate";
  }
  /**
   * @override
   * @protected
   * @returns {proto.ITokenDissociateTransactionBody}
   */


  _makeTransactionData() {
    return {
      tokens: this._tokenIds != null ? this._tokenIds.map(tokenId => tokenId._toProtobuf()) : null,
      account: this._accountId != null ? this._accountId._toProtobuf() : null
    };
  }

}

exports.default = TokenDissociateTransaction;

_Transaction.TRANSACTION_REGISTRY.set("tokenDissociate", // eslint-disable-next-line @typescript-eslint/unbound-method
TokenDissociateTransaction._fromProtobuf);