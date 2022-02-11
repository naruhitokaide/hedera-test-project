/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").ITransactionReceipt} proto.ITransactionReceipt
 * @typedef {import("@hashgraph/proto").ITransactionGetReceiptQuery} proto.ITransactionGetReceiptQuery
 * @typedef {import("@hashgraph/proto").ITransactionGetReceiptResponse} proto.ITransactionGetReceiptResponse
 * @typedef {import("@hashgraph/proto").ResponseCodeEnum} proto.ResponseCodeEnum
 */
/**
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 */
/**
 * @augments {Query<TransactionReceipt>}
 */
export default class TransactionReceiptQuery extends Query<TransactionReceipt> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {TransactionReceiptQuery}
     */
    static _fromProtobuf(query: proto.IQuery): TransactionReceiptQuery;
    /**
     * @param {object} [props]
     * @param {TransactionId | string} [props.transactionId]
     * @param {boolean} [props.includeDuplicates]
     * @param {boolean} [props.includeChildren]
     */
    constructor(props?: {
        transactionId?: string | TransactionId | undefined;
        includeDuplicates?: boolean | undefined;
        includeChildren?: boolean | undefined;
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
     * Set the transaction ID for which the receipt is being requested.
     *
     * @param {TransactionId | string} transactionId
     * @returns {this}
     */
    setTransactionId(transactionId: TransactionId | string): this;
    /**
     * @param {boolean} includeDuplicates
     * @returns {TransactionReceiptQuery}
     */
    setIncludeDuplicates(includeDuplicates: boolean): TransactionReceiptQuery;
    /**
     * @returns {boolean}
     */
    get includeDuplicates(): boolean;
    /**
     * @param {boolean} includeChildren
     * @returns {TransactionReceiptQuery}
     */
    setIncludeChildren(includeChildren: boolean): TransactionReceiptQuery;
    /**
     * @returns {boolean}
     */
    get includeChildren(): boolean;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type ITransactionReceipt = import("@hashgraph/proto").ITransactionReceipt;
    type ITransactionGetReceiptQuery = import("@hashgraph/proto").ITransactionGetReceiptQuery;
    type ITransactionGetReceiptResponse = import("@hashgraph/proto").ITransactionGetReceiptResponse;
    type ResponseCodeEnum = import("@hashgraph/proto").ResponseCodeEnum;
}
export type AccountId = import("../account/AccountId.js").default;
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
import TransactionReceipt from "./TransactionReceipt.js";
import Query from "../query/Query.js";
import TransactionId from "./TransactionId.js";
