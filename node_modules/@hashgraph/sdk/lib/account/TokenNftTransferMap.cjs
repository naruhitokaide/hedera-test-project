"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TokenId = _interopRequireDefault(require("../token/TokenId.cjs"));

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

var _ObjectMap = _interopRequireDefault(require("../ObjectMap.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITokenTransferList} proto.ITokenTransferList
 * @typedef {import("@hashgraph/proto").INftTransfer} proto.INftTransfer
 * @typedef {import("@hashgraph/proto").IAccountAmount} proto.IAccountAmount
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 */

/**
 * @typedef {object} NftTransfer
 * @property {AccountId} sender
 * @property {AccountId} recipient
 * @property {Long} serial
 */

/**
 * @augments {ObjectMap<TokenId, NftTransfer[]>}
 */
class TokenNftTransferMap extends _ObjectMap.default {
  constructor() {
    super(s => _TokenId.default.fromString(s));
  }
  /**
   * @internal
   * @param {TokenId} tokenId
   * @param {NftTransfer} nftTransfer
   */


  __set(tokenId, nftTransfer) {
    const token = tokenId.toString();

    let _map = this._map.get(token);

    if (_map == null) {
      _map = [];

      this._map.set(token, _map);

      this.__map.set(tokenId, _map);
    }

    _map.push(nftTransfer);
  }
  /**
   * @param {proto.ITokenTransferList[]} transfers
   * @returns {TokenNftTransferMap}
   */


  static _fromProtobuf(transfers) {
    const tokenTransfersMap = new TokenNftTransferMap();

    for (const transfer of transfers) {
      const token = _TokenId.default._fromProtobuf(
      /** @type {proto.ITokenID} */
      transfer.token);

      for (const aa of transfer.nftTransfers != null ? transfer.nftTransfers : []) {
        const sender = _AccountId.default._fromProtobuf(
        /** @type {proto.IAccountID} */
        aa.senderAccountID);

        const recipient = _AccountId.default._fromProtobuf(
        /** @type {proto.IAccountID} */
        aa.receiverAccountID);

        tokenTransfersMap.__set(token, {
          sender,
          recipient,
          serial:
          /** @type {Long} */
          aa.serialNumber
        });
      }
    }

    return tokenTransfersMap;
  }
  /**
   * @returns {proto.ITokenTransferList[]}
   */


  _toProtobuf() {
    /** @type {proto.ITokenTransferList[]} */
    const tokenTransferList = [];

    for (const [tokenId, value] of this) {
      /** @type {proto.INftTransfer[]} */
      const transfers = [];

      for (const transfer of value) {
        transfers.push({
          senderAccountID: transfer.sender._toProtobuf(),
          receiverAccountID: transfer.recipient._toProtobuf(),
          serialNumber: transfer.serial
        });
      }

      tokenTransferList.push({
        token: tokenId._toProtobuf(),
        nftTransfers: transfers
      });
    }

    return tokenTransferList;
  }

}

exports.default = TokenNftTransferMap;