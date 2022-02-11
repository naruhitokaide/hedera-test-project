"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TokenId = _interopRequireDefault(require("./TokenId.cjs"));

var _Transaction = _interopRequireWildcard(require("../transaction/Transaction.cjs"));

var _long = _interopRequireDefault(require("long"));

var hex = _interopRequireWildcard(require("../encoding/hex.cjs"));

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
 * @typedef {import("@hashgraph/proto").ITokenMintTransactionBody} proto.ITokenMintTransactionBody
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */

/**
 * Mint a new Hedera™ crypto-currency token.
 */
class TokenMintTransaction extends _Transaction.default {
  /**
   * @param {object} [props]
   * @param {TokenId | string} [props.tokenId]
   * @param {Long | number} [props.amount]
   * @param {Uint8Array[]} [props.metadata]
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
     * @type {Uint8Array[]}
     */

    this._metadata = [];

    if (props.tokenId != null) {
      this.setTokenId(props.tokenId);
    }

    if (props.amount != null) {
      this.setAmount(props.amount);
    }

    if (props.metadata != null) {
      this.setMetadata(props.metadata);
    }
  }
  /**
   * @internal
   * @param {proto.ITransaction[]} transactions
   * @param {proto.ISignedTransaction[]} signedTransactions
   * @param {TransactionId[]} transactionIds
   * @param {AccountId[]} nodeIds
   * @param {proto.ITransactionBody[]} bodies
   * @returns {TokenMintTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const mintToken =
    /** @type {proto.ITokenMintTransactionBody} */
    body.tokenMint;
    return _Transaction.default._fromProtobufTransactions(new TokenMintTransaction({
      tokenId: mintToken.token != null ? _TokenId.default._fromProtobuf(mintToken.token) : undefined,
      amount: mintToken.amount != null ? mintToken.amount : undefined,
      metadata: mintToken.metadata != null ? mintToken.metadata : undefined
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
   * @returns {Uint8Array[]}
   */


  get metadata() {
    return this._metadata;
  }
  /**
   * @param {Uint8Array | string} metadata
   * @returns {this}
   */


  addMetadata(metadata) {
    this._requireNotFrozen();

    if (typeof metadata === "string") {
      console.warn("Passing a `string` for token metadata is considered a bug, and has been removed. Please provide a `Uint8Array` instead.");
    }

    this._metadata.push(typeof metadata === "string" ? hex.decode(metadata) : metadata);

    return this;
  }
  /**
   * @param {Uint8Array[]} metadata
   * @returns {this}
   */


  setMetadata(metadata) {
    this._requireNotFrozen();

    for (const data of metadata) {
      if (typeof data === "string") {
        console.warn("Passing a `string` for token metadata is considered a bug, and has been removed. Please provide a `Uint8Array` instead.");
        break;
      }
    }

    this._metadata = metadata.map(data => typeof data === "string" ? hex.decode(data) : data);
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
    return channel.token.mintToken(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "tokenMint";
  }
  /**
   * @override
   * @protected
   * @returns {proto.ITokenMintTransactionBody}
   */


  _makeTransactionData() {
    return {
      amount: this._amount,
      token: this._tokenId != null ? this._tokenId._toProtobuf() : null,
      metadata: this._metadata
    };
  }

}

exports.default = TokenMintTransaction;

_Transaction.TRANSACTION_REGISTRY.set("tokenMint", // eslint-disable-next-line @typescript-eslint/unbound-method
TokenMintTransaction._fromProtobuf);