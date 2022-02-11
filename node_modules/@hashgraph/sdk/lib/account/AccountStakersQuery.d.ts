/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").ICryptoGetStakersQuery} proto.ICryptoGetStakersQuery
 * @typedef {import("@hashgraph/proto").ICryptoGetStakersResponse} proto.ICryptoGetStakersResponse
 * @typedef {import("@hashgraph/proto").IAllProxyStakers} proto.IAllProxyStakers
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 */
/**
 * Get all the accounts that are proxy staking to this account.
 * For each of them, give the amount currently staked.
 *
 * This is not yet implemented, but will be in a future version of the API.
 *
 * @augments {Query<ProxyStaker[]>}
 */
export default class AccountStakersQuery extends Query<ProxyStaker[]> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {AccountStakersQuery}
     */
    static _fromProtobuf(query: proto.IQuery): AccountStakersQuery;
    /**
     * @param {object} [props]
     * @param {(AccountId | string)=} props.accountId
     */
    constructor(props?: {
        accountId?: (AccountId | string) | undefined;
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
     * Set the account ID for which the stakers are being requested.
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
    type ICryptoGetStakersQuery = import("@hashgraph/proto").ICryptoGetStakersQuery;
    type ICryptoGetStakersResponse = import("@hashgraph/proto").ICryptoGetStakersResponse;
    type IAllProxyStakers = import("@hashgraph/proto").IAllProxyStakers;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
import ProxyStaker from "./ProxyStaker.js";
import Query from "../query/Query.js";
import AccountId from "./AccountId.js";
