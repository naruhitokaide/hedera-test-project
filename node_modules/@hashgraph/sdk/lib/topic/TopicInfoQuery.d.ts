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
export default class TopicInfoQuery extends Query<TopicInfo> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {TopicInfoQuery}
     */
    static _fromProtobuf(query: proto.IQuery): TopicInfoQuery;
    /**
     * @param {object} [props]
     * @param {TopicId | string} [props.topicId]
     */
    constructor(props?: {
        topicId?: string | TopicId | undefined;
    } | undefined);
    /**
     * @private
     * @type {?TopicId}
     */
    private _topicId;
    /**
     * @returns {?TopicId}
     */
    get topicId(): TopicId | null;
    /**
     * Set the topic ID for which the info is being requested.
     *
     * @param {TopicId | string} topicId
     * @returns {TopicInfoQuery}
     */
    setTopicId(topicId: TopicId | string): TopicInfoQuery;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type IConsensusTopicQuery = import("@hashgraph/proto").IConsensusTopicQuery;
    type IConsensusGetTopicInfoResponse = import("@hashgraph/proto").IConsensusGetTopicInfoResponse;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
import TopicInfo from "./TopicInfo.js";
import Query from "../query/Query.js";
import TopicId from "./TopicId.js";
