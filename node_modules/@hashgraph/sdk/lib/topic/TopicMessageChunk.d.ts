/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IConsensusTopicResponse} proto.IConsensusTopicResponse
 * @typedef {import("@hashgraph/proto").ITimestamp} proto.ITimestamp
 */
export default class TopicMessageChunk {
    /**
     * @internal
     * @param {proto.IConsensusTopicResponse} response
     * @returns {TopicMessageChunk}
     */
    static _fromProtobuf(response: proto.IConsensusTopicResponse): TopicMessageChunk;
    /**
     * @private
     * @param {object} props
     * @param {Timestamp} props.consensusTimestamp
     * @param {Uint8Array} props.contents
     * @param {Uint8Array} props.runningHash
     * @param {Long} props.sequenceNumber
     */
    private constructor();
    /** @readonly */
    readonly consensusTimestamp: Timestamp;
    /** @readonly */
    readonly contents: Uint8Array;
    /** @readonly */
    readonly runningHash: Uint8Array;
    /** @readonly */
    readonly sequenceNumber: Long.Long;
    /**
     * @internal
     * @returns {proto.IConsensusTopicResponse}
     */
    _toProtobuf(): proto.IConsensusTopicResponse;
}
export namespace proto {
    type IConsensusTopicResponse = import("@hashgraph/proto").IConsensusTopicResponse;
    type ITimestamp = import("@hashgraph/proto").ITimestamp;
}
import Timestamp from "../Timestamp.js";
import Long from "long";
