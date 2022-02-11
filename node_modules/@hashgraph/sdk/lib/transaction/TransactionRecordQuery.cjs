"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireWildcard(require("../query/Query.cjs"));

var _TransactionRecord = _interopRequireDefault(require("./TransactionRecord.cjs"));

var _TransactionReceipt = _interopRequireDefault(require("./TransactionReceipt.cjs"));

var _TransactionId = _interopRequireDefault(require("./TransactionId.cjs"));

var _Status = _interopRequireDefault(require("../Status.cjs"));

var _PrecheckStatusError = _interopRequireDefault(require("../PrecheckStatusError.cjs"));

var _ReceiptStatusError = _interopRequireDefault(require("../ReceiptStatusError.cjs"));

var _Executable = require("../Executable.cjs");

var _proto = require("@hashgraph/proto");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").ITransactionRecord} proto.ITransactionRecord
 * @typedef {import("@hashgraph/proto").ITransactionReceipt} proto.ITransactionReceipt
 * @typedef {import("@hashgraph/proto").ITransactionGetRecordResponse} proto.ITransactionGetRecordResponse
 * @typedef {import("@hashgraph/proto").ITransactionGetRecordQuery} proto.ITransactionGetRecordQuery
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").ResponseCodeEnum} proto.ResponseCodeEnum
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 */

/**
 * @augments {Query<TransactionRecord>}
 */
class TransactionRecordQuery extends _Query.default {
  /**
   * @param {object} [props]
   * @param {TransactionId} [props.transactionId]
   * @param {boolean} [props.includeChildren]
   * @param {boolean} [props.includeDuplicates]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?TransactionId}
     */

    this._transactionId = null;
    /**
     * @private
     * @type {?boolean}
     */

    this._includeChildren = null;
    /**
     * @private
     * @type {?boolean}
     */

    this._includeDuplicates = null;

    if (props.transactionId != null) {
      this.setTransactionId(props.transactionId);
    }

    if (props.includeChildren != null) {
      this.setIncludeChildren(props.includeChildren);
    }

    if (props.includeDuplicates != null) {
      this.setIncludeDuplicates(props.includeDuplicates);
    }
  }
  /**
   * @returns {?TransactionId}
   */


  get transactionId() {
    return this._transactionId;
  }
  /**
   * @internal
   * @param {proto.IQuery} query
   * @returns {TransactionRecordQuery}
   */


  static _fromProtobuf(query) {
    const record =
    /** @type {proto.ITransactionGetRecordQuery} */
    query.transactionGetRecord;
    return new TransactionRecordQuery({
      transactionId: record.transactionID ? _TransactionId.default._fromProtobuf(record.transactionID) : undefined,
      includeChildren: record.includeChildRecords != null ? record.includeChildRecords : undefined,
      includeDuplicates: record.includeDuplicates != null ? record.includeDuplicates : undefined
    });
  }
  /**
   * Set the transaction ID for which the record is being requested.
   *
   * @param {TransactionId | string} transactionId
   * @returns {TransactionRecordQuery}
   */


  setTransactionId(transactionId) {
    this._transactionId = typeof transactionId === "string" ? _TransactionId.default.fromString(transactionId) : transactionId.clone();
    return this;
  }
  /**
   * @param {boolean} includeChildren
   * @returns {TransactionRecordQuery}
   */


  setIncludeChildren(includeChildren) {
    this._includeChildren = includeChildren;
    return this;
  }
  /**
   * @returns {boolean}
   */


  get includeChildren() {
    return this._includeChildren != null ? this._includeChildren : false;
  }
  /**
   * @param {boolean} includeDuplicates
   * @returns {TransactionRecordQuery}
   */


  setIncludeDuplicates(includeDuplicates) {
    this._duplicates = includeDuplicates;
    return this;
  }
  /**
   * @returns {boolean}
   */


  get includeDuplicates() {
    return this._duplicates != null ? this._duplicates : false;
  }
  /**
   * @override
   * @internal
   * @param {proto.IQuery} request
   * @param {proto.IResponse} response
   * @returns {ExecutionState}
   */


  _shouldRetry(request, response) {
    const {
      nodeTransactionPrecheckCode
    } = this._mapResponseHeader(response);

    let status = _Status.default._fromCode(nodeTransactionPrecheckCode != null ? nodeTransactionPrecheckCode : _proto.ResponseCodeEnum.OK);

    switch (status) {
      case _Status.default.Busy:
      case _Status.default.Unknown:
      case _Status.default.ReceiptNotFound:
      case _Status.default.RecordNotFound:
        return _Executable.ExecutionState.Retry;

      case _Status.default.Ok:
        break;

      default:
        return _Executable.ExecutionState.Error;
    }

    const transactionGetRecord =
    /** @type {proto.ITransactionGetRecordResponse} */
    response.transactionGetRecord;
    const header =
    /** @type {proto.IResponseHeader} */
    transactionGetRecord.header;

    if (header.responseType === _proto.ResponseType.COST_ANSWER) {
      return _Executable.ExecutionState.Finished;
    }

    const record =
    /** @type {proto.ITransactionRecord} */
    transactionGetRecord.transactionRecord;
    const receipt =
    /** @type {proto.ITransactionReceipt} */
    record.receipt;
    const receiptStatusCode =
    /** @type {proto.ResponseCodeEnum} */
    receipt.status;
    status = _Status.default._fromCode(receiptStatusCode);

    switch (status) {
      case _Status.default.Ok:
      case _Status.default.Busy:
      case _Status.default.Unknown:
      case _Status.default.ReceiptNotFound:
      case _Status.default.RecordNotFound:
        return _Executable.ExecutionState.Retry;

      case _Status.default.Success:
        return _Executable.ExecutionState.Finished;

      default:
        return _Executable.ExecutionState.Error;
    }
  }
  /**
   * @override
   * @internal
   * @param {proto.IQuery} request
   * @param {proto.IResponse} response
   * @returns {Error}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  _mapStatusError(request, response) {
    const {
      nodeTransactionPrecheckCode
    } = this._mapResponseHeader(response);

    let status = _Status.default._fromCode(nodeTransactionPrecheckCode != null ? nodeTransactionPrecheckCode : _proto.ResponseCodeEnum.OK);

    switch (status) {
      case _Status.default.Ok:
        // Do nothing
        break;

      default:
        return new _PrecheckStatusError.default({
          status,
          transactionId: this._getTransactionId()
        });
    }

    const transactionGetRecord =
    /** @type {proto.ITransactionGetRecordResponse} */
    response.transactionGetRecord;
    const record =
    /** @type {proto.ITransactionRecord} */
    transactionGetRecord.transactionRecord;
    const receipt =
    /** @type {proto.ITransactionReceipt} */
    record.receipt;
    const receiptStatusError =
    /** @type {proto.ResponseCodeEnum} */
    receipt.status;
    status = _Status.default._fromCode(receiptStatusError);
    return new _ReceiptStatusError.default({
      status,
      transactionId: this._getTransactionId(),
      transactionReceipt: _TransactionReceipt.default._fromProtobuf({
        receipt
      })
    });
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._transactionId != null && this._transactionId.accountId != null) {
      this._transactionId.accountId.validateChecksum(client);
    }
  }
  /**
   * @override
   * @internal
   * @param {Channel} channel
   * @param {proto.IQuery} request
   * @returns {Promise<proto.IResponse>}
   */


  _execute(channel, request) {
    return channel.crypto.getTxRecordByTxID(request);
  }
  /**
   * @override
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @returns {proto.IResponseHeader}
   */


  _mapResponseHeader(response) {
    const transactionGetRecord =
    /** @type {proto.ITransactionGetRecordResponse} */
    response.transactionGetRecord;
    return (
      /** @type {proto.IResponseHeader} */
      transactionGetRecord.header
    );
  }
  /**
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @param {AccountId} nodeAccountId
   * @param {proto.IQuery} request
   * @returns {Promise<TransactionRecord>}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  _mapResponse(response, nodeAccountId, request) {
    const record =
    /** @type {proto.ITransactionGetRecordResponse} */
    response.transactionGetRecord;
    return Promise.resolve(_TransactionRecord.default._fromProtobuf(record));
  }
  /**
   * @override
   * @internal
   * @param {proto.IQueryHeader} header
   * @returns {proto.IQuery}
   */


  _onMakeRequest(header) {
    return {
      transactionGetRecord: {
        header,
        transactionID: this._transactionId != null ? this._transactionId._toProtobuf() : null,
        includeChildRecords: this._includeChildren,
        includeDuplicates: this._includeDuplicates
      }
    };
  }

}

exports.default = TransactionRecordQuery;

_Query.QUERY_REGISTRY.set("transactionGetRecord", // eslint-disable-next-line @typescript-eslint/unbound-method
TransactionRecordQuery._fromProtobuf);