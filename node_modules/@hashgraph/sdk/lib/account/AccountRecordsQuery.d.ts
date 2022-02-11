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
export default class AccountRecordsQuery extends Query<TransactionRecord[]> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {AccountRecordsQuery}
     */
    static _fromProtobuf(query: proto.IQuery): AccountRecordsQuery;
    /**
     * @param {object} [props]
     * @param {AccountId | string} [props.accountId]
     */
    constructor(props?: {
        accountId?: string | AccountId | undefined;
    } | undefined);
    /**
     * @type {?AccountId}
     * @private
     */
    private _accountId;
    /**
     * @returns {?AccountId}
     */
    get accountId(): AccountId | null;
    /**
     * Set the account ID for which the records are being requested.
     *
     * @param {AccountId | string} accountId
     * @returns {this}
     */
    setAccountId(accountId: AccountId | string): this;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type ICryptoGetAccountRecordsQuery = import("@hashgraph/proto").ICryptoGetAccountRecordsQuery;
    type ICryptoGetAccountRecordsResponse = import("@hashgraph/proto").ICryptoGetAccountRecordsResponse;
    type ITransactionRecord = import("@hashgraph/proto").ITransactionRecord;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
import TransactionRecord from "../transaction/TransactionRecord.js";
import Query from "../query/Query.js";
import AccountId from "./AccountId.js";
