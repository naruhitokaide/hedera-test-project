"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Timestamp = _interopRequireDefault(require("../Timestamp.cjs"));

var _long = _interopRequireDefault(require("long"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IConsensusTopicResponse} proto.IConsensusTopicResponse
 * @typedef {import("@hashgraph/proto").ITimestamp} proto.ITimestamp
 */
class TopicMessageChunk {
  /**
   * @private
   * @param {object} props
   * @param {Timestamp} props.consensusTimestamp
   * @param {Uint8Array} props.contents
   * @param {Uint8Array} props.runningHash
   * @param {Long} props.sequenceNumber
   */
  constructor(props) {
    /** @readonly */
    this.consensusTimestamp = props.consensusTimestamp;
    /** @readonly */

    this.contents = props.contents;
    /** @readonly */

    this.runningHash = props.runningHash;
    /** @readonly */

    this.sequenceNumber = props.sequenceNumber;
    Object.freeze(this);
  }
  /**
   * @internal
   * @param {proto.IConsensusTopicResponse} response
   * @returns {TopicMessageChunk}
   */


  static _fromProtobuf(response) {
    return new TopicMessageChunk({
      consensusTimestamp: _Timestamp.default._fromProtobuf(
      /** @type {proto.ITimestamp} */
      response.consensusTimestamp),
      contents: response.message != null ? response.message : new Uint8Array(),
      runningHash: response.runningHash != null ? response.runningHash : new Uint8Array(),
      sequenceNumber: response.sequenceNumber != null ? response.sequenceNumber instanceof _long.default ? response.sequenceNumber : _long.default.fromValue(response.sequenceNumber) : _long.default.ZERO
    });
  }
  /**
   * @internal
   * @returns {proto.IConsensusTopicResponse}
   */


  _toProtobuf() {
    return {
      consensusTimestamp: this.consensusTimestamp._toProtobuf(),
      message: this.contents,
      runningHash: this.runningHash,
      sequenceNumber: this.sequenceNumber
    };
  }

}

exports.default = TopicMessageChunk;