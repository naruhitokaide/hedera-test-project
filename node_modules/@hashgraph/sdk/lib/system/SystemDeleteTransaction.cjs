"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Transaction = _interopRequireWildcard(require("../transaction/Transaction.cjs"));

var _FileId = _interopRequireDefault(require("../file/FileId.cjs"));

var _ContractId = _interopRequireDefault(require("../contract/ContractId.cjs"));

var _Timestamp = _interopRequireDefault(require("../Timestamp.cjs"));

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
 * @typedef {import("@hashgraph/proto").ISystemDeleteTransactionBody} proto.ISystemDeleteTransactionBody
 * @typedef {import("@hashgraph/proto").IContractID} proto.IContractID
 * @typedef {import("@hashgraph/proto").IFileID} proto.IFileID
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
class SystemDeleteTransaction extends _Transaction.default {
  /**
   * @param {object} [props]
   * @param {FileId | string} [props.fileId]
   * @param {ContractId | string} [props.contractId]
   * @param {Timestamp} [props.expirationTime]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?FileId}
     */

    this._fileId = null;
    /**
     * @private
     * @type {?ContractId}
     */

    this._contractId = null;
    /**
     * @private
     * @type {?Timestamp}
     */

    this._expirationTime = null;

    if (props.fileId != null) {
      this.setFileId(props.fileId);
    }

    if (props.contractId != null) {
      this.setContractId(props.contractId);
    }

    if (props.expirationTime != null) {
      this.setExpirationTime(props.expirationTime);
    }
  }
  /**
   * @internal
   * @param {proto.ITransaction[]} transactions
   * @param {proto.ISignedTransaction[]} signedTransactions
   * @param {TransactionId[]} transactionIds
   * @param {AccountId[]} nodeIds
   * @param {proto.ITransactionBody[]} bodies
   * @returns {SystemDeleteTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const systemDelete =
    /** @type {proto.ISystemDeleteTransactionBody} */
    body.systemDelete;
    return _Transaction.default._fromProtobufTransactions(new SystemDeleteTransaction({
      fileId: systemDelete.fileID != null ? _FileId.default._fromProtobuf(
      /** @type {proto.IFileID} */
      systemDelete.fileID) : undefined,
      contractId: systemDelete.contractID != null ? _ContractId.default._fromProtobuf(
      /** @type {proto.IContractID} */
      systemDelete.contractID) : undefined,
      expirationTime: systemDelete.expirationTime != null ? _Timestamp.default._fromProtobuf(systemDelete.expirationTime) : undefined
    }), transactions, signedTransactions, transactionIds, nodeIds, bodies);
  }
  /**
   * @returns {?FileId}
   */


  get fileId() {
    return this._fileId;
  }
  /**
   * @param {FileId | string} fileId
   * @returns {this}
   */


  setFileId(fileId) {
    this._requireNotFrozen();

    this._fileId = fileId instanceof _FileId.default ? fileId : _FileId.default.fromString(fileId);
    return this;
  }
  /**
   * @returns {?ContractId}
   */


  get contractId() {
    return this._contractId;
  }
  /**
   * @param {ContractId | string} contractId
   * @returns {this}
   */


  setContractId(contractId) {
    this._requireNotFrozen();

    this._contractId = contractId instanceof _ContractId.default ? contractId : _ContractId.default.fromString(contractId);
    return this;
  }
  /**
   * @returns {?Timestamp}
   */


  get expirationTime() {
    return this._expirationTime;
  }
  /**
   * @param {Timestamp} expirationTime
   * @returns {SystemDeleteTransaction}
   */


  setExpirationTime(expirationTime) {
    this._requireNotFrozen();

    this._expirationTime = expirationTime;
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
    if (this._fileId != null) {
      return channel.file.systemDelete(request);
    } else {
      return channel.smartContract.systemDelete(request);
    }
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "systemDelete";
  }
  /**
   * @override
   * @protected
   * @returns {proto.ISystemDeleteTransactionBody}
   */


  _makeTransactionData() {
    return {
      fileID: this._fileId != null ? this._fileId._toProtobuf() : null,
      contractID: this._contractId != null ? this._contractId._toProtobuf() : null,
      expirationTime: this._expirationTime != null ? this._expirationTime._toProtobuf() : null
    };
  }

} // eslint-disable-next-line @typescript-eslint/unbound-method


exports.default = SystemDeleteTransaction;

_Transaction.TRANSACTION_REGISTRY.set("systemDelete", SystemDeleteTransaction._fromProtobuf);