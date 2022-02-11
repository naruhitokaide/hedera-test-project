"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NodeAccountIdSignatureMap = _interopRequireDefault(require("./NodeAccountIdSignatureMap.cjs"));

var _ObjectMap = _interopRequireDefault(require("../ObjectMap.cjs"));

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @augments {ObjectMap<AccountId, NodeAccountIdSignatureMap>}
 */
class SignatureMap extends _ObjectMap.default {
  constructor() {
    super(s => _AccountId.default.fromString(s));
  }
  /**
   * @param {import("./Transaction.js").default} transaction
   * @returns {SignatureMap}
   */


  static _fromTransaction(transaction) {
    const signatures = new SignatureMap();

    for (let i = 0; i < transaction._nodeIds.length; i++) {
      const sigMap = transaction._signedTransactions[i].sigMap;

      if (sigMap != null) {
        signatures._set(transaction._nodeIds[i], _NodeAccountIdSignatureMap.default._fromTransactionSigMap(sigMap));
      }
    }

    return signatures;
  }

}

exports.default = SignatureMap;