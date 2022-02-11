"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Transaction = _interopRequireWildcard(require("../transaction/Transaction.cjs"));

var _AccountId = _interopRequireDefault(require("./AccountId.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").ICryptoDeleteLiveHashTransactionBody} proto.ICryptoDeleteLiveHashTransactionBody
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
class LiveHashDeleteTransaction extends _Transaction.default {
  /**
   * @param {object} [props]
   * @param {Uint8Array} [props.hash]
   * @param {AccountId | string} [props.accountId]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?Uint8Array}
     */

    this._hash = null;
    /**
     * @private
     * @type {?AccountId}
     */

    this._accountId = null;

    if (props.hash != null) {
      this.setHash(props.hash);
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
   * @returns {LiveHashDeleteTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const hashes =
    /** @type {proto.ICryptoDeleteLiveHashTransactionBody} */
    body.cryptoDeleteLiveHash;
    return _Transaction.default._fromProtobufTransactions(new LiveHashDeleteTransaction({
      hash: hashes.liveHashToDelete != null ? hashes.liveHashToDelete : undefined,
      accountId: hashes.accountOfLiveHash != null ? _AccountId.default._fromProtobuf(hashes.accountOfLiveHash) : undefined
    }), transactions, signedTransactions, transactionIds, nodeIds, bodies);
  }
  /**
   * @returns {?Uint8Array}
   */


  get hash() {
    return this._hash;
  }
  /**
   * @param {Uint8Array} hash
   * @returns {LiveHashDeleteTransaction}
   */


  setHash(hash) {
    this._requireNotFrozen();

    this._hash = hash;
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
   * @returns {LiveHashDeleteTransaction}
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
  }
  /**
   * @override
   * @internal
   * @param {Channel} channel
   * @param {proto.ITransaction} request
   * @returns {Promise<proto.ITransactionResponse>}
   */


  _execute(channel, request) {
    return channel.crypto.deleteLiveHash(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "cryptoDeleteLiveHash";
  }
  /**
   * @override
   * @protected
   * @returns {proto.ICryptoDeleteLiveHashTransactionBody}
   */


  _makeTransactionData() {
    return {
      liveHashToDelete: this._hash,
      accountOfLiveHash: this._accountId != null ? this._accountId._toProtobuf() : null
    };
  }

}

exports.default = LiveHashDeleteTransaction;

_Transaction.TRANSACTION_REGISTRY.set("cryptoDeleteLiveHash", // eslint-disable-next-line @typescript-eslint/unbound-method
LiveHashDeleteTransaction._fromProtobuf);