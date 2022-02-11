/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITokenTransferList} proto.ITokenTransferList
 * @typedef {import("@hashgraph/proto").INftTransfer} proto.INftTransfer
 * @typedef {import("@hashgraph/proto").IAccountAmount} proto.IAccountAmount
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 */
/**
 * @typedef {object} NftTransfer
 * @property {AccountId} sender
 * @property {AccountId} recipient
 * @property {Long} serial
 */
/**
 * @augments {ObjectMap<TokenId, NftTransfer[]>}
 */
export default class TokenNftTransferMap extends ObjectMap<TokenId, NftTransfer[]> {
    /**
     * @param {proto.ITokenTransferList[]} transfers
     * @returns {TokenNftTransferMap}
     */
    static _fromProtobuf(transfers: proto.ITokenTransferList[]): TokenNftTransferMap;
    constructor();
    /**
     * @internal
     * @param {TokenId} tokenId
     * @param {NftTransfer} nftTransfer
     */
    __set(tokenId: TokenId, nftTransfer: NftTransfer): void;
    /**
     * @returns {proto.ITokenTransferList[]}
     */
    _toProtobuf(): proto.ITokenTransferList[];
}
export namespace proto {
    type ITokenTransferList = import("@hashgraph/proto").ITokenTransferList;
    type INftTransfer = import("@hashgraph/proto").INftTransfer;
    type IAccountAmount = import("@hashgraph/proto").IAccountAmount;
    type ITokenID = import("@hashgraph/proto").ITokenID;
    type IAccountID = import("@hashgraph/proto").IAccountID;
}
export type NftTransfer = {
    sender: AccountId;
    recipient: AccountId;
    serial: Long;
};
import TokenId from "../token/TokenId.js";
import ObjectMap from "../ObjectMap.js";
import AccountId from "../account/AccountId.js";
