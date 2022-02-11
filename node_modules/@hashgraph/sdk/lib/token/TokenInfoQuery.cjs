"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireWildcard(require("../query/Query.cjs"));

var _TokenId = _interopRequireDefault(require("./TokenId.cjs"));

var _TokenInfo = _interopRequireDefault(require("./TokenInfo.cjs"));

var _Hbar = _interopRequireDefault(require("../Hbar.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").ITokenInfo} proto.ITokenInfo
 * @typedef {import("@hashgraph/proto").ITokenGetInfoQuery} proto.ITokenGetInfoQuery
 * @typedef {import("@hashgraph/proto").ITokenGetInfoResponse} proto.ITokenGetInfoResponse
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 */

/**
 * @augments {Query<TokenInfo>}
 */
class TokenInfoQuery extends _Query.default {
  /**
   * @param {object} properties
   * @param {TokenId | string} [properties.tokenId]
   */
  constructor(properties = {}) {
    super();
    /**
     * @private
     * @type {?TokenId}
     */

    this._tokenId = null;

    if (properties.tokenId != null) {
      this.setTokenId(properties.tokenId);
    }
  }
  /**
   * @internal
   * @param {proto.IQuery} query
   * @returns {TokenInfoQuery}
   */


  static _fromProtobuf(query) {
    const info =
    /** @type {proto.ITokenGetInfoQuery} */
    query.tokenGetInfo;
    return new TokenInfoQuery({
      tokenId: info.token != null ? _TokenId.default._fromProtobuf(info.token) : undefined
    });
  }
  /**
   * @returns {?TokenId}
   */


  get tokenId() {
    return this._tokenId;
  }
  /**
   * Set the token ID for which the info is being requested.
   *
   * @param {TokenId | string} tokenId
   * @returns {TokenInfoQuery}
   */


  setTokenId(tokenId) {
    this._tokenId = typeof tokenId === "string" ? _TokenId.default.fromString(tokenId) : tokenId.clone();
    return this;
  }
  /**
   * @override
   * @param {import("../client/Client.js").default<Channel, *>} client
   * @returns {Promise<Hbar>}
   */


  async getCost(client) {
    let cost = await super.getCost(client);

    if (cost.toTinybars().greaterThan(25)) {
      return cost;
    } else {
      return _Hbar.default.fromTinybars(25);
    }
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._tokenId != null) {
      this._tokenId.validateChecksum(client);
    }
  }
  /**
   * @override
   * @internal
   * @param {Channel} channel
   * @param {proto.IQuery} request
   * @returns {Promise<proto.IResponse>}
   */


  _execute(channel, request) {
    return channel.token.getTokenInfo(request);
  }
  /**
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @returns {proto.IResponseHeader}
   */


  _mapResponseHeader(response) {
    const tokenGetInfo =
    /** @type {proto.ITokenGetInfoResponse} */
    response.tokenGetInfo;
    return (
      /** @type {proto.IResponseHeader} */
      tokenGetInfo.header
    );
  }
  /**
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @param {AccountId} nodeAccountId
   * @param {proto.IQuery} request
   * @returns {Promise<TokenInfo>}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  _mapResponse(response, nodeAccountId, request) {
    const info =
    /** @type {proto.ITokenGetInfoResponse} */
    response.tokenGetInfo;
    return Promise.resolve(_TokenInfo.default._fromProtobuf(
    /** @type {proto.ITokenInfo} */
    info.tokenInfo));
  }
  /**
   * @override
   * @internal
   * @param {proto.IQueryHeader} header
   * @returns {proto.IQuery}
   */


  _onMakeRequest(header) {
    return {
      tokenGetInfo: {
        header,
        token: this._tokenId != null ? this._tokenId._toProtobuf() : null
      }
    };
  }

} // eslint-disable-next-line @typescript-eslint/unbound-method


exports.default = TokenInfoQuery;

_Query.QUERY_REGISTRY.set("tokenGetInfo", TokenInfoQuery._fromProtobuf);