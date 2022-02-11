"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TokenId = _interopRequireDefault(require("../token/TokenId.cjs"));

var _TokenRelationship = _interopRequireDefault(require("./TokenRelationship.cjs"));

var _ObjectMap = _interopRequireDefault(require("../ObjectMap.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
class TokenRelationshipMap extends _ObjectMap.default {
  constructor() {
    super(s => _TokenId.default.fromString(s));
  }
  /**
   * @param {proto.ITokenRelationship[]} relationships
   * @returns {TokenRelationshipMap}
   */


  static _fromProtobuf(relationships) {
    const tokenRelationships = new TokenRelationshipMap();

    for (const relationship of relationships) {
      const tokenId = _TokenId.default._fromProtobuf(
      /** @type {proto.ITokenID} */
      relationship.tokenId);

      tokenRelationships._set(tokenId, _TokenRelationship.default._fromProtobuf(relationship));
    }

    return tokenRelationships;
  }
  /**
   * @returns {proto.ITokenRelationship[]}
   */


  _toProtobuf() {
    const list = []; // eslint-disable-next-line @typescript-eslint/no-unused-vars

    for (const [_, relationship] of this) {
      list.push(relationship._toProtobuf());
    }

    return list;
  }

}

exports.default = TokenRelationshipMap;