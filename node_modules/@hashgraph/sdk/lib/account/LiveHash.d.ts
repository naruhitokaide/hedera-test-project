/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 * @typedef {import("@hashgraph/proto").ILiveHash} proto.ILiveHash
 * @typedef {import("@hashgraph/proto").IDuration} proto.IDuration
 */
/**
 * Response when the client sends the node CryptoGetInfoQuery.
 */
export default class LiveHash {
    /**
     * @internal
     * @param {proto.ILiveHash} liveHash
     * @returns {LiveHash}
     */
    static _fromProtobuf(liveHash: proto.ILiveHash): LiveHash;
    /**
     * @private
     * @param {object} props
     * @param {AccountId} props.accountId
     * @param {Uint8Array} props.hash
     * @param {KeyList} props.keys
     * @param {Duration} props.duration
     */
    private constructor();
    /** @readonly */
    readonly accountId: AccountId;
    /** @readonly */
    readonly hash: Uint8Array;
    /** @readonly */
    readonly keys: KeyList;
    /** @readonly */
    readonly duration: Duration;
    /**
     * @internal
     * @returns {proto.ILiveHash}
     */
    _toProtobuf(): proto.ILiveHash;
}
export namespace proto {
    type IAccountID = import("@hashgraph/proto").IAccountID;
    type ILiveHash = import("@hashgraph/proto").ILiveHash;
    type IDuration = import("@hashgraph/proto").IDuration;
}
import AccountId from "./AccountId.js";
import KeyList from "../KeyList.js";
import Duration from "../Duration.js";
