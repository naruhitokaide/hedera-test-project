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
export default class ScheduleInfo {
    /**
     * @internal
     * @param {proto.IScheduleInfo} info
     * @returns {ScheduleInfo}
     */
    static _fromProtobuf(info: proto.IScheduleInfo): ScheduleInfo;
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
    private constructor();
    /**
     *
     * @readonly
     */
    readonly scheduleId: ScheduleId;
    /**
     *
     * @readonly
     */
    readonly creatorAccountId: AccountId | null;
    /**
     *
     * @readonly
     */
    readonly payerAccountId: AccountId | null;
    /**
     *
     * @readonly
     */
    readonly schedulableTransactionBody: import("@hashgraph/proto/lib/proto").proto.ISchedulableTransactionBody | null;
    /**
     *
     * @readonly
     */
    readonly signers: KeyList | null;
    /**
     *
     * @readonly
     */
    readonly scheduleMemo: string | null;
    /**
     *
     * @readonly
     */
    readonly adminKey: Key | null;
    /**
     *
     * @readonly
     */
    readonly expirationTime: Timestamp | null;
    /**
     *
     * @readonly
     */
    readonly executed: Timestamp | null;
    /**
     *
     * @readonly
     */
    readonly deleted: Timestamp | null;
    scheduledTransactionId: TransactionId | null;
    /**
     * @returns {proto.IScheduleInfo}
     */
    _toProtobuf(): proto.IScheduleInfo;
    /**
     * @returns {Transaction}
     */
    get scheduledTransaction(): Transaction;
}
export namespace proto {
    type IScheduleInfo = import("@hashgraph/proto").IScheduleInfo;
    type IScheduleID = import("@hashgraph/proto").IScheduleID;
    type ITimestamp = import("@hashgraph/proto").ITimestamp;
    type IAccountID = import("@hashgraph/proto").IAccountID;
    type IScheduledID = import("@hashgraph/proto").IScheduleID;
    type IFileID = import("@hashgraph/proto").IFileID;
    type IContractID = import("@hashgraph/proto").IContractID;
    type ITokenID = import("@hashgraph/proto").ITokenID;
    type IKey = import("@hashgraph/proto").IKey;
    type IDuration = import("@hashgraph/proto").IDuration;
    type ISchedulableTransactionBody = import("@hashgraph/proto").ISchedulableTransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
}
import ScheduleId from "./ScheduleId.js";
import AccountId from "../account/AccountId.js";
import KeyList from "../KeyList.js";
import Key from "../Key.js";
import Timestamp from "../Timestamp.js";
import TransactionId from "../transaction/TransactionId.js";
import Transaction from "../transaction/Transaction.js";
