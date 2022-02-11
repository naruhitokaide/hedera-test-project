"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

var sha384 = _interopRequireWildcard(require("../cryptography/sha384.cjs"));

var _ObjectMap = _interopRequireDefault(require("../ObjectMap.cjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 */

/**
 * @augments {ObjectMap<AccountId, Uint8Array>}
 */
class TransactionHashMap extends _ObjectMap.default {
  constructor() {
    super(s => _AccountId.default.fromString(s));
  }
  /**
   * @param {import("./Transaction.js").default} transaction
   * @returns {Promise<TransactionHashMap>}
   */


  static async _fromTransaction(transaction) {
    const hashes = new TransactionHashMap();

    for (let i = 0; i < transaction._nodeIds.length; i++) {
      const nodeAccountId = transaction._nodeIds[i];
      const tx =
      /** @type {proto.ITransaction} */
      transaction._transactions[i];
      const hash = await sha384.digest(
      /** @type {Uint8Array} */
      tx.signedTransactionBytes);

      hashes._set(nodeAccountId, hash);
    }

    return hashes;
  }

}

exports.default = TransactionHashMap;