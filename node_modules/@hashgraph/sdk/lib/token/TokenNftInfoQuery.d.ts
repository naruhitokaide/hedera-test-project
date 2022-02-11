/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").ITokenNftInfo} proto.ITokenNftInfo
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").ITokenGetNftInfoQuery} proto.ITokenGetNftInfoQuery
 * @typedef {import("@hashgraph/proto").ITokenGetNftInfosQuery} proto.ITokenGetNftInfosQuery
 * @typedef {import("@hashgraph/proto").ITokenGetAccountNftInfosQuery} proto.ITokenGetAccountNftInfosQuery
 * @typedef {import("@hashgraph/proto").ITokenGetNftInfoResponse} proto.ITokenGetNftInfoResponse
 * @typedef {import("@hashgraph/proto").ITokenGetNftInfosResponse} proto.ITokenGetNftInfosResponse
 * @typedef {import("@hashgraph/proto").ITokenGetAccountNftInfosResponse} proto.ITokenGetAccountNftInfosResponse
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 */
/**
 * @augments {Query<TokenNftInfo[]>}
 */
export default class TokenNftInfoQuery extends Query<TokenNftInfo[]> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {TokenNftInfoQuery}
     */
    static _fromProtobuf(query: proto.IQuery): TokenNftInfoQuery;
    /**
     * @param {object} properties
     * @param {NftId | string} [properties.nftId]
     * @param {AccountId | string} [properties.accountId]
     * @param {TokenId | string} [properties.tokenId]
     * @param {Long | number} [properties.start]
     * @param {Long | number} [properties.end]
     */
    constructor(properties?: {
        nftId?: string | NftId | undefined;
        accountId?: string | AccountId | undefined;
        tokenId?: string | TokenId | undefined;
        start?: number | Long.Long | undefined;
        end?: number | Long.Long | undefined;
    });
    /**
     * @private
     * @type {?NftId}
     */
    private _nftId;
    /**
     * @private
     * @type {?AccountId}
     */
    private _accountId;
    /**
     * @private
     * @type {?TokenId}
     */
    private _tokenId;
    /**
     * @private
     * @type {?Long}
     */
    private _start;
    /**
     * @private
     * @type {?Long}
     */
    private _end;
    /**
     * @returns {?NftId}
     */
    get nftId(): NftId | null;
    /**
     * Set the token ID for which the info is being requested.
     *
     * @param {NftId | string} nftId
     * @returns {TokenNftInfoQuery}
     */
    setNftId(nftId: NftId | string): TokenNftInfoQuery;
    /**
     * @deprecated with no replacement
     * @returns {?AccountId}
     */
    get accountId(): AccountId | null;
    /**
     * @deprecated with no replacement
     * Set the token ID for which the info is being requested.
     * @param {AccountId | string} accountId
     * @returns {TokenNftInfoQuery}
     */
    setAccountId(accountId: AccountId | string): TokenNftInfoQuery;
    /**
     * @deprecated with no replacement
     * @returns {?TokenId}
     */
    get tokenId(): TokenId | null;
    /**
     * @deprecated with no replacement
     * Set the token ID for which the info is being requested.
     * @param {TokenId | string} tokenId
     * @returns {TokenNftInfoQuery}
     */
    setTokenId(tokenId: TokenId | string): TokenNftInfoQuery;
    /**
     * @deprecated with no replacement
     * @returns {?Long}
     */
    get start(): Long.Long | null;
    /**
     * @deprecated with no replacement
     * Set the token ID for which the info is being requested.
     * @param {Long | number} start
     * @returns {TokenNftInfoQuery}
     */
    setStart(start: Long | number): TokenNftInfoQuery;
    /**
     * @deprecated with no replacement
     * @returns {?Long}
     */
    get end(): Long.Long | null;
    /**
     * @deprecated with no replacement
     * Set the token ID for which the info is being requested.
     * @param {Long | number} end
     * @returns {TokenNftInfoQuery}
     */
    setEnd(end: Long | number): TokenNftInfoQuery;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type ITokenNftInfo = import("@hashgraph/proto").ITokenNftInfo;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type ITokenGetNftInfoQuery = import("@hashgraph/proto").ITokenGetNftInfoQuery;
    type ITokenGetNftInfosQuery = import("@hashgraph/proto").ITokenGetNftInfosQuery;
    type ITokenGetAccountNftInfosQuery = import("@hashgraph/proto").ITokenGetAccountNftInfosQuery;
    type ITokenGetNftInfoResponse = import("@hashgraph/proto").ITokenGetNftInfoResponse;
    type ITokenGetNftInfosResponse = import("@hashgraph/proto").ITokenGetNftInfosResponse;
    type ITokenGetAccountNftInfosResponse = import("@hashgraph/proto").ITokenGetAccountNftInfosResponse;
}
export type Channel = import("../channel/Channel.js").default;
import TokenNftInfo from "./TokenNftInfo.js";
import Query from "../query/Query.js";
import NftId from "./NftId.js";
import AccountId from "../account/AccountId.js";
import TokenId from "../token/TokenId.js";
import Long from "long";
