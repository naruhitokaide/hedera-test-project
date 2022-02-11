"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireWildcard(require("../query/Query.cjs"));

var _AccountId = _interopRequireDefault(require("./AccountId.cjs"));

var _ContractId = _interopRequireDefault(require("../contract/ContractId.cjs"));

var _AccountBalance = _interopRequireDefault(require("./AccountBalance.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").ICryptoGetAccountBalanceQuery} proto.ICryptoGetAccountBalanceQuery
 * @typedef {import("@hashgraph/proto").ICryptoGetAccountBalanceResponse} proto.ICryptoGetAccountBalanceResponse
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 */

/**
 * Get the balance of a Hedera™ crypto-currency account.
 *
 * This returns only the balance, so its a smaller and faster reply
 * than AccountInfoQuery.
 *
 * This query is free.
 *
 * @augments {Query<AccountBalance>}
 */
class AccountBalanceQuery extends _Query.default {
  /**
   * @param {object} [props]
   * @param {AccountId | string} [props.accountId]
   * @param {ContractId | string} [props.contractId]
   */
  constructor(props = {}) {
    super();
    /**
     * @type {?AccountId}
     * @private
     */

    this._accountId = null;
    /**
     * @type {?ContractId}
     * @private
     */

    this._contractId = null;

    if (props.accountId != null) {
      this.setAccountId(props.accountId);
    }

    if (props.contractId != null) {
      this.setContractId(props.contractId);
    }
  }
  /**
   * @internal
   * @param {proto.IQuery} query
   * @returns {AccountBalanceQuery}
   */


  static _fromProtobuf(query) {
    const balance =
    /** @type {proto.ICryptoGetAccountBalanceQuery} */
    query.cryptogetAccountBalance;
    return new AccountBalanceQuery({
      accountId: balance.accountID != null ? _AccountId.default._fromProtobuf(balance.accountID) : undefined,
      contractId: balance.contractID != null ? _ContractId.default._fromProtobuf(balance.contractID) : undefined
    });
  }
  /**
   * @returns {?AccountId}
   */


  get accountId() {
    return this._accountId;
  }
  /**
   * Set the account ID for which the balance is being requested.
   *
   * This is mutually exclusive with `setContractId`.
   *
   * @param {AccountId | string} accountId
   * @returns {this}
   */


  setAccountId(accountId) {
    this._accountId = typeof accountId === "string" ? _AccountId.default.fromString(accountId) : accountId.clone();
    return this;
  }
  /**
   * @returns {?ContractId}
   */


  get contractId() {
    return this._contractId;
  }
  /**
   * Set the contract ID for which the balance is being requested.
   *
   * This is mutually exclusive with `setAccountId`.
   *
   * @param {ContractId | string} contractId
   * @returns {this}
   */


  setContractId(contractId) {
    this._contractId = typeof contractId === "string" ? _ContractId.default.fromString(contractId) : contractId.clone();
    return this;
  }
  /**
   * @protected
   * @override
   * @returns {boolean}
   */


  _isPaymentRequired() {
    return false;
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._accountId != null) {
      this._accountId.validateChecksum(client);
    }

    if (this._contractId != null) {
      this._contractId.validateChecksum(client);
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
    return channel.crypto.cryptoGetBalance(request);
  }
  /**
   * @override
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @returns {proto.IResponseHeader}
   */


  _mapResponseHeader(response) {
    const cryptogetAccountBalance =
    /** @type {proto.ICryptoGetAccountBalanceResponse} */
    response.cryptogetAccountBalance;
    return (
      /** @type {proto.IResponseHeader} */
      cryptogetAccountBalance.header
    );
  }
  /**
   * @override
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @param {AccountId} nodeAccountId
   * @param {proto.IQuery} request
   * @returns {Promise<AccountBalance>}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  _mapResponse(response, nodeAccountId, request) {
    const cryptogetAccountBalance =
    /** @type {proto.ICryptoGetAccountBalanceResponse} */
    response.cryptogetAccountBalance;
    return Promise.resolve(_AccountBalance.default._fromProtobuf(cryptogetAccountBalance));
  }
  /**
   * @override
   * @internal
   * @param {proto.IQueryHeader} header
   * @returns {proto.IQuery}
   */


  _onMakeRequest(header) {
    return {
      cryptogetAccountBalance: {
        header,
        accountID: this._accountId != null ? this._accountId._toProtobuf() : null,
        contractID: this._contractId != null ? this._contractId._toProtobuf() : null
      }
    };
  }

}

exports.default = AccountBalanceQuery;

_Query.QUERY_REGISTRY.set("cryptogetAccountBalance", // eslint-disable-next-line @typescript-eslint/unbound-method
AccountBalanceQuery._fromProtobuf);