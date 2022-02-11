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
export default class ScheduleInfoQuery extends Query<ScheduleInfo> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {ScheduleInfoQuery}
     */
    static _fromProtobuf(query: proto.IQuery): ScheduleInfoQuery;
    /**
     * @param {object} properties
     * @param {ScheduleId | string} [properties.scheduleId]
     */
    constructor(properties?: {
        scheduleId?: string | ScheduleId | undefined;
    });
    /**
     * @private
     * @type {?ScheduleId}
     */
    private _scheduleId;
    /**
     * @returns {?ScheduleId}
     */
    get scheduleId(): ScheduleId | null;
    /**
     *
     * @param {ScheduleId | string} scheduleId
     * @returns {ScheduleInfoQuery}
     */
    setScheduleId(scheduleId: ScheduleId | string): ScheduleInfoQuery;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type IScheduleInfo = import("@hashgraph/proto").IScheduleInfo;
    type IScheduleGetInfoQuery = import("@hashgraph/proto").IScheduleGetInfoQuery;
    type IScheduleGetInfoResponse = import("@hashgraph/proto").IScheduleGetInfoResponse;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
import ScheduleInfo from "./ScheduleInfo.js";
import Query from "../query/Query.js";
import ScheduleId from "./ScheduleId.js";
