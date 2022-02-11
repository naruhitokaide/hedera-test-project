"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireWildcard(require("../query/Query.cjs"));

var _AccountId = _interopRequireDefault(require("./AccountId.cjs"));

var _ProxyStaker = _interopRequireDefault(require("./ProxyStaker.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").ICryptoGetStakersQuery} proto.ICryptoGetStakersQuery
 * @typedef {import("@hashgraph/proto").ICryptoGetStakersResponse} proto.ICryptoGetStakersResponse
 * @typedef {import("@hashgraph/proto").IAllProxyStakers} proto.IAllProxyStakers
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 */

/**
 * Get all the accounts that are proxy staking to this account.
 * For each of them, give the amount currently staked.
 *
 * This is not yet implemented, but will be in a future version of the API.
 *
 * @augments {Query<ProxyStaker[]>}
 */
class AccountStakersQuery extends _Query.default {
  /**
   * @param {object} [props]
   * @param {(AccountId | string)=} props.accountId
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
  }
  /**
   * @internal
   * @param {proto.IQuery} query
   * @returns {AccountStakersQuery}
   */


  static _fromProtobuf(query) {
    const stakers =
    /** @type {proto.ICryptoGetStakersQuery} */
    query.cryptoGetProxyStakers;
    return new AccountStakersQuery({
      accountId: stakers.accountID != null ? _AccountId.default._fromProtobuf(stakers.accountID) : undefined
    });
  }
  /**
   * @returns {?AccountId}
   */


  get accountId() {
    return this._accountId;
  }
  /**
   * Set the account ID for which the stakers are being requested.
   *
   * @param {AccountId | string} accountId
   * @returns {this}
   */


  setAccountId(accountId) {
    this._accountId = typeof accountId === "string" ? _AccountId.default.fromString(accountId) : accountId.clone();
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
    return channel.crypto.getStakersByAccountID(request);
  }
  /**
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @returns {proto.IResponseHeader}
   */


  _mapResponseHeader(response) {
    const cryptoGetProxyStakers =
    /** @type {proto.ICryptoGetStakersResponse} */
    response.cryptoGetProxyStakers;
    return (
      /** @type {proto.IResponseHeader} */
      cryptoGetProxyStakers.header
    );
  }
  /**
   * @protected
   * @override
   * @param {proto.IResponse} response
   * @returns {Promise<ProxyStaker[]>}
   */


  _mapResponse(response) {
    const cryptoGetProxyStakers =
    /** @type {proto.ICryptoGetStakersResponse} */
    response.cryptoGetProxyStakers;
    const stakers =
    /** @type {proto.IAllProxyStakers} */
    cryptoGetProxyStakers.stakers;
    return Promise.resolve((stakers.proxyStaker != null ? stakers.proxyStaker : []).map(staker => _ProxyStaker.default._fromProtobuf(staker)));
  }
  /**
   * @override
   * @internal
   * @param {proto.IQueryHeader} header
   * @returns {proto.IQuery}
   */


  _onMakeRequest(header) {
    return {
      cryptoGetProxyStakers: {
        header,
        accountID: this._accountId != null ? this._accountId._toProtobuf() : null
      }
    };
  }

} // @ts-ignore
// eslint-disable-next-line @typescript-eslint/unbound-method


exports.default = AccountStakersQuery;

_Query.QUERY_REGISTRY.set("cryptoGetProxyStakers", AccountStakersQuery._fromProtobuf);