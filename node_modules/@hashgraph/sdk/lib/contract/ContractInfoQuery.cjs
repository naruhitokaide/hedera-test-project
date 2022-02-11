"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireWildcard(require("../query/Query.cjs"));

var _ContractId = _interopRequireDefault(require("./ContractId.cjs"));

var _ContractInfo = _interopRequireDefault(require("./ContractInfo.cjs"));

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
 * @typedef {import("@hashgraph/proto").IContractGetInfoQuery} proto.IContractGetInfoQuery
 * @typedef {import("@hashgraph/proto").IContractGetInfoResponse} proto.IContractGetInfoResponse
 * @typedef {import("@hashgraph/proto").IContractInfo} proto.IContractInfo
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 */

/**
 * @augments {Query<ContractInfo>}
 */
class ContractInfoQuery extends _Query.default {
  /**
   * @param {object} [props]
   * @param {ContractId | string} [props.contractId]
   */
  constructor(props = {}) {
    super();
    /**
     * @type {?ContractId}
     * @private
     */

    this._contractId = null;

    if (props.contractId != null) {
      this.setContractId(props.contractId);
    }
  }
  /**
   * @internal
   * @param {proto.IQuery} query
   * @returns {ContractInfoQuery}
   */


  static _fromProtobuf(query) {
    const info =
    /** @type {proto.IContractGetInfoQuery} */
    query.contractGetInfo;
    return new ContractInfoQuery({
      contractId: info.contractID != null ? _ContractId.default._fromProtobuf(info.contractID) : undefined
    });
  }
  /**
   * @returns {?ContractId}
   */


  get contractId() {
    return this._contractId;
  }
  /**
   * Set the contract ID for which the info is being requested.
   *
   * @param {ContractId | string} contractId
   * @returns {ContractInfoQuery}
   */


  setContractId(contractId) {
    this._contractId = typeof contractId === "string" ? _ContractId.default.fromString(contractId) : contractId.clone();
    return this;
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
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
    return channel.smartContract.getContractInfo(request);
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
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @returns {proto.IResponseHeader}
   */


  _mapResponseHeader(response) {
    const contractGetInfo =
    /** @type {proto.IContractGetInfoResponse} */
    response.contractGetInfo;
    return (
      /** @type {proto.IResponseHeader} */
      contractGetInfo.header
    );
  }
  /**
   * @protected
   * @override
   * @param {proto.IResponse} response
   * @param {AccountId} nodeAccountId
   * @param {proto.IQuery} request
   * @returns {Promise<ContractInfo>}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  _mapResponse(response, nodeAccountId, request) {
    const info =
    /** @type {proto.IContractGetInfoResponse} */
    response.contractGetInfo;
    return Promise.resolve(_ContractInfo.default._fromProtobuf(
    /** @type {proto.IContractInfo} */
    info.contractInfo));
  }
  /**
   * @override
   * @internal
   * @param {proto.IQueryHeader} header
   * @returns {proto.IQuery}
   */


  _onMakeRequest(header) {
    return {
      contractGetInfo: {
        header,
        contractID: this._contractId != null ? this._contractId._toProtobuf() : null
      }
    };
  }

} // eslint-disable-next-line @typescript-eslint/unbound-method


exports.default = ContractInfoQuery;

_Query.QUERY_REGISTRY.set("contractGetInfo", ContractInfoQuery._fromProtobuf);