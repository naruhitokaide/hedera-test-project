/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").IContractDeleteTransactionBody} proto.IContractDeleteTransactionBody
 * @typedef {import("@hashgraph/proto").IContractID} proto.IContractID
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
export default class ContractDeleteTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {ContractDeleteTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): ContractDeleteTransaction;
    /**
     * @param {object} [props]
     * @param {ContractId | string} [props.contractId]
     * @param {ContractId | string} [props.transferContractId]
     * @param {AccountId | string} [props.transferAccountId]
     */
    constructor(props?: {
        contractId?: string | ContractId | undefined;
        transferContractId?: string | ContractId | undefined;
        transferAccountId?: string | AccountId | undefined;
    } | undefined);
    /**
     * @private
     * @type {?ContractId}
     */
    private _contractId;
    /**
     * @private
     * @type {?AccountId}
     */
    private _transferAccountId;
    /**
     * @private
     * @type {?ContractId}
     */
    private _transferContractId;
    /**
     * @returns {?ContractId}
     */
    get contractId(): ContractId | null;
    /**
     * Sets the contract ID which is being deleted in this transaction.
     *
     * @param {ContractId | string} contractId
     * @returns {ContractDeleteTransaction}
     */
    setContractId(contractId: ContractId | string): ContractDeleteTransaction;
    /**
     * @returns {?ContractId}
     */
    get transferContractId(): ContractId | null;
    /**
     * Sets the contract ID which will receive all remaining hbars.
     *
     * @param {ContractId | string} transferContractId
     * @returns {ContractDeleteTransaction}
     */
    setTransferContractId(transferContractId: ContractId | string): ContractDeleteTransaction;
    /**
     * @returns {?AccountId}
     */
    get transferAccountId(): AccountId | null;
    /**
     * Sets the account ID which will receive all remaining hbars.
     *
     * @param {AccountId | string} transferAccountId
     * @returns {ContractDeleteTransaction}
     */
    setTransferAccountId(transferAccountId: AccountId | string): ContractDeleteTransaction;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type IContractDeleteTransactionBody = import("@hashgraph/proto").IContractDeleteTransactionBody;
    type IContractID = import("@hashgraph/proto").IContractID;
    type IAccountID = import("@hashgraph/proto").IAccountID;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import ContractId from "./ContractId.js";
import AccountId from "../account/AccountId.js";
