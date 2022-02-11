"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireWildcard(require("../query/Query.cjs"));

var _TopicId = _interopRequireDefault(require("./TopicId.cjs"));

var _TopicInfo = _interopRequireDefault(require("./TopicInfo.cjs"));

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
 * @typedef {import("@hashgraph/proto").IConsensusTopicQuery} proto.IConsensusTopicQuery
 * @typedef {import("@hashgraph/proto").IConsensusGetTopicInfoResponse} proto.IConsensusGetTopicInfoResponse
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 */

/**
 * Retrieve the latest state of a topic.
 *
 * @augments {Query<TopicInfo>}
 */
class TopicInfoQuery extends _Query.default {
  /**
   * @param {object} [props]
   * @param {TopicId | string} [props.topicId]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?TopicId}
     */

    this._topicId = null;

    if (props.topicId != null) {
      this.setTopicId(props.topicId);
    }
  }
  /**
   * @internal
   * @param {proto.IQuery} query
   * @returns {TopicInfoQuery}
   */


  static _fromProtobuf(query) {
    const info =
    /** @type {proto.IConsensusTopicQuery} */
    query.consensusGetTopicInfo;
    return new TopicInfoQuery({
      topicId: info.topicID != null ? _TopicId.default._fromProtobuf(info.topicID) : undefined
    });
  }
  /**
   * @returns {?TopicId}
   */


  get topicId() {
    return this._topicId;
  }
  /**
   * Set the topic ID for which the info is being requested.
   *
   * @param {TopicId | string} topicId
   * @returns {TopicInfoQuery}
   */


  setTopicId(topicId) {
    this._topicId = typeof topicId === "string" ? _TopicId.default.fromString(topicId) : topicId.clone();
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
    if (this._topicId != null) {
      this._topicId.validateChecksum(client);
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
    return channel.consensus.getTopicInfo(request);
  }
  /**
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @returns {proto.IResponseHeader}
   */


  _mapResponseHeader(response) {
    const consensusGetTopicInfo =
    /** @type {proto.IConsensusGetTopicInfoResponse} */
    response.consensusGetTopicInfo;
    return (
      /** @type {proto.IResponseHeader} */
      consensusGetTopicInfo.header
    );
  }
  /**
   * @protected
   * @override
   * @param {proto.IResponse} response
   * @param {AccountId} nodeAccountId
   * @param {proto.IQuery} request
   * @returns {Promise<TopicInfo>}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  _mapResponse(response, nodeAccountId, request) {
    return Promise.resolve(_TopicInfo.default._fromProtobuf(
    /** @type {proto.IConsensusGetTopicInfoResponse} */
    response.consensusGetTopicInfo));
  }
  /**
   * @override
   * @internal
   * @param {proto.IQueryHeader} header
   * @returns {proto.IQuery}
   */


  _onMakeRequest(header) {
    return {
      consensusGetTopicInfo: {
        header,
        topicID: this._topicId != null ? this._topicId._toProtobuf() : null
      }
    };
  }

} // eslint-disable-next-line @typescript-eslint/unbound-method


exports.default = TopicInfoQuery;

_Query.QUERY_REGISTRY.set("consensusGetTopicInfo", TopicInfoQuery._fromProtobuf);