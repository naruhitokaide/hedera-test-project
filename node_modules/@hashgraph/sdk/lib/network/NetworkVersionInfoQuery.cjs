"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireWildcard(require("../query/Query.cjs"));

var _NetworkVersionInfo = _interopRequireDefault(require("./NetworkVersionInfo.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").INetworkGetVersionInfoQuery} proto.INetworkGetVersionInfoQuery
 * @typedef {import("@hashgraph/proto").INetworkGetVersionInfoResponse} proto.INetworkGetVersionInfoResponse
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 */

/**
 * @augments {Query<NetworkVersionInfo>}
 */
class NetworkVersionInfoQuery extends _Query.default {
  constructor() {
    super();
  }
  /**
   * @param {proto.IQuery} query
   * @returns {NetworkVersionInfoQuery}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  static _fromProtobuf(query) {
    return new NetworkVersionInfoQuery();
  }
  /**
   * @override
   * @internal
   * @param {Channel} channel
   * @param {proto.IQuery} request
   * @returns {Promise<proto.IResponse>}
   */


  _execute(channel, request) {
    return channel.network.getVersionInfo(request);
  }
  /**
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @returns {proto.IResponseHeader}
   */


  _mapResponseHeader(response) {
    const networkGetVersionInfo =
    /** @type {proto.INetworkGetVersionInfoResponse} */
    response.networkGetVersionInfo;
    return (
      /** @type {proto.IResponseHeader} */
      networkGetVersionInfo.header
    );
  }
  /**
   * @protected
   * @override
   * @param {proto.IResponse} response
   * @returns {Promise<NetworkVersionInfo>}
   */


  _mapResponse(response) {
    const info =
    /** @type {proto.INetworkGetVersionInfoResponse} */
    response.networkGetVersionInfo;
    return Promise.resolve(_NetworkVersionInfo.default._fromProtobuf(info));
  }
  /**
   * @override
   * @internal
   * @param {proto.IQueryHeader} header
   * @returns {proto.IQuery}
   */


  _onMakeRequest(header) {
    return {
      networkGetVersionInfo: {
        header
      }
    };
  }

}

exports.default = NetworkVersionInfoQuery;

_Query.QUERY_REGISTRY.set("networkGetVersionInfo", // eslint-disable-next-line @typescript-eslint/unbound-method
NetworkVersionInfoQuery._fromProtobuf);