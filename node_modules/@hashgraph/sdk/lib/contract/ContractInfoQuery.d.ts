/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").IContractGetInfoQuery} proto.IContractGetInfoQuery
 * @typedef {import("@hashgraph/proto").IContractGetInfoResponse} proto.IContractGetInfoResponse
 * @typedef {import("@hashgraph/proto").IContractInfo} proto.IContractInfo
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 */
/**
 * @augments {Query<ContractInfo>}
 */
export default class ContractInfoQuery extends Query<ContractInfo> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {ContractInfoQuery}
     */
    static _fromProtobuf(query: proto.IQuery): ContractInfoQuery;
    /**
     * @param {object} [props]
     * @param {ContractId | string} [props.contractId]
     */
    constructor(props?: {
        contractId?: string | ContractId | undefined;
    } | undefined);
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
     * @returns {ContractInfoQuery}
     */
    setContractId(contractId: ContractId | string): ContractInfoQuery;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type IContractGetInfoQuery = import("@hashgraph/proto").IContractGetInfoQuery;
    type IContractGetInfoResponse = import("@hashgraph/proto").IContractGetInfoResponse;
    type IContractInfo = import("@hashgraph/proto").IContractInfo;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
import ContractInfo from "./ContractInfo.js";
import Query from "../query/Query.js";
import ContractId from "./ContractId.js";
