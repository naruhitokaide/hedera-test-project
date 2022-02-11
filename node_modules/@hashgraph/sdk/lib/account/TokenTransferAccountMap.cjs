"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

var _ObjectMap = _interopRequireDefault(require("../ObjectMap.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @augments {ObjectMap<AccountId, Long>}
 */
class TokenTransferAccountMap extends _ObjectMap.default {
  constructor() {
    super(s => _AccountId.default.fromString(s));
  }

}

exports.default = TokenTransferAccountMap;