"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ScheduleId = _interopRequireDefault(require("./ScheduleId.cjs"));

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

var _Timestamp = _interopRequireDefault(require("../Timestamp.cjs"));

var _Transaction = _interopRequireDefault(require("../transaction/Transaction.cjs"));

var _proto = require("@hashgraph/proto");

var _TransactionId = _interopRequireDefault(require("../transaction/TransactionId.cjs"));

var _Key = _interopRequireDefault(require("../Key.cjs"));

var _KeyList = _interopRequireDefault(require("../KeyList.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IScheduleInfo} proto.IScheduleInfo
 * @typedef {import("@hashgraph/proto").IScheduleID} proto.IScheduleID
 * @typedef {import("@hashgraph/proto").ITimestamp} proto.ITimestamp
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 * @typedef {import("@hashgraph/proto").IScheduleID} proto.IScheduledID
 * @typedef {import("@hashgraph/proto").IFileID} proto.IFileID
 * @typedef {import("@hashgraph/proto").IContractID} proto.IContractID
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 * @typedef {import("@hashgraph/proto").IKey} proto.IKey
 * @typedef {import("@hashgraph/proto").IDuration} proto.IDuration
 * @typedef {import("@hashgraph/proto").ISchedulableTransactionBody} proto.ISchedulableTransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 */

/**
 * Response when the client sends the node ScheduleGetInfoQuery.
 */
class ScheduleInfo {
  /**
   * @private
   * @param {object} props
   * @param {ScheduleId} props.scheduleId;
   * @param {?AccountId} props.creatorAccountID;
   * @param {?AccountId} props.payerAccountID;
   * @param {?proto.ISchedulableTransactionBody} props.schedulableTransactionBody;
   * @param {?Key} props.adminKey
   * @param {?KeyList} props.signers;
   * @param {?string} props.scheduleMemo;
   * @param {?Timestamp} props.expirationTime;
   * @param {?Timestamp} props.executed;
   * @param {?Timestamp} props.deleted;
   * @param {?TransactionId} props.scheduledTransactionId;
   */
  constructor(props) {
    /**
     *
     * @readonly
     */
    this.scheduleId = props.scheduleId;
    /**
     *
     * @readonly
     */

    this.creatorAccountId = props.creatorAccountID;
    /**
     *
     * @readonly
     */

    this.payerAccountId = props.payerAccountID;
    /**
     *
     * @readonly
     */

    this.schedulableTransactionBody = props.schedulableTransactionBody;
    /**
     *
     * @readonly
     */

    this.signers = props.signers;
    /**
     *
     * @readonly
     */

    this.scheduleMemo = props.scheduleMemo;
    /**
     *
     * @readonly
     */

    this.adminKey = props.adminKey != null ? props.adminKey : null;
    /**
     *
     * @readonly
     */

    this.expirationTime = props.expirationTime;
    /**
     *
     * @readonly
     */

    this.executed = props.executed;
    /**
     *
     * @readonly
     */

    this.deleted = props.deleted;
    this.scheduledTransactionId = props.scheduledTransactionId;
    Object.freeze(this);
  }
  /**
   * @internal
   * @param {proto.IScheduleInfo} info
   * @returns {ScheduleInfo}
   */


  static _fromProtobuf(info) {
    return new ScheduleInfo({
      scheduleId: _ScheduleId.default._fromProtobuf(
      /** @type {proto.IScheduleID} */
      info.scheduleID),
      creatorAccountID: info.creatorAccountID != null ? _AccountId.default._fromProtobuf(
      /** @type {proto.IAccountID} */
      info.creatorAccountID) : null,
      payerAccountID: info.payerAccountID != null ? _AccountId.default._fromProtobuf(
      /** @type {proto.IAccountID} */
      info.payerAccountID) : null,
      schedulableTransactionBody: info.scheduledTransactionBody != null ? info.scheduledTransactionBody : null,
      adminKey: info.adminKey != null ? _Key.default._fromProtobufKey(info.adminKey) : null,
      signers: info.signers != null ? _KeyList.default.__fromProtobufKeyList(info.signers) : null,
      scheduleMemo: info.memo != null ? info.memo : null,
      expirationTime: info.expirationTime != null ? _Timestamp.default._fromProtobuf(
      /** @type {proto.ITimestamp} */
      info.expirationTime) : null,
      executed: info.executionTime != null ? _Timestamp.default._fromProtobuf(
      /** @type {proto.ITimestamp} */
      info.executionTime) : null,
      deleted: info.deletionTime != null ? _Timestamp.default._fromProtobuf(
      /** @type {proto.ITimestamp} */
      info.deletionTime) : null,
      scheduledTransactionId: info.scheduledTransactionID != null ? _TransactionId.default._fromProtobuf(info.scheduledTransactionID) : null
    });
  }
  /**
   * @returns {proto.IScheduleInfo}
   */


  _toProtobuf() {
    return {
      scheduleID: this.scheduleId != null ? this.scheduleId._toProtobuf() : null,
      creatorAccountID: this.creatorAccountId != null ? this.creatorAccountId._toProtobuf() : null,
      payerAccountID: this.payerAccountId != null ? this.payerAccountId._toProtobuf() : null,
      scheduledTransactionBody: this.schedulableTransactionBody != null ? this.schedulableTransactionBody : null,
      adminKey: this.adminKey != null ? this.adminKey._toProtobufKey() : null,
      signers: this.signers != null ? this.signers._toProtobufKey().keyList : null,
      memo: this.scheduleMemo != null ? this.scheduleMemo : "",
      expirationTime: this.expirationTime != null ? this.expirationTime._toProtobuf() : null,
      scheduledTransactionID: this.scheduledTransactionId != null ? this.scheduledTransactionId._toProtobuf() : null
    };
  }
  /**
   * @returns {Transaction}
   */


  get scheduledTransaction() {
    if (this.schedulableTransactionBody == null) {
      throw new Error("Scheduled transaction body is empty");
    }

    const scheduled = new _proto.SchedulableTransactionBody(this.schedulableTransactionBody);
    const data =
    /** @type {NonNullable<ProtoSchedulableTransactionBody["data"]>} */
    scheduled.data;
    return _Transaction.default.fromBytes(_proto.TransactionList.encode({
      transactionList: [{
        signedTransactionBytes: _proto.SignedTransaction.encode({
          bodyBytes: _proto.TransactionBody.encode({
            transactionFee: this.schedulableTransactionBody.transactionFee,
            memo: this.schedulableTransactionBody.memo,
            [data]: scheduled[data]
          }).finish()
        }).finish()
      }]
    }).finish());
  }

}

exports.default = ScheduleInfo;