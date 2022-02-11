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
export default class NetworkVersionInfoQuery extends Query<NetworkVersionInfo> {
    /**
     * @param {proto.IQuery} query
     * @returns {NetworkVersionInfoQuery}
     */
    static _fromProtobuf(query: proto.IQuery): NetworkVersionInfoQuery;
    constructor();
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type INetworkGetVersionInfoQuery = import("@hashgraph/proto").INetworkGetVersionInfoQuery;
    type INetworkGetVersionInfoResponse = import("@hashgraph/proto").INetworkGetVersionInfoResponse;
}
export type Channel = import("../channel/Channel.js").default;
import NetworkVersionInfo from "./NetworkVersionInfo.js";
import Query from "../query/Query.js";
