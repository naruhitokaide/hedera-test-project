/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITokenTransferList} proto.ITokenTransferList
 * @typedef {import("@hashgraph/proto").IAccountAmount} proto.IAccountAmount
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 */
/**
 * @augments {ObjectMap<TokenId, TokenTransferAccountMap>}
 */
export default class TokenTransferMap extends ObjectMap<TokenId, TokenTransferAccountMap> {
    /**
     * @param {proto.ITokenTransferList[]} transfers
     * @returns {TokenTransferMap}
     */
    static _fromProtobuf(transfers: proto.ITokenTransferList[]): TokenTransferMap;
    constructor();
    /**
     * @internal
     * @param {TokenId} tokenId
     * @param {AccountId} accountId
     * @param {Long} amount
     */
    __set(tokenId: TokenId, accountId: AccountId, amount: Long): void;
    /**
     * @returns {proto.ITokenTransferList[]}
     */
    _toProtobuf(): proto.ITokenTransferList[];
}
export namespace proto {
    type ITokenTransferList = import("@hashgraph/proto").ITokenTransferList;
    type IAccountAmount = import("@hashgraph/proto").IAccountAmount;
    type ITokenID = import("@hashgraph/proto").ITokenID;
    type IAccountID = import("@hashgraph/proto").IAccountID;
}
import TokenId from "../token/TokenId.js";
import TokenTransferAccountMap from "./TokenTransferAccountMap.js";
import ObjectMap from "../ObjectMap.js";
import AccountId from "../account/AccountId.js";
