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
export default class TransactionRecordQuery extends Query<TransactionRecord> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {TransactionRecordQuery}
     */
    static _fromProtobuf(query: proto.IQuery): TransactionRecordQuery;
    /**
     * @param {object} [props]
     * @param {TransactionId} [props.transactionId]
     * @param {boolean} [props.includeChildren]
     * @param {boolean} [props.includeDuplicates]
     */
    constructor(props?: {
        transactionId?: TransactionId | undefined;
        includeChildren?: boolean | undefined;
        includeDuplicates?: boolean | undefined;
    } | undefined);
    /**
     * @private
     * @type {?TransactionId}
     */
    private _transactionId;
    /**
     * @private
     * @type {?boolean}
     */
    private _includeChildren;
    /**
     * @private
     * @type {?boolean}
     */
    private _includeDuplicates;
    /**
     * @returns {?TransactionId}
     */
    get transactionId(): TransactionId | null;
    /**
     * Set the transaction ID for which the record is being requested.
     *
     * @param {TransactionId | string} transactionId
     * @returns {TransactionRecordQuery}
     */
    setTransactionId(transactionId: TransactionId | string): TransactionRecordQuery;
    /**
     * @param {boolean} includeChildren
     * @returns {TransactionRecordQuery}
     */
    setIncludeChildren(includeChildren: boolean): TransactionRecordQuery;
    /**
     * @returns {boolean}
     */
    get includeChildren(): boolean;
    /**
     * @param {boolean} includeDuplicates
     * @returns {TransactionRecordQuery}
     */
    setIncludeDuplicates(includeDuplicates: boolean): TransactionRecordQuery;
    _duplicates: boolean | undefined;
    /**
     * @returns {boolean}
     */
    get includeDuplicates(): boolean;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type ITransactionRecord = import("@hashgraph/proto").ITransactionRecord;
    type ITransactionReceipt = import("@hashgraph/proto").ITransactionReceipt;
    type ITransactionGetRecordResponse = import("@hashgraph/proto").ITransactionGetRecordResponse;
    type ITransactionGetRecordQuery = import("@hashgraph/proto").ITransactionGetRecordQuery;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type ResponseCodeEnum = import("@hashgraph/proto").ResponseCodeEnum;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
import TransactionRecord from "./TransactionRecord.js";
import Query from "../query/Query.js";
import TransactionId from "./TransactionId.js";
