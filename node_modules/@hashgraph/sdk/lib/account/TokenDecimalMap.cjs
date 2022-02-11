"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TokenId = _interopRequireDefault(require("../token/TokenId.cjs"));

var _ObjectMap = _interopRequireDefault(require("../ObjectMap.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITokenBalance} proto.ITokenBalance
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */

/**
 * @augments {ObjectMap<TokenId, number>}
 */
class TokenDecimalMap extends _ObjectMap.default {
  constructor() {
    super(s => _TokenId.default.fromString(s));
  }

}

exports.default = TokenDecimalMap;