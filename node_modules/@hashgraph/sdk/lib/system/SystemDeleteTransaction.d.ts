/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").ISystemDeleteTransactionBody} proto.ISystemDeleteTransactionBody
 * @typedef {import("@hashgraph/proto").IContractID} proto.IContractID
 * @typedef {import("@hashgraph/proto").IFileID} proto.IFileID
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
export default class SystemDeleteTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {SystemDeleteTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): SystemDeleteTransaction;
    /**
     * @param {object} [props]
     * @param {FileId | string} [props.fileId]
     * @param {ContractId | string} [props.contractId]
     * @param {Timestamp} [props.expirationTime]
     */
    constructor(props?: {
        fileId?: string | FileId | undefined;
        contractId?: string | ContractId | undefined;
        expirationTime?: Timestamp | undefined;
    } | undefined);
    /**
     * @private
     * @type {?FileId}
     */
    private _fileId;
    /**
     * @private
     * @type {?ContractId}
     */
    private _contractId;
    /**
     * @private
     * @type {?Timestamp}
     */
    private _expirationTime;
    /**
     * @returns {?FileId}
     */
    get fileId(): FileId | null;
    /**
     * @param {FileId | string} fileId
     * @returns {this}
     */
    setFileId(fileId: FileId | string): this;
    /**
     * @returns {?ContractId}
     */
    get contractId(): ContractId | null;
    /**
     * @param {ContractId | string} contractId
     * @returns {this}
     */
    setContractId(contractId: ContractId | string): this;
    /**
     * @returns {?Timestamp}
     */
    get expirationTime(): Timestamp | null;
    /**
     * @param {Timestamp} expirationTime
     * @returns {SystemDeleteTransaction}
     */
    setExpirationTime(expirationTime: Timestamp): SystemDeleteTransaction;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type ISystemDeleteTransactionBody = import("@hashgraph/proto").ISystemDeleteTransactionBody;
    type IContractID = import("@hashgraph/proto").IContractID;
    type IFileID = import("@hashgraph/proto").IFileID;
}
export type Channel = import("../channel/Channel.js").default;
export type AccountId = import("../account/AccountId.js").default;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import FileId from "../file/FileId.js";
import ContractId from "../contract/ContractId.js";
import Timestamp from "../Timestamp.js";
