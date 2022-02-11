/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").IContractCreateTransactionBody} proto.IContractCreateTransactionBody
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 * @typedef {import("@hashgraph/proto").IFileID} proto.IFileID
 */
/**
 * @typedef {import("bignumber.js").default} BigNumber
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
export default class ContractCreateTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {ContractCreateTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): ContractCreateTransaction;
    /**
     * @param {object} [props]
     * @param {FileId | string} [props.bytecodeFileId]
     * @param {Key} [props.adminKey]
     * @param {number | Long} [props.gas]
     * @param {number | string | Long | BigNumber | Hbar} [props.initialBalance]
     * @param {AccountId | string} [props.proxyAccountId]
     * @param {Duration | Long | number} [props.autoRenewPeriod]
     * @param {Uint8Array} [props.constructorParameters]
     * @param {string} [props.contractMemo]
     */
    constructor(props?: {
        bytecodeFileId?: string | FileId | undefined;
        adminKey?: Key | undefined;
        gas?: number | Long.Long | undefined;
        initialBalance?: string | number | Long.Long | import("bignumber.js").default | Hbar | undefined;
        proxyAccountId?: string | AccountId | undefined;
        autoRenewPeriod?: number | Long.Long | Duration | undefined;
        constructorParameters?: Uint8Array | undefined;
        contractMemo?: string | undefined;
    } | undefined);
    /**
     * @private
     * @type {?FileId}
     */
    private _bytecodeFileId;
    /**
     * @private
     * @type {?Key}
     */
    private _adminKey;
    /**
     * @private
     * @type {?Long}
     */
    private _gas;
    /**
     * @private
     * @type {?Hbar}
     */
    private _initialBalance;
    /**
     * @private
     * @type {?AccountId}
     */
    private _proxyAccountId;
    /**
     * @private
     * @type {Duration}
     */
    private _autoRenewPeriod;
    /**
     * @private
     * @type {?Uint8Array}
     */
    private _constructorParameters;
    /**
     * @private
     * @type {?string}
     */
    private _contractMemo;
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
     * @returns {?Key}
     */
    get adminKey(): Key | null;
    /**
     * @param {Key} adminKey
     * @returns {this}
     */
    setAdminKey(adminKey: Key): this;
    /**
     * @returns {?Long}
     */
    get gas(): Long.Long | null;
    /**
     * @param {number | Long} gas
     * @returns {this}
     */
    setGas(gas: number | Long): this;
    /**
     * @returns {?Hbar}
     */
    get initialBalance(): Hbar | null;
    /**
     * Set the initial amount to transfer into this contract.
     *
     * @param {number | string | Long | BigNumber | Hbar} initialBalance
     * @returns {this}
     */
    setInitialBalance(initialBalance: number | string | Long | BigNumber | Hbar): this;
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
     * @returns {Duration}
     */
    get autoRenewPeriod(): Duration;
    /**
     * @param {Duration | Long | number} autoRenewPeriod
     * @returns {this}
     */
    setAutoRenewPeriod(autoRenewPeriod: Duration | Long | number): this;
    /**
     * @returns {?Uint8Array}
     */
    get constructorParameters(): Uint8Array | null;
    /**
     * @param {Uint8Array | ContractFunctionParameters} constructorParameters
     * @returns {this}
     */
    setConstructorParameters(constructorParameters: Uint8Array | ContractFunctionParameters): this;
    /**
     * @returns {?string}
     */
    get contractMemo(): string | null;
    /**
     * @param {string} contractMemo
     * @returns {this}
     */
    setContractMemo(contractMemo: string): this;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type IContractCreateTransactionBody = import("@hashgraph/proto").IContractCreateTransactionBody;
    type IAccountID = import("@hashgraph/proto").IAccountID;
    type IFileID = import("@hashgraph/proto").IFileID;
}
export type BigNumber = import("bignumber.js").default;
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import FileId from "../file/FileId.js";
import Key from "../Key.js";
import Long from "long";
import Hbar from "../Hbar.js";
import AccountId from "../account/AccountId.js";
import Duration from "../Duration.js";
import ContractFunctionParameters from "./ContractFunctionParameters.js";
