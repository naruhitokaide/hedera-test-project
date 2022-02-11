"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var proto = _interopRequireWildcard(require("@hashgraph/proto"));

var _TokenId = _interopRequireDefault(require("../token/TokenId.cjs"));

var _long = _interopRequireDefault(require("long"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * The ID for a crypto-currency token on Hedera.
 *
 * @augments {EntityId<proto.INftID>}
 */
class NftId {
  /**
   * @param {TokenId} token
   * @param {number | Long} serial
   */
  constructor(token, serial) {
    this.tokenId = token;
    this.serial = typeof serial === "number" ? _long.default.fromNumber(serial) : serial;
    Object.freeze(this);
  }
  /**
   * @param {string} text
   * @returns {NftId}
   */


  static fromString(text) {
    const strings = text.split("/").length > 1 ? text.split("/") : text.split("@");

    for (const string of strings) {
      if (string === "") {
        throw new Error("invalid format for NftId: use [token]/[serial] or [token]@[serial]");
      }
    }

    const token = _TokenId.default.fromString(strings[0]);

    const serial = _long.default.fromString(strings[1]);

    return new NftId(token, serial);
  }
  /**
   * @internal
   * @param {proto.INftID} id
   * @returns {NftId}
   */


  static _fromProtobuf(id) {
    return new NftId(_TokenId.default._fromProtobuf(
    /** @type {proto.ITokenID} */
    id.tokenID), id.serialNumber != null ? id.serialNumber : _long.default.ZERO);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {NftId}
   */


  static fromBytes(bytes) {
    return NftId._fromProtobuf(proto.NftID.decode(bytes));
  }
  /**
   * @internal
   * @returns {proto.INftID}
   */


  _toProtobuf() {
    return {
      tokenID: this.tokenId._toProtobuf(),
      serialNumber: _long.default.fromValue(this.serial !== undefined ? this.serial : 0)
    };
  }
  /**
   * @returns {string}
   */


  toString() {
    return `${this.serial.toString()}@${this.tokenId.toString()}`;
  }
  /**
   * @returns {Uint8Array}
   */


  toBytes() {
    return proto.NftID.encode(this._toProtobuf()).finish();
  }

}

exports.default = NftId;