"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CustomFee = _interopRequireDefault(require("./CustomFee.cjs"));

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

var _long = _interopRequireDefault(require("long"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {import("./FeeAssessmentMethod.js").default} FeeAssessmentMethod
 */

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ICustomFee} proto.ICustomFee
 * @typedef {import("@hashgraph/proto").IFractionalFee} proto.IFractionalFee
 * @typedef {import("@hashgraph/proto").IFraction} proto.IFraction
 */
class CustomFractionalFee extends _CustomFee.default {
  /**
   * @param {object} props
   * @param {AccountId | string} [props.feeCollectorAccountId]
   * @param {Long | number} [props.numerator]
   * @param {Long | number} [props.denominator]
   * @param {Long | number} [props.min]
   * @param {Long | number} [props.max]
   * @param {FeeAssessmentMethod} [props.assessmentMethod]
   */
  constructor(props = {}) {
    super(props);
    /**
     * @type {?Long}
     */

    this._numerator;

    if (props.numerator != null) {
      this.setNumerator(props.numerator);
    }
    /**
     * @type {?Long}
     */


    this._denominator;

    if (props.denominator != null) {
      this.setDenominator(props.denominator);
    }
    /**
     * @type {?Long}
     */


    this._min;

    if (props.min != null) {
      this.setMin(props.min);
    }
    /**
     * @type {?Long}
     */


    this._max;

    if (props.max != null) {
      this.setMax(props.max);
    }
    /**
     * @type {?FeeAssessmentMethod}
     */


    this._assessmentMethod;

    if (props.assessmentMethod != null) {
      this.setAssessmentMethod(props.assessmentMethod);
    }
  }
  /**
   * @returns {?Long}
   */


  get numerator() {
    return this._numerator;
  }
  /**
   * @param {Long | number} numerator
   * @returns {CustomFractionalFee}
   */


  setNumerator(numerator) {
    this._numerator = typeof numerator === "number" ? _long.default.fromNumber(numerator) : numerator;
    return this;
  }
  /**
   * @returns {?Long}
   */


  get denominator() {
    return this._denominator;
  }
  /**
   * @param {Long | number} denominator
   * @returns {CustomFractionalFee}
   */


  setDenominator(denominator) {
    this._denominator = typeof denominator === "number" ? _long.default.fromNumber(denominator) : denominator;
    return this;
  }
  /**
   * @returns {?Long}
   */


  get min() {
    return this._min;
  }
  /**
   * @param {Long | number} min
   * @returns {CustomFractionalFee}
   */


  setMin(min) {
    this._min = typeof min === "number" ? _long.default.fromNumber(min) : min;
    return this;
  }
  /**
   * @returns {?Long}
   */


  get max() {
    return this._max;
  }
  /**
   * @param {Long | number} max
   * @returns {CustomFractionalFee}
   */


  setMax(max) {
    this._max = typeof max === "number" ? _long.default.fromNumber(max) : max;
    return this;
  }
  /**
   * @returns {?FeeAssessmentMethod}
   */


  get assessmentMethod() {
    return this._assessmentMethod;
  }
  /**
   * @param {FeeAssessmentMethod} assessmentMethod
   * @returns {CustomFractionalFee}
   */


  setAssessmentMethod(assessmentMethod) {
    this._assessmentMethod = assessmentMethod;
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
    /** @type {proto.IFractionalFee} */
    info.fractionalFee;
    const fractional =
    /** @type {proto.IFraction} */
    fee.fractionalAmount;
    return new CustomFractionalFee({
      feeCollectorAccountId: info.feeCollectorAccountId != null ? _AccountId.default._fromProtobuf(info.feeCollectorAccountId) : undefined,
      numerator: fractional.numerator != null ? fractional.numerator : undefined,
      denominator: fractional.denominator != null ? fractional.denominator : undefined,
      min: fee.minimumAmount != null ? fee.minimumAmount : undefined,
      max: fee.maximumAmount != null ? fee.maximumAmount : undefined
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
      fractionalFee: {
        fractionalAmount: {
          numerator: this._numerator,
          denominator: this._denominator
        },
        minimumAmount: this._min,
        maximumAmount: this._max
      }
    };
  }

}

exports.default = CustomFractionalFee;