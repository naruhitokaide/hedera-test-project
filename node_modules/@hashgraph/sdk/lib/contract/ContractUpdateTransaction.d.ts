/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").IContractUpdateTransactionBody} proto.IContractUpdateTransactionBody
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 * @typedef {import("@hashgraph/proto").IContractID} proto.IContractID
 * @typedef {import("@hashgraph/proto").IFileID} proto.IFileID
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
export default class ContractUpdateTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {ContractUpdateTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): ContractUpdateTransaction;
    /**
     * @param {object} props
     * @param {ContractId | string} [props.contractId]
     * @param {FileId | string} [props.bytecodeFileId]
     * @param {Timestamp | Date} [props.expirationTime]
     * @param {Key} [props.adminKey]
     * @param {AccountId | string} [props.proxyAccountId]
     * @param {Duration | Long | number} [props.autoRenewPeriod]
     * @param {string} [props.contractMemo]
     */
    constructor(props?: {
        contractId?: string | ContractId | undefined;
        bytecodeFileId?: string | FileId | undefined;
        expirationTime?: Date | Timestamp | undefined;
        adminKey?: Key | undefined;
        proxyAccountId?: string | AccountId | undefined;
        autoRenewPeriod?: number | import("long").Long | Duration | undefined;
        contractMemo?: string | undefined;
    });
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
     * @private
     * @type {?Key}
     */
    private _adminKey;
    /**
     * @private
     * @type {?AccountId}
     */
    private _proxyAccountId;
    /**
     * @private
     * @type {?Duration}
     */
    private _autoRenewPeriod;
    /**
     * @private
     * @type {?FileId}
     */
    private _bytecodeFileId;
    /**
     * @private
     * @type {?string}
     */
    private _contractMemo;
    /**
     * @returns {?ContractId}
     */
    get contractId(): ContractId | null;
    /**
     * Sets the contract ID which is being deleted in this transaction.
     *
     * @param {ContractId | string} contractId
     * @returns {ContractUpdateTransaction}
     */
    setContractId(contractId: ContractId | string): ContractUpdateTransaction;
    /**
     * @returns {?Timestamp}
     */
    get expirationTime(): Timestamp | null;
    /**
     * Sets the contract ID which is being deleted in this transaction.
     *
     * @param {Timestamp | Date} expirationTime
     * @returns {ContractUpdateTransaction}
     */
    setExpirationTime(expirationTime: Timestamp | Date): ContractUpdateTransaction;
    /**
     * @returns {?Key}
     */
    get adminKey(): Key | null;
    /**
     * @param {Key} adminKey
     * @returns {this}
     */
    setAdminKey(adminKey: Key): this;
    /**
     * @returns {?AccountId}
     */
    get proxyAccountId(): AccountId | null;
    /**
     * @param {AccountId | string} proxyAccountId
     * @returns {this}
     */
    setProxyAccountId(proxyAccountId: AccountId | string): this;
    /**
     * @returns {?Duration}
     */
    get autoRenewPeriod(): Duration | null;
    /**
     * @param {Duration | Long | number} autoRenewPeriod
     * @returns {this}
     */
    setAutoRenewPeriod(autoRenewPeriod: Duration | Long | number): this;
    /**
     * @returns {?FileId}
     */
    get bytecodeFileId(): FileId | null;
    /**
     * @param {FileId | string} bytecodeFileId
     * @returns {this}
     */
    setBytecodeFileId(bytecodeFileId: FileId | string): this;
    /**
     * @returns {?string}
     */
    get contractMemo(): string | null;
    /**
     * @param {string} contractMemo
     * @returns {this}
     */
    setContractMemo(contractMemo: string): this;
    /**
     * @returns {this}
     */
    clearContractMemo(): this;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type IContractUpdateTransactionBody = import("@hashgraph/proto").IContractUpdateTransactionBody;
    type IAccountID = import("@hashgraph/proto").IAccountID;
    type IContractID = import("@hashgraph/proto").IContractID;
    type IFileID = import("@hashgraph/proto").IFileID;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import ContractId from "./ContractId.js";
import Timestamp from "../Timestamp.js";
import Key from "../Key.js";
import AccountId from "../account/AccountId.js";
import Duration from "../Duration.js";
import FileId from "../file/FileId.js";
