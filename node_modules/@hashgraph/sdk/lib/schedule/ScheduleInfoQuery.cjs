"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireWildcard(require("../query/Query.cjs"));

var _ScheduleId = _interopRequireDefault(require("./ScheduleId.cjs"));

var _ScheduleInfo = _interopRequireDefault(require("./ScheduleInfo.cjs"));

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
 * @typedef {import("@hashgraph/proto").IScheduleInfo} proto.IScheduleInfo
 * @typedef {import("@hashgraph/proto").IScheduleGetInfoQuery} proto.IScheduleGetInfoQuery
 * @typedef {import("@hashgraph/proto").IScheduleGetInfoResponse} proto.IScheduleGetInfoResponse
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 */

/**
 * @augments {Query<ScheduleInfo>}
 */
class ScheduleInfoQuery extends _Query.default {
  /**
   * @param {object} properties
   * @param {ScheduleId | string} [properties.scheduleId]
   */
  constructor(properties = {}) {
    super();
    /**
     * @private
     * @type {?ScheduleId}
     */

    this._scheduleId = null;

    if (properties.scheduleId != null) {
      this.setScheduleId(properties.scheduleId);
    }
  }
  /**
   * @internal
   * @param {proto.IQuery} query
   * @returns {ScheduleInfoQuery}
   */


  static _fromProtobuf(query) {
    const info =
    /** @type {proto.IScheduleGetInfoQuery} */
    query.scheduleGetInfo;
    return new ScheduleInfoQuery({
      scheduleId: info.scheduleID != null ? _ScheduleId.default._fromProtobuf(info.scheduleID) : undefined
    });
  }
  /**
   * @returns {?ScheduleId}
   */


  get scheduleId() {
    return this._scheduleId;
  }
  /**
   *
   * @param {ScheduleId | string} scheduleId
   * @returns {ScheduleInfoQuery}
   */


  setScheduleId(scheduleId) {
    this._scheduleId = typeof scheduleId === "string" ? _ScheduleId.default.fromString(scheduleId) : scheduleId.clone();
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
    if (this._scheduleId != null) {
      this._scheduleId.validateChecksum(client);
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
    return channel.schedule.getScheduleInfo(request);
  }
  /**
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @returns {proto.IResponseHeader}
   */


  _mapResponseHeader(response) {
    const scheduleGetInfo =
    /** @type {proto.IScheduleGetInfoResponse} */
    response.scheduleGetInfo;
    return (
      /** @type {proto.IResponseHeader} */
      scheduleGetInfo.header
    );
  }
  /**
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @param {AccountId} nodeAccountId
   * @param {proto.IQuery} request
   * @returns {Promise<ScheduleInfo>}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  _mapResponse(response, nodeAccountId, request) {
    const info =
    /** @type {proto.IScheduleGetInfoResponse} */
    response.scheduleGetInfo;
    return Promise.resolve(_ScheduleInfo.default._fromProtobuf(
    /** @type {proto.IScheduleInfo} */
    info.scheduleInfo));
  }
  /**
   * @override
   * @internal
   * @param {proto.IQueryHeader} header
   * @returns {proto.IQuery}
   */


  _onMakeRequest(header) {
    return {
      scheduleGetInfo: {
        header,
        scheduleID: this._scheduleId != null ? this._scheduleId._toProtobuf() : null
      }
    };
  }

} // eslint-disable-next-line @typescript-eslint/unbound-method


exports.default = ScheduleInfoQuery;

_Query.QUERY_REGISTRY.set("scheduleGetInfo", ScheduleInfoQuery._fromProtobuf);