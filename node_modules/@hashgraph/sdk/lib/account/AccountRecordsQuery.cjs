"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireWildcard(require("../query/Query.cjs"));

var _AccountId = _interopRequireDefault(require("./AccountId.cjs"));

var _TransactionRecord = _interopRequireDefault(require("../transaction/TransactionRecord.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").ICryptoGetAccountRecordsQuery} proto.ICryptoGetAccountRecordsQuery
 * @typedef {import("@hashgraph/proto").ICryptoGetAccountRecordsResponse} proto.ICryptoGetAccountRecordsResponse
 * @typedef {import("@hashgraph/proto").ITransactionRecord} proto.ITransactionRecord
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 */

/**
 * Get all the records for an account for any transfers into it and out of it,
 * that were above the threshold, during the last 25 hours.
 *
 * @augments {Query<TransactionRecord[]>}
 */
class AccountRecordsQuery extends _Query.default {
  /**
   * @param {object} [props]
   * @param {AccountId | string} [props.accountId]
   */
  constructor(props = {}) {
    super();
    /**
     * @type {?AccountId}
     * @private
     */

    this._accountId = null;

    if (props.accountId != null) {
      this.setAccountId(props.accountId);
    }
  }
  /**
   * @internal
   * @param {proto.IQuery} query
   * @returns {AccountRecordsQuery}
   */


  static _fromProtobuf(query) {
    const records =
    /** @type {proto.ICryptoGetAccountRecordsQuery} */
    query.cryptoGetAccountRecords;
    return new AccountRecordsQuery({
      accountId: records.accountID != null ? _AccountId.default._fromProtobuf(records.accountID) : undefined
    });
  }
  /**
   * @returns {?AccountId}
   */


  get accountId() {
    return this._accountId;
  }
  /**
   * Set the account ID for which the records are being requested.
   *
   * @param {AccountId | string} accountId
   * @returns {this}
   */


  setAccountId(accountId) {
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
   * @param {proto.IQuery} request
   * @returns {Promise<proto.IResponse>}
   */


  _execute(channel, request) {
    return channel.crypto.getAccountRecords(request);
  }
  /**
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @returns {proto.IResponseHeader}
   */


  _mapResponseHeader(response) {
    const cryptoGetAccountRecords =
    /** @type {proto.ICryptoGetAccountRecordsResponse} */
    response.cryptoGetAccountRecords;
    return (
      /** @type {proto.IResponseHeader} */
      cryptoGetAccountRecords.header
    );
  }
  /**
   * @protected
   * @override
   * @param {proto.IResponse} response
   * @param {AccountId} nodeAccountId
   * @param {proto.IQuery} request
   * @returns {Promise<TransactionRecord[]>}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  _mapResponse(response, nodeAccountId, request) {
    const cryptoGetAccountRecords =
    /** @type {proto.ICryptoGetAccountRecordsResponse} */
    response.cryptoGetAccountRecords;
    const records =
    /** @type {proto.ITransactionRecord[]} */
    cryptoGetAccountRecords.records;
    return Promise.resolve(records.map(record => _TransactionRecord.default._fromProtobuf({
      transactionRecord: record
    })));
  }
  /**
   * @override
   * @internal
   * @param {proto.IQueryHeader} header
   * @returns {proto.IQuery}
   */


  _onMakeRequest(header) {
    return {
      cryptoGetAccountRecords: {
        header,
        accountID: this._accountId != null ? this._accountId._toProtobuf() : null
      }
    };
  }

}

exports.default = AccountRecordsQuery;

_Query.QUERY_REGISTRY.set("cryptoGetAccountRecords", // eslint-disable-next-line @typescript-eslint/unbound-method
AccountRecordsQuery._fromProtobuf);