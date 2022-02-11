/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITokenBalance} proto.ITokenBalance
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */
/**
 * @augments {ObjectMap<TokenId, number | null>}
 */
export default class NullableTokenDecimalMap extends ObjectMap<TokenId, number | null> {
    constructor();
}
export namespace proto {
    type ITokenBalance = import("@hashgraph/proto").ITokenBalance;
    type ITokenID = import("@hashgraph/proto").ITokenID;
}
import TokenId from "../token/TokenId.js";
import ObjectMap from "../ObjectMap.js";
