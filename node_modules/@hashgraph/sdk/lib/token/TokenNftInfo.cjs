"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NftId = _interopRequireDefault(require("./NftId.cjs"));

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

var _Timestamp = _interopRequireDefault(require("../Timestamp.cjs"));

var hex = _interopRequireWildcard(require("../encoding/hex.cjs"));

var _LedgerId = _interopRequireDefault(require("../LedgerId.cjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").TokenFreezeStatus} proto.TokenFreezeStatus
 * @typedef {import("@hashgraph/proto").TokenKycStatus} proto.TokenKycStatus
 * @typedef {import("@hashgraph/proto").TokenPauseStatus} proto.TokenPauseStatus
 * @typedef {import("@hashgraph/proto").ITokenNftInfo} proto.ITokenNftInfo
 * @typedef {import("@hashgraph/proto").INftID} proto.INftID
 * @typedef {import("@hashgraph/proto").ITimestamp} proto.ITimestamp
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 * @typedef {import("@hashgraph/proto").IKey} proto.IKey
 * @typedef {import("@hashgraph/proto").IDuration} proto.IDuration
 */
class TokenNftInfo {
  /**
   * @private
   * @param {object} props
   * @param {NftId} props.nftId
   * @param {AccountId} props.accountId
   * @param {Timestamp} props.creationTime
   * @param {Uint8Array | null} props.metadata
   * @param {LedgerId|null} props.ledgerId
   */
  constructor(props) {
    /**
     * ID of the nft instance
     *
     * @readonly
     */
    this.nftId = props.nftId;
    /**
     * @readonly
     */

    this.accountId = props.accountId;
    /**
     * @readonly
     */

    this.creationTime = props.creationTime;
    /**
     * @readonly
     */

    this.metadata = props.metadata;
    this.ledgerId = props.ledgerId;
    Object.freeze(this);
  }
  /**
   * @internal
   * @param {proto.ITokenNftInfo} info
   * @returns {TokenNftInfo}
   */


  static _fromProtobuf(info) {
    return new TokenNftInfo({
      nftId: _NftId.default._fromProtobuf(
      /** @type {proto.INftID} */
      info.nftID),
      accountId: _AccountId.default._fromProtobuf(
      /** @type {proto.IAccountID} */
      info.accountID),
      creationTime: _Timestamp.default._fromProtobuf(
      /** @type {proto.ITimestamp} */
      info.creationTime),
      metadata: info.metadata !== undefined ? info.metadata : null,
      ledgerId: info.ledgerId != null ? _LedgerId.default.fromBytes(info.ledgerId) : null
    });
  }
  /**
   * @returns {proto.ITokenNftInfo}
   */


  _toProtobuf() {
    return {
      nftID: this.nftId._toProtobuf(),
      accountID: this.accountId._toProtobuf(),
      creationTime: this.creationTime._toProtobuf(),
      metadata: this.metadata,
      ledgerId: this.ledgerId != null ? this.ledgerId.toBytes() : null
    };
  }
  /**
   * @typedef {object} TokenNftInfoJson
   * @property {string} nftId
   * @property {string} accountId
   * @property {string} creationTime
   * @property {string | null} metadata
   * @property {string | null} ledgerId
   * @returns {TokenNftInfoJson}
   */


  toJson() {
    return {
      nftId: this.nftId.toString(),
      accountId: this.accountId.toString(),
      creationTime: this.creationTime.toString(),
      metadata: this.metadata != null ? hex.encode(this.metadata) : null,
      ledgerId: this.ledgerId != null ? this.ledgerId.toString() : null
    };
  }
  /**
   * @returns {string}
   */


  toString() {
    return JSON.stringify(this.toJson());
  }

}

exports.default = TokenNftInfo;