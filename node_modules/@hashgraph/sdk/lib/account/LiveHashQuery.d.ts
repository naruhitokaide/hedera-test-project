/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").ICryptoGetLiveHashQuery} proto.ICryptoGetLiveHashQuery
 * @typedef {import("@hashgraph/proto").ICryptoGetLiveHashResponse} proto.ICryptoGetLiveHashResponse
 * @typedef {import("@hashgraph/proto").ILiveHash} proto.ILiveHash
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 */
/**
 * @augments {Query<LiveHash>}
 */
export default class LiveHashQuery extends Query<LiveHash> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {LiveHashQuery}
     */
    static _fromProtobuf(query: proto.IQuery): LiveHashQuery;
    /**
     * @param {object} [props]
     * @param {AccountId | string} [props.accountId]
     * @param {Uint8Array} [props.hash]
     */
    constructor(props?: {
        accountId?: string | AccountId | undefined;
        hash?: Uint8Array | undefined;
    } | undefined);
    /**
     * @type {?AccountId}
     * @private
     */
    private _accountId;
    /**
     * @type {?Uint8Array}
     * @private
     */
    private _hash;
    /**
     * @returns {?AccountId}
     */
    get accountId(): AccountId | null;
    /**
     * Set the account to which the livehash is associated.
     *
     * @param {AccountId | string} accountId
     * @returns {this}
     */
    setAccountId(accountId: AccountId | string): this;
    /**
     * @returns {?Uint8Array}
     */
    get liveHash(): Uint8Array | null;
    /**
     * Set the SHA-384 data in the livehash.
     *
     * @param {Uint8Array} hash
     * @returns {this}
     */
    setHash(hash: Uint8Array): this;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type ICryptoGetLiveHashQuery = import("@hashgraph/proto").ICryptoGetLiveHashQuery;
    type ICryptoGetLiveHashResponse = import("@hashgraph/proto").ICryptoGetLiveHashResponse;
    type ILiveHash = import("@hashgraph/proto").ILiveHash;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
import LiveHash from "./LiveHash.js";
import Query from "../query/Query.js";
import AccountId from "./AccountId.js";
