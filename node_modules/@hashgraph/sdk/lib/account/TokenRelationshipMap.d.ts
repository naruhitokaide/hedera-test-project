/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITokenRelationship} proto.ITokenRelationship
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */
/**
 * @typedef {import("long")} Long
 */
/**
 * @augments {ObjectMap<TokenId, TokenRelationship>}
 */
export default class TokenRelationshipMap extends ObjectMap<TokenId, TokenRelationship> {
    /**
     * @param {proto.ITokenRelationship[]} relationships
     * @returns {TokenRelationshipMap}
     */
    static _fromProtobuf(relationships: proto.ITokenRelationship[]): TokenRelationshipMap;
    constructor();
    /**
     * @returns {proto.ITokenRelationship[]}
     */
    _toProtobuf(): proto.ITokenRelationship[];
}
export namespace proto {
    type ITokenRelationship = import("@hashgraph/proto").ITokenRelationship;
    type ITokenID = import("@hashgraph/proto").ITokenID;
}
export type Long = import("long");
import TokenId from "../token/TokenId.js";
import TokenRelationship from "./TokenRelationship.js";
import ObjectMap from "../ObjectMap.js";
