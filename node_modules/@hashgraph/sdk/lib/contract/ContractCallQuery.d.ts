/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").IContractCallLocalQuery} proto.IContractCallLocalQuery
 * @typedef {import("@hashgraph/proto").IContractCallLocalResponse} proto.IContractCallLocalResponse
 * @typedef {import("@hashgraph/proto").IContractFunctionResult} proto.IContractFunctionResult
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 */
/**
 * @typedef {object} FunctionParameters
 * @property {ContractFunctionParameters} parameters
 * @property {string} name
 */
/**
 * @augments {Query<ContractFunctionResult>}
 */
export default class ContractCallQuery extends Query<ContractFunctionResult> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {ContractCallQuery}
     */
    static _fromProtobuf(query: proto.IQuery): ContractCallQuery;
    /**
     * @param {object} [props]
     * @param {ContractId | string} [props.contractId]
     * @param {number | Long} [props.gas]
     * @param {FunctionParameters | Uint8Array} [props.functionParameters]
     * @param {number | Long} [props.maxResultSize]
     */
    constructor(props?: {
        contractId?: string | ContractId | undefined;
        gas?: number | Long.Long | undefined;
        functionParameters?: Uint8Array | FunctionParameters | undefined;
        maxResultSize?: number | Long.Long | undefined;
    } | undefined);
    /**
     * @private
     * @type {?ContractId}
     */
    private _contractId;
    /**
     * @private
     * @type {?Long}
     */
    private _gas;
    /**
     * @private
     * @type {?Uint8Array}
     */
    private _functionParameters;
    /**
     * @private
     * @type {?Long}
     */
    private _maxResultSize;
    /**
     * @returns {?ContractId}
     */
    get contractId(): ContractId | null;
    /**
     * Set the contract ID for which the call is being requested.
     *
     * @param {ContractId | string} contractId
     * @returns {ContractCallQuery}
     */
    setContractId(contractId: ContractId | string): ContractCallQuery;
    /**
     * @returns {?Long}
     */
    get gas(): Long.Long | null;
    /**
     * @param {number | Long} gas
     * @returns {ContractCallQuery}
     */
    setGas(gas: number | Long): ContractCallQuery;
    /**
     * @returns {?Uint8Array}
     */
    get functionParameters(): Uint8Array | null;
    /**
     * @param {Uint8Array} params
     * @returns {ContractCallQuery}
     */
    setFunctionParameters(params: Uint8Array): ContractCallQuery;
    /**
     * @param {string} name
     * @param {?ContractFunctionParameters} [params]
     * @returns {ContractCallQuery}
     */
    setFunction(name: string, params?: ContractFunctionParameters | null | undefined): ContractCallQuery;
    /**
     * @param {number | Long} size
     * @returns {ContractCallQuery}
     */
    setMaxResultSize(size: number | Long): ContractCallQuery;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type IContractCallLocalQuery = import("@hashgraph/proto").IContractCallLocalQuery;
    type IContractCallLocalResponse = import("@hashgraph/proto").IContractCallLocalResponse;
    type IContractFunctionResult = import("@hashgraph/proto").IContractFunctionResult;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
export type FunctionParameters = {
    parameters: ContractFunctionParameters;
    name: string;
};
import ContractFunctionResult from "./ContractFunctionResult.js";
import Query from "../query/Query.js";
import ContractId from "./ContractId.js";
import Long from "long";
import ContractFunctionParameters from "./ContractFunctionParameters.js";
