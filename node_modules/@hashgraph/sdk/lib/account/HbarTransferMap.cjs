"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AccountId = _interopRequireDefault(require("./AccountId.cjs"));

var _Hbar = _interopRequireDefault(require("../Hbar.cjs"));

var _ObjectMap = _interopRequireDefault(require("../ObjectMap.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransferList} proto.ITransferList
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 */

/**
 * @typedef {import("../long.js").LongObject} LongObject
 * @typedef {import("bignumber.js").default} BigNumber
 */

/**
 * @augments {ObjectMap<AccountId, Hbar>}
 */
class HbarTransferMap extends _ObjectMap.default {
  constructor() {
    super(s => _AccountId.default.fromString(s));
  }
  /**
   * @param {proto.ITransferList} transfers
   * @returns {HbarTransferMap}
   */


  static _fromProtobuf(transfers) {
    const accountTransfers = new HbarTransferMap();

    for (const transfer of transfers.accountAmounts != null ? transfers.accountAmounts : []) {
      const account = _AccountId.default._fromProtobuf(
      /** @type {proto.IAccountID} */
      transfer.accountID);

      accountTransfers._set(account, _Hbar.default.fromTinybars(
      /** @type {Long} */
      transfer.amount));
    }

    return accountTransfers;
  }

}

exports.default = HbarTransferMap;