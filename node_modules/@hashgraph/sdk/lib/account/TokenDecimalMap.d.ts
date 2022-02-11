/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITokenBalance} proto.ITokenBalance
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */
/**
 * @augments {ObjectMap<TokenId, number>}
 */
export default class TokenDecimalMap extends ObjectMap<TokenId, number> {
    constructor();
}
export namespace proto {
    type ITokenBalance = import("@hashgraph/proto").ITokenBalance;
    type ITokenID = import("@hashgraph/proto").ITokenID;
}
import TokenId from "../token/TokenId.js";
import ObjectMap from "../ObjectMap.js";
