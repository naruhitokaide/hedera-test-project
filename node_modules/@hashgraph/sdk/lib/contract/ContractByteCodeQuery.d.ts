/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").IContractGetBytecodeQuery} proto.IContractGetBytecodeQuery
 * @typedef {import("@hashgraph/proto").IContractGetBytecodeResponse} proto.IContractGetBytecodeResponse
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 */
/**
 * @augments {Query<Uint8Array>}
 */
export default class ContractByteCodeQuery extends Query<Uint8Array> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {ContractByteCodeQuery}
     */
    static _fromProtobuf(query: proto.IQuery): ContractByteCodeQuery;
    /**
     * @param {object} props
     * @param {ContractId | string} [props.contractId]
     */
    constructor(props?: {
        contractId?: string | ContractId | undefined;
    });
    /**
     * @type {?ContractId}
     * @private
     */
    private _contractId;
    /**
     * @returns {?ContractId}
     */
    get contractId(): ContractId | null;
    /**
     * Set the contract ID for which the info is being requested.
     *
     * @param {ContractId | string} contractId
     * @returns {ContractByteCodeQuery}
     */
    setContractId(contractId: ContractId | string): ContractByteCodeQuery;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type IContractGetBytecodeQuery = import("@hashgraph/proto").IContractGetBytecodeQuery;
    type IContractGetBytecodeResponse = import("@hashgraph/proto").IContractGetBytecodeResponse;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
import Query from "../query/Query.js";
import ContractId from "./ContractId.js";
