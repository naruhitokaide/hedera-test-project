"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TokenId = _interopRequireDefault(require("./TokenId.cjs"));

var _CustomFee = _interopRequireDefault(require("./CustomFee.cjs"));

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

var _long = _interopRequireDefault(require("long"));

var _Hbar = _interopRequireDefault(require("../Hbar.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ICustomFee} proto.ICustomFee
 * @typedef {import("@hashgraph/proto").IFixedFee} proto.IFixedFee
 */
class CustomFixedFee extends _CustomFee.default {
  /**
   * @param {object} props
   * @param {AccountId | string} [props.feeCollectorAccountId]
   * @param {TokenId | string} [props.denominatingTokenId]
   * @param {Long | number} [props.amount]
   */
  constructor(props = {}) {
    super(props);
    /**
     * @type {?TokenId}
     */

    this._denominatingTokenId;

    if (props.denominatingTokenId != null) {
      this.setDenominatingTokenId(props.denominatingTokenId);
    }
    /**
     * @type {?Long}
     */


    this._amount;

    if (props.amount != null) {
      this.setAmount(props.amount);
    }
  }
  /**
   * @param {Hbar} amount
   * @returns {CustomFixedFee}
   */


  setHbarAmount(amount) {
    this._amount = amount.toTinybars();
    this._denominatingTokenId = null;
    return this;
  }
  /**
   * @returns {TokenId | Hbar | null}
   */


  get hbarAmount() {
    return this._denominatingTokenId != null ? null : _Hbar.default.fromTinybars(this._amount != null ? this._amount : 0);
  }
  /**
   * @returns {CustomFixedFee}
   */


  setDenominatingTokenToSameToken() {
    this._denominatingTokenId = new _TokenId.default(0, 0, 0);
    return this;
  }
  /**
   * @returns {?TokenId}
   */


  get denominatingTokenId() {
    return this._denominatingTokenId;
  }
  /**
   * @param {TokenId | string} denominatingTokenId
   * @returns {CustomFixedFee}
   */


  setDenominatingTokenId(denominatingTokenId) {
    this._denominatingTokenId = typeof denominatingTokenId === "string" ? _TokenId.default.fromString(denominatingTokenId) : denominatingTokenId;
    return this;
  }
  /**
   * @returns {?Long}
   */


  get amount() {
    return this._amount;
  }
  /**
   * @param {Long | number} amount
   * @returns {CustomFixedFee}
   */


  setAmount(amount) {
    this._amount = typeof amount === "number" ? _long.default.fromNumber(amount) : amount;
    return this;
  }
  /**
   * @internal
   * @override
   * @param {proto.ICustomFee} info
   * @returns {CustomFee}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  static _fromProtobuf(info) {
    const fee =
    /** @type {proto.IFixedFee} */
    info.fixedFee;
    return new CustomFixedFee({
      feeCollectorAccountId: info.feeCollectorAccountId != null ? _AccountId.default._fromProtobuf(info.feeCollectorAccountId) : undefined,
      denominatingTokenId: fee.denominatingTokenId != null ? _TokenId.default._fromProtobuf(fee.denominatingTokenId) : undefined,
      amount: fee.amount != null ? fee.amount : undefined
    });
  }
  /**
   * @internal
   * @abstract
   * @returns {proto.ICustomFee}
   */


  _toProtobuf() {
    return {
      feeCollectorAccountId: this.feeCollectorAccountId != null ? this.feeCollectorAccountId._toProtobuf() : null,
      fixedFee: {
        denominatingTokenId: this._denominatingTokenId != null ? this._denominatingTokenId._toProtobuf() : null,
        amount: this._amount
      }
    };
  }

}

exports.default = CustomFixedFee;