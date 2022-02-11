"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AccountId = _interopRequireDefault(require("./AccountId.cjs"));

var _Hbar = _interopRequireDefault(require("../Hbar.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IProxyStaker} proto.IProxyStaker
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 */

/**
 * @typedef {import("bignumber.js").default} BigNumber
 */

/**
 * An account, and the amount that it sends or receives during a cryptocurrency transfer.
 */
class ProxyStaker {
  /**
   * @private
   * @param {object} props
   * @param {AccountId} props.accountId
   * @param {number | string | Long | BigNumber | Hbar} props.amount
   */
  constructor(props) {
    /**
     * The Account ID that sends or receives cryptocurrency.
     *
     * @readonly
     */
    this.accountId = props.accountId;
    /**
     * The amount of tinybars that the account sends(negative)
     * or receives(positive).
     *
     * @readonly
     */

    this.amount = props.amount instanceof _Hbar.default ? props.amount : new _Hbar.default(props.amount);
    Object.freeze(this);
  }
  /**
   * @internal
   * @param {proto.IProxyStaker} transfer
   * @returns {ProxyStaker}
   */


  static _fromProtobuf(transfer) {
    return new ProxyStaker({
      accountId: _AccountId.default._fromProtobuf(
      /** @type {proto.IAccountID} */
      transfer.accountID),
      amount: _Hbar.default.fromTinybars(transfer.amount != null ? transfer.amount : 0)
    });
  }
  /**
   * @internal
   * @returns {proto.IProxyStaker}
   */


  _toProtobuf() {
    return {
      accountID: this.accountId._toProtobuf(),
      amount: this.amount.toTinybars()
    };
  }

}

exports.default = ProxyStaker;