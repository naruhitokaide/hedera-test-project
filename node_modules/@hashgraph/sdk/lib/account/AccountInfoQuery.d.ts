/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").IAccountInfo} proto.IAccountInfo
 * @typedef {import("@hashgraph/proto").ICryptoGetInfoQuery} proto.ICryptoGetInfoQuery
 * @typedef {import("@hashgraph/proto").ICryptoGetInfoResponse} proto.ICryptoGetInfoResponse
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 */
/**
 * @augments {Query<AccountInfo>}
 */
export default class AccountInfoQuery extends Query<AccountInfo> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {AccountInfoQuery}
     */
    static _fromProtobuf(query: proto.IQuery): AccountInfoQuery;
    /**
     * @param {object} props
     * @param {AccountId | string} [props.accountId]
     */
    constructor(props?: {
        accountId?: string | AccountId | undefined;
    });
    /**
     * @private
     * @type {?AccountId}
     */
    private _accountId;
    /**
     * @returns {?AccountId}
     */
    get accountId(): AccountId | null;
    /**
     * Set the account ID for which the info is being requested.
     *
     * @param {AccountId | string} accountId
     * @returns {AccountInfoQuery}
     */
    setAccountId(accountId: AccountId | string): AccountInfoQuery;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type IAccountInfo = import("@hashgraph/proto").IAccountInfo;
    type ICryptoGetInfoQuery = import("@hashgraph/proto").ICryptoGetInfoQuery;
    type ICryptoGetInfoResponse = import("@hashgraph/proto").ICryptoGetInfoResponse;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
import AccountInfo from "./AccountInfo.js";
import Query from "../query/Query.js";
import AccountId from "./AccountId.js";
