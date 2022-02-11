/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").IContractCallTransactionBody} proto.IContractCallTransactionBody
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 * @typedef {import("@hashgraph/proto").IContractID} proto.IContractID
 * @typedef {import("@hashgraph/proto").IFileID} proto.IFileID
 */
/**
 * @typedef {import("bignumber.js").default} BigNumber
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
/**
 * @typedef {object} FunctionParameters
 * @property {string} name
 * @property {ContractFunctionParameters} parameters
 */
export default class ContractExecuteTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {ContractExecuteTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): ContractExecuteTransaction;
    /**
     * @param {object} [props]
     * @param {ContractId | string} [props.contractId]
     * @param {number | Long} [props.gas]
     * @param {number | string | Long | BigNumber | Hbar} [props.amount]
     * @param {Uint8Array} [props.functionParameters]
     * @param {FunctionParameters} [props.function]
     */
    constructor(props?: {
        contractId?: string | ContractId | undefined;
        gas?: number | Long.Long | undefined;
        amount?: string | number | Long.Long | import("bignumber.js").default | Hbar | undefined;
        functionParameters?: Uint8Array | undefined;
        function?: FunctionParameters | undefined;
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
     * @type {?Hbar}
     */
    private _amount;
    /**
     * @private
     * @type {?Uint8Array}
     */
    private _functionParameters;
    /**
     * @returns {?ContractId}
     */
    get contractId(): ContractId | null;
    /**
     * Sets the contract ID which is being executed in this transaction.
     *
     * @param {ContractId | string} contractId
     * @returns {ContractExecuteTransaction}
     */
    setContractId(contractId: ContractId | string): ContractExecuteTransaction;
    /**
     * @returns {?Long}
     */
    get gas(): Long.Long | null;
    /**
     * Sets the contract ID which is being executed in this transaction.
     *
     * @param {number | Long} gas
     * @returns {ContractExecuteTransaction}
     */
    setGas(gas: number | Long): ContractExecuteTransaction;
    /**
     * @returns {?Hbar}
     */
    get payableAmount(): Hbar | null;
    /**
     * Sets the contract ID which is being executed in this transaction.
     *
     * @param {number | string | Long | BigNumber | Hbar} amount
     * @returns {ContractExecuteTransaction}
     */
    setPayableAmount(amount: number | string | Long | BigNumber | Hbar): ContractExecuteTransaction;
    /**
     * @returns {?Uint8Array}
     */
    get functionParameters(): Uint8Array | null;
    /**
     * @param {Uint8Array} functionParameters
     * @returns {this}
     */
    setFunctionParameters(functionParameters: Uint8Array): this;
    /**
     * @param {string} name
     * @param {ContractFunctionParameters} [functionParameters]
     * @returns {this}
     */
    setFunction(name: string, functionParameters?: ContractFunctionParameters | undefined): this;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type IContractCallTransactionBody = import("@hashgraph/proto").IContractCallTransactionBody;
    type IAccountID = import("@hashgraph/proto").IAccountID;
    type IContractID = import("@hashgraph/proto").IContractID;
    type IFileID = import("@hashgraph/proto").IFileID;
}
export type BigNumber = import("bignumber.js").default;
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
export type TransactionId = import("../transaction/TransactionId.js").default;
export type FunctionParameters = {
    name: string;
    parameters: ContractFunctionParameters;
};
import Transaction from "../transaction/Transaction.js";
import ContractId from "./ContractId.js";
import Long from "long";
import Hbar from "../Hbar.js";
import ContractFunctionParameters from "./ContractFunctionParameters.js";
