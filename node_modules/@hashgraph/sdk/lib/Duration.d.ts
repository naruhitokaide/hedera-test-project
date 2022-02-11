/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IDuration} proto.IDuration
 */
export default class Duration {
    /**
     * @internal
     * @param {proto.IDuration} duration
     * @returns {Duration}
     */
    static _fromProtobuf(duration: proto.IDuration): Duration;
    /**
     * @param {Long | number} seconds
     */
    constructor(seconds: Long | number);
    /**
     * @readonly
     * @type {Long}
     */
    readonly seconds: Long;
    /**
     * @internal
     * @returns {proto.IDuration}
     */
    _toProtobuf(): proto.IDuration;
}
export namespace proto {
    type IDuration = import("@hashgraph/proto").IDuration;
}
import Long from "long";
