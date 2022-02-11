/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../Status.js").default} Status
 * @typedef {import("../Executable.js").ExecutionState} ExecutionState
 */
/**
 * @template OutputT
 * @augments {Executable<proto.IQuery, proto.IResponse, Hbar>}
 */
export default class CostQuery<OutputT> extends Executable<import("@hashgraph/proto/lib/proto").proto.IQuery, import("@hashgraph/proto/lib/proto").proto.IResponse, Hbar> {
    /**
     * @param {import("./Query.js").default<OutputT>} query
     */
    constructor(query: import("./Query.js").default<OutputT>);
    _query: import("./Query.js").default<OutputT>;
    /**
     * @type {proto.IQueryHeader | null}
     */
    _header: proto.IQueryHeader | null;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
}
export type Channel = import("../channel/Channel.js").default;
export type Status = import("../Status.js").default;
export type ExecutionState = import("../Executable.js").ExecutionState;
import Hbar from "../Hbar.js";
import Executable from "../Executable.js";
