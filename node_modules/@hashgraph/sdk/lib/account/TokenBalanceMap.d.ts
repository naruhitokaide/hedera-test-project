/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITokenBalance} proto.ITokenBalance
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */
/**
 * @typedef {import("long")} Long
 */
/**
 * @augments {ObjectMap<TokenId, Long>}
 */
export default class TokenBalanceMap extends ObjectMap<TokenId, import("long").Long> {
    constructor();
}
export namespace proto {
    type ITokenBalance = import("@hashgraph/proto").ITokenBalance;
    type ITokenID = import("@hashgraph/proto").ITokenID;
}
export type Long = import("long");
import TokenId from "../token/TokenId.js";
import ObjectMap from "../ObjectMap.js";
