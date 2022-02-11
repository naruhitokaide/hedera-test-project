"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TokenId = _interopRequireDefault(require("./TokenId.cjs"));

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

var _long = _interopRequireDefault(require("long"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IAssessedCustomFee} proto.IAssessedCustomFee
 */
class AssessedCustomFee {
  /**
   * @param {object} props
   * @param {AccountId | string} [props.feeCollectorAccountId]
   * @param {TokenId | string} [props.tokenId]
   * @param {Long | number} [props.amount]
   * @param {AccountId[]} [props.payerAccountIds]
   */
  constructor(props = {}) {
    /**
     * @type {?AccountId}
     */
    this._feeCollectorAccountId;

    if (props.feeCollectorAccountId != null) {
      this.setFeeCollectorAccountId(props.feeCollectorAccountId);
    }
    /**
     * @type {?TokenId}
     */


    this._tokenId;

    if (props.tokenId != null) {
      this.setTokenId(props.tokenId);
    }
    /**
     * @type {?Long}
     */


    this._amount;

    if (props.amount != null) {
      this.setAmount(props.amount);
    }
    /**
     * @type {?AccountId[]}
     */


    this._payerAccountIds;

    if (props.payerAccountIds != null) {
      this.setPayerAccountIds(props.payerAccountIds);
    }
  }
  /**
   * @returns {?AccountId}
   */


  get feeCollectorAccountId() {
    return this._feeCollectorAccountId;
  }
  /**
   * @param {AccountId | string} feeCollectorAccountId
   * @returns {this}
   */


  setFeeCollectorAccountId(feeCollectorAccountId) {
    this._feeCollectorAccountId = typeof feeCollectorAccountId === "string" ? _AccountId.default.fromString(feeCollectorAccountId) : feeCollectorAccountId;
    return this;
  }
  /**
   * @returns {?TokenId}
   */


  get tokenId() {
    return this._tokenId;
  }
  /**
   * @param {TokenId | string} tokenId
   * @returns {this}
   */


  setTokenId(tokenId) {
    this._tokenId = typeof tokenId === "string" ? _TokenId.default.fromString(tokenId) : tokenId;
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
   * @returns {AssessedCustomFee}
   */


  setAmount(amount) {
    this._amount = typeof amount === "number" ? _long.default.fromNumber(amount) : amount;
    return this;
  }
  /**
   * @returns {?AccountId[]}
   */


  get payerAccountIds() {
    return this._payerAccountIds;
  }
  /**
   * @param {AccountId[]} payerAccountIds
   * @returns {AssessedCustomFee}
   */


  setPayerAccountIds(payerAccountIds) {
    this._payerAccountIds = payerAccountIds;
    return this;
  }
  /**
   * @internal
   * @param {proto.IAssessedCustomFee} fee
   * @returns {AssessedCustomFee}
   */


  static _fromProtobuf(fee) {
    return new AssessedCustomFee({
      feeCollectorAccountId: fee.feeCollectorAccountId != null ? _AccountId.default._fromProtobuf(fee.feeCollectorAccountId) : undefined,
      tokenId: fee.tokenId != null ? _TokenId.default._fromProtobuf(fee.tokenId) : undefined,
      amount: fee.amount != null ? fee.amount : undefined,
      payerAccountIds: fee.effectivePayerAccountId != null ? fee.effectivePayerAccountId.map(id => _AccountId.default._fromProtobuf(id)) : undefined
    });
  }
  /**
   * @internal
   * @abstract
   * @returns {proto.IAssessedCustomFee}
   */


  _toProtobuf() {
    return {
      feeCollectorAccountId: this.feeCollectorAccountId != null ? this.feeCollectorAccountId._toProtobuf() : null,
      tokenId: this._tokenId != null ? this._tokenId._toProtobuf() : null,
      amount: this._amount,
      effectivePayerAccountId: this._payerAccountIds != null ? this._payerAccountIds.map(id => id._toProtobuf()) : null
    };
  }

}

exports.default = AssessedCustomFee;