"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _long = _interopRequireDefault(require("long"));

var _Hbar = _interopRequireDefault(require("../Hbar.cjs"));

var _TokenId = _interopRequireDefault(require("../token/TokenId.cjs"));

var _TokenBalanceMap = _interopRequireDefault(require("./TokenBalanceMap.cjs"));

var _TokenDecimalMap = _interopRequireDefault(require("./TokenDecimalMap.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITimestamp} proto.ITimestamp
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 * @typedef {import("@hashgraph/proto").ICryptoGetAccountBalanceResponse} proto.ICryptoGetAccountBalanceResponse
 * @typedef {import("@hashgraph/proto").IKey} proto.IKey
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 * @typedef {import("@hashgraph/proto").ITokenBalance} proto.ITokenBalance
 */

/**
 * @typedef {object} TokenBalanceJson
 * @property {string} tokenId
 * @property {string} balance
 * @property {number} decimals
 */

/**
 * @typedef {object} AccountBalanceJson
 * @property {string} hbars
 * @property {TokenBalanceJson[]} tokens
 */
class AccountBalance {
  /**
   * @private
   * @param {object} props
   * @param {Hbar} props.hbars
   * @param {?TokenBalanceMap} props.tokens
   * @param {?TokenDecimalMap} props.tokenDecimals
   */
  constructor(props) {
    /**
     * The account ID for which this balancermation applies.
     *
     * @readonly
     */
    this.hbars = props.hbars;
    /** @readonly */

    this.tokens = props.tokens;
    /** @readonly */

    this.tokenDecimals = props.tokenDecimals;
    Object.freeze(this);
  }
  /**
   * @internal
   * @param {proto.ICryptoGetAccountBalanceResponse} accountBalance
   * @returns {AccountBalance}
   */


  static _fromProtobuf(accountBalance) {
    const tokenBalances = new _TokenBalanceMap.default();
    const tokenDecimals = new _TokenDecimalMap.default();

    if (accountBalance.tokenBalances != null) {
      for (const balance of accountBalance.tokenBalances) {
        const tokenId = _TokenId.default._fromProtobuf(
        /** @type {proto.ITokenID} */
        balance.tokenId);

        tokenDecimals._set(tokenId, balance.decimals != null ? balance.decimals : 0);

        tokenBalances._set(tokenId, _long.default.fromValue(
        /** @type {Long} */
        balance.balance));
      }
    }

    return new AccountBalance({
      hbars: _Hbar.default.fromTinybars(
      /** @type {Long} */
      accountBalance.balance),
      tokens: tokenBalances,
      tokenDecimals
    });
  }
  /**
   * @returns {proto.ICryptoGetAccountBalanceResponse}
   */


  _toProtobuf() {
    /** @type {proto.ITokenBalance[]} */
    const list = [];

    for (const [key, value] of this.tokens != null ? this.tokens : []) {
      list.push({
        tokenId: key._toProtobuf(),
        balance: value,
        decimals: this.tokenDecimals != null ? this.tokenDecimals.get(key) : null
      });
    }

    return {
      balance: this.hbars.toTinybars(),
      tokenBalances: list
    };
  }
  /**
   * @returns {string}
   */


  toString() {
    return JSON.stringify(this.toJSON());
  }
  /**
   * @returns {AccountBalanceJson}
   */


  toJSON() {
    const tokens = [];

    for (const [key, value] of this.tokens != null ? this.tokens : []) {
      const decimals = this.tokenDecimals != null ? this.tokenDecimals.get(key) : null;
      tokens.push({
        tokenId: key.toString(),
        balance: value.toString(),
        decimals: decimals != null ? decimals : 0
      });
    }

    return {
      hbars: this.hbars.toString(),
      tokens
    };
  }

}

exports.default = AccountBalance;