"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Transaction = _interopRequireWildcard(require("../transaction/Transaction.cjs"));

var _FileId = _interopRequireDefault(require("./FileId.cjs"));

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
 * @typedef {import("@hashgraph/proto").IFileDeleteTransactionBody} proto.IFileDeleteTransactionBody
 */

/**
 * @typedef {import("@hashgraph/cryptography").Key} Key
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */

/**
 * A transaction to delete a file on the Hedera network.
 *
 * When deleted, a file's contents are truncated to zero length and it can no longer be updated
 * or appended to, or its expiration time extended. FileContentsQuery and FileInfoQuery
 * will throw HederaPreCheckStatusException with a status of Status#FileDeleted.
 *
 * Only one of the file's keys needs to sign to delete the file, unless the key you have is part
 * of a KeyList.
 */
class FileDeleteTransaction extends _Transaction.default {
  /**
   * @param {object} [props]
   * @param {FileId | string} [props.fileId]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?FileId}
     */

    this._fileId = null;

    if (props.fileId != null) {
      this.setFileId(props.fileId);
    }
  }
  /**
   * @internal
   * @param {proto.ITransaction[]} transactions
   * @param {proto.ISignedTransaction[]} signedTransactions
   * @param {TransactionId[]} transactionIds
   * @param {AccountId[]} nodeIds
   * @param {proto.ITransactionBody[]} bodies
   * @returns {FileDeleteTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const fileDelete =
    /** @type {proto.IFileDeleteTransactionBody} */
    body.fileDelete;
    return _Transaction.default._fromProtobufTransactions(new FileDeleteTransaction({
      fileId: fileDelete.fileID != null ? _FileId.default._fromProtobuf(fileDelete.fileID) : undefined
    }), transactions, signedTransactions, transactionIds, nodeIds, bodies);
  }
  /**
   * @returns {?FileId}
   */


  get fileId() {
    return this._fileId;
  }
  /**
   * Set the file ID which is being deleted in this transaction.
   *
   * @param {FileId | string} fileId
   * @returns {FileDeleteTransaction}
   */


  setFileId(fileId) {
    this._requireNotFrozen();

    this._fileId = typeof fileId === "string" ? _FileId.default.fromString(fileId) : fileId.clone();
    return this;
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._fileId != null) {
      this._fileId.validateChecksum(client);
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
    return channel.file.deleteFile(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "fileDelete";
  }
  /**
   * @override
   * @protected
   * @returns {proto.IFileDeleteTransactionBody}
   */


  _makeTransactionData() {
    return {
      fileID: this._fileId != null ? this._fileId._toProtobuf() : null
    };
  }

} // eslint-disable-next-line @typescript-eslint/unbound-method


exports.default = FileDeleteTransaction;

_Transaction.TRANSACTION_REGISTRY.set("fileDelete", FileDeleteTransaction._fromProtobuf);