/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").ICryptoGetAccountBalanceQuery} proto.ICryptoGetAccountBalanceQuery
 * @typedef {import("@hashgraph/proto").ICryptoGetAccountBalanceResponse} proto.ICryptoGetAccountBalanceResponse
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 */
/**
 * Get the balance of a Hedera™ crypto-currency account.
 *
 * This returns only the balance, so its a smaller and faster reply
 * than AccountInfoQuery.
 *
 * This query is free.
 *
 * @augments {Query<AccountBalance>}
 */
export default class AccountBalanceQuery extends Query<AccountBalance> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {AccountBalanceQuery}
     */
    static _fromProtobuf(query: proto.IQuery): AccountBalanceQuery;
    /**
     * @param {object} [props]
     * @param {AccountId | string} [props.accountId]
     * @param {ContractId | string} [props.contractId]
     */
    constructor(props?: {
        accountId?: string | AccountId | undefined;
        contractId?: string | ContractId | undefined;
    } | undefined);
    /**
     * @type {?AccountId}
     * @private
     */
    private _accountId;
    /**
     * @type {?ContractId}
     * @private
     */
    private _contractId;
    /**
     * @returns {?AccountId}
     */
    get accountId(): AccountId | null;
    /**
     * Set the account ID for which the balance is being requested.
     *
     * This is mutually exclusive with `setContractId`.
     *
     * @param {AccountId | string} accountId
     * @returns {this}
     */
    setAccountId(accountId: AccountId | string): this;
    /**
     * @returns {?ContractId}
     */
    get contractId(): ContractId | null;
    /**
     * Set the contract ID for which the balance is being requested.
     *
     * This is mutually exclusive with `setAccountId`.
     *
     * @param {ContractId | string} contractId
     * @returns {this}
     */
    setContractId(contractId: ContractId | string): this;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type ICryptoGetAccountBalanceQuery = import("@hashgraph/proto").ICryptoGetAccountBalanceQuery;
    type ICryptoGetAccountBalanceResponse = import("@hashgraph/proto").ICryptoGetAccountBalanceResponse;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
import AccountBalance from "./AccountBalance.js";
import Query from "../query/Query.js";
import AccountId from "./AccountId.js";
import ContractId from "../contract/ContractId.js";
