"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bignumber = _interopRequireDefault(require("bignumber.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HbarUnit {
  /**
   * @internal
   * @param {string} name
   * @param {string} symbol
   * @param {BigNumber} tinybar
   */
  constructor(name, symbol, tinybar) {
    /**
     * @internal
     * @readonly
     */
    this._name = name;
    /**
     * @internal
     * @readonly
     */

    this._symbol = symbol;
    /**
     * @internal
     * @readonly
     */

    this._tinybar = tinybar;
    Object.freeze(this);
  }
  /**
   * @param {string} unit
   * @returns {HbarUnit}
   */


  static fromString(unit) {
    switch (unit) {
      case HbarUnit.Hbar._symbol:
        return HbarUnit.Hbar;

      case HbarUnit.Tinybar._symbol:
        return HbarUnit.Tinybar;

      case HbarUnit.Microbar._symbol:
        return HbarUnit.Microbar;

      case HbarUnit.Millibar._symbol:
        return HbarUnit.Millibar;

      case HbarUnit.Kilobar._symbol:
        return HbarUnit.Kilobar;

      case HbarUnit.Megabar._symbol:
        return HbarUnit.Megabar;

      case HbarUnit.Gigabar._symbol:
        return HbarUnit.Gigabar;

      default:
        throw new Error("Unknown unit.");
    }
  }

}

exports.default = HbarUnit;
HbarUnit.Tinybar = new HbarUnit("tinybar", "tℏ", new _bignumber.default(1));
HbarUnit.Microbar = new HbarUnit("microbar", "μℏ", new _bignumber.default(100));
HbarUnit.Millibar = new HbarUnit("millibar", "mℏ", new _bignumber.default(100000));
HbarUnit.Hbar = new HbarUnit("hbar", "ℏ", new _bignumber.default("100000000"));
HbarUnit.Kilobar = new HbarUnit("kilobar", "kℏ", new _bignumber.default(1000).multipliedBy(new _bignumber.default("100000000")));
HbarUnit.Megabar = new HbarUnit("megabar", "Mℏ", new _bignumber.default(1000000).multipliedBy(new _bignumber.default("100000000")));
HbarUnit.Gigabar = new HbarUnit("gigabar", "Gℏ", new _bignumber.default("1000000000").multipliedBy(new _bignumber.default("100000000")));