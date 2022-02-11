/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").TokenFreezeStatus} proto.TokenFreezeStatus
 * @typedef {import("@hashgraph/proto").TokenKycStatus} proto.TokenKycStatus
 * @typedef {import("@hashgraph/proto").TokenPauseStatus} proto.TokenPauseStatus
 * @typedef {import("@hashgraph/proto").ITokenNftInfo} proto.ITokenNftInfo
 * @typedef {import("@hashgraph/proto").INftID} proto.INftID
 * @typedef {import("@hashgraph/proto").ITimestamp} proto.ITimestamp
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 * @typedef {import("@hashgraph/proto").IKey} proto.IKey
 * @typedef {import("@hashgraph/proto").IDuration} proto.IDuration
 */
export default class TokenNftInfo {
    /**
     * @internal
     * @param {proto.ITokenNftInfo} info
     * @returns {TokenNftInfo}
     */
    static _fromProtobuf(info: proto.ITokenNftInfo): TokenNftInfo;
    /**
     * @private
     * @param {object} props
     * @param {NftId} props.nftId
     * @param {AccountId} props.accountId
     * @param {Timestamp} props.creationTime
     * @param {Uint8Array | null} props.metadata
     * @param {LedgerId|null} props.ledgerId
     */
    private constructor();
    /**
     * ID of the nft instance
     *
     * @readonly
     */
    readonly nftId: NftId;
    /**
     * @readonly
     */
    readonly accountId: AccountId;
    /**
     * @readonly
     */
    readonly creationTime: Timestamp;
    /**
     * @readonly
     */
    readonly metadata: Uint8Array | null;
    ledgerId: LedgerId | null;
    /**
     * @returns {proto.ITokenNftInfo}
     */
    _toProtobuf(): proto.ITokenNftInfo;
    /**
     * @typedef {object} TokenNftInfoJson
     * @property {string} nftId
     * @property {string} accountId
     * @property {string} creationTime
     * @property {string | null} metadata
     * @property {string | null} ledgerId
     * @returns {TokenNftInfoJson}
     */
    toJson(): {
        nftId: string;
        accountId: string;
        creationTime: string;
        metadata: string | null;
        ledgerId: string | null;
    };
    /**
     * @returns {string}
     */
    toString(): string;
}
export namespace proto {
    type TokenFreezeStatus = import("@hashgraph/proto").TokenFreezeStatus;
    type TokenKycStatus = import("@hashgraph/proto").TokenKycStatus;
    type TokenPauseStatus = import("@hashgraph/proto").TokenPauseStatus;
    type ITokenNftInfo = import("@hashgraph/proto").ITokenNftInfo;
    type INftID = import("@hashgraph/proto").INftID;
    type ITimestamp = import("@hashgraph/proto").ITimestamp;
    type ITokenID = import("@hashgraph/proto").ITokenID;
    type IAccountID = import("@hashgraph/proto").IAccountID;
    type IKey = import("@hashgraph/proto").IKey;
    type IDuration = import("@hashgraph/proto").IDuration;
}
import NftId from "./NftId.js";
import AccountId from "../account/AccountId.js";
import Timestamp from "../Timestamp.js";
import LedgerId from "../LedgerId.js";
