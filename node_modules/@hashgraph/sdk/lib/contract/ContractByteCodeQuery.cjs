"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireWildcard(require("../query/Query.cjs"));

var _ContractId = _interopRequireDefault(require("./ContractId.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").IContractGetBytecodeQuery} proto.IContractGetBytecodeQuery
 * @typedef {import("@hashgraph/proto").IContractGetBytecodeResponse} proto.IContractGetBytecodeResponse
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 */

/**
 * @augments {Query<Uint8Array>}
 */
class ContractByteCodeQuery extends _Query.default {
  /**
   * @param {object} props
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
   * @returns {ContractByteCodeQuery}
   */


  static _fromProtobuf(query) {
    const bytecode =
    /** @type {proto.IContractGetBytecodeQuery} */
    query.contractGetBytecode;
    return new ContractByteCodeQuery({
      contractId: bytecode.contractID != null ? _ContractId.default._fromProtobuf(bytecode.contractID) : undefined
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
   * @returns {ContractByteCodeQuery}
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
    return channel.smartContract.contractGetBytecode(request);
  }
  /**
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @returns {proto.IResponseHeader}
   */


  _mapResponseHeader(response) {
    const contractGetBytecodeResponse =
    /** @type {proto.IContractGetBytecodeResponse} */
    response.contractGetBytecodeResponse;
    return (
      /** @type {proto.IResponseHeader} */
      contractGetBytecodeResponse.header
    );
  }
  /**
   * @protected
   * @override
   * @param {proto.IResponse} response
   * @returns {Promise<Uint8Array>}
   */


  _mapResponse(response) {
    const contractGetBytecodeResponse =
    /** @type {proto.IContractGetBytecodeResponse} */
    response.contractGetBytecodeResponse;
    return Promise.resolve(contractGetBytecodeResponse.bytecode != null ? contractGetBytecodeResponse.bytecode : new Uint8Array());
  }
  /**
   * @override
   * @internal
   * @param {proto.IQueryHeader} header
   * @returns {proto.IQuery}
   */


  _onMakeRequest(header) {
    return {
      contractGetBytecode: {
        header,
        contractID: this._contractId != null ? this._contractId._toProtobuf() : null
      }
    };
  }

} // eslint-disable-next-line @typescript-eslint/unbound-method


exports.default = ContractByteCodeQuery;

_Query.QUERY_REGISTRY.set("contractGetBytecode", ContractByteCodeQuery._fromProtobuf);