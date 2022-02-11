"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireWildcard(require("../query/Query.cjs"));

var _AccountId = _interopRequireDefault(require("./AccountId.cjs"));

var _LiveHash = _interopRequireDefault(require("./LiveHash.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").ICryptoGetLiveHashQuery} proto.ICryptoGetLiveHashQuery
 * @typedef {import("@hashgraph/proto").ICryptoGetLiveHashResponse} proto.ICryptoGetLiveHashResponse
 * @typedef {import("@hashgraph/proto").ILiveHash} proto.ILiveHash
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 */

/**
 * @augments {Query<LiveHash>}
 */
class LiveHashQuery extends _Query.default {
  /**
   * @param {object} [props]
   * @param {AccountId | string} [props.accountId]
   * @param {Uint8Array} [props.hash]
   */
  constructor(props = {}) {
    super();
    /**
     * @type {?AccountId}
     * @private
     */

    this._accountId = null;

    if (props.accountId != null) {
      this.setAccountId(props.accountId);
    }
    /**
     * @type {?Uint8Array}
     * @private
     */


    this._hash = null;

    if (props.hash != null) {
      this.setHash(props.hash);
    }
  }
  /**
   * @internal
   * @param {proto.IQuery} query
   * @returns {LiveHashQuery}
   */


  static _fromProtobuf(query) {
    const hash =
    /** @type {proto.ICryptoGetLiveHashQuery} */
    query.cryptoGetLiveHash;
    return new LiveHashQuery({
      accountId: hash.accountID != null ? _AccountId.default._fromProtobuf(hash.accountID) : undefined,
      hash: hash.hash != null ? hash.hash : undefined
    });
  }
  /**
   * @returns {?AccountId}
   */


  get accountId() {
    return this._accountId;
  }
  /**
   * Set the account to which the livehash is associated.
   *
   * @param {AccountId | string} accountId
   * @returns {this}
   */


  setAccountId(accountId) {
    this._accountId = accountId instanceof _AccountId.default ? accountId : _AccountId.default.fromString(accountId);
    return this;
  }
  /**
   * @returns {?Uint8Array}
   */


  get liveHash() {
    return this._hash;
  }
  /**
   * Set the SHA-384 data in the livehash.
   *
   * @param {Uint8Array} hash
   * @returns {this}
   */


  setHash(hash) {
    this._hash = hash;
    return this;
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._accountId != null) {
      this._accountId.validateChecksum(client);
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
    return channel.crypto.getLiveHash(request);
  }
  /**
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @returns {proto.IResponseHeader}
   */


  _mapResponseHeader(response) {
    const cryptoGetLiveHash =
    /** @type {proto.ICryptoGetLiveHashResponse} */
    response.cryptoGetLiveHash;
    return (
      /** @type {proto.IResponseHeader} */
      cryptoGetLiveHash.header
    );
  }
  /**
   * @protected
   * @override
   * @param {proto.IResponse} response
   * @returns {Promise<LiveHash>}
   */


  _mapResponse(response) {
    const hashes =
    /** @type {proto.ICryptoGetLiveHashResponse} */
    response.cryptoGetLiveHash;
    return Promise.resolve(_LiveHash.default._fromProtobuf(
    /** @type {proto.ILiveHash} */
    hashes.liveHash));
  }
  /**
   * @override
   * @internal
   * @param {proto.IQueryHeader} header
   * @returns {proto.IQuery}
   */


  _onMakeRequest(header) {
    return {
      cryptoGetLiveHash: {
        header,
        accountID: this._accountId != null ? this._accountId._toProtobuf() : null,
        hash: this._hash
      }
    };
  }

} // @ts-ignore
// eslint-disable-next-line @typescript-eslint/unbound-method


exports.default = LiveHashQuery;

_Query.QUERY_REGISTRY.set("cryptoGetLiveHash", LiveHashQuery._fromProtobuf);