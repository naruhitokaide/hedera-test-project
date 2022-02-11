export default class Timestamp {
    /**
     * @returns {Timestamp}
     */
    static generate(): Timestamp;
    /**
     * @param {string | number | Date} date
     * @returns {Timestamp}
     */
    static fromDate(date: string | number | Date): Timestamp;
    /**
     * @internal
     * @param {proto.ITimestamp} timestamp
     * @returns {Timestamp}
     */
    static _fromProtobuf(timestamp: proto.ITimestamp): Timestamp;
    /**
     * @param {Long | number} seconds
     * @param {Long | number} nanos
     */
    constructor(seconds: Long | number, nanos: Long | number);
    /**
     * @readonly
     * @type {Long}
     */
    readonly seconds: Long;
    /**
     * @readonly
     * @type {Long}
     */
    readonly nanos: Long;
    /**
     * @returns {Date}
     */
    toDate(): Date;
    /**
     * @param {Long | number} nanos
     * @returns {Timestamp}
     */
    plusNanos(nanos: Long | number): Timestamp;
    /**
     * @internal
     * @returns {proto.ITimestamp}
     */
    _toProtobuf(): proto.ITimestamp;
    /**
     * @returns {string}
     */
    toString(): string;
    /**
     * @param {Timestamp} other
     * @returns {number}
     */
    compare(other: Timestamp): number;
}
export namespace proto {
    type ITimestamp = import("@hashgraph/proto").ITimestamp;
}
import Long from "long";
