/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").IFileDeleteTransactionBody} proto.IFileDeleteTransactionBody
 */
/**
 * @typedef {import("@hashgraph/cryptography").Key} Key
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
/**
 * A transaction to delete a file on the Hedera network.
 *
 * When deleted, a file's contents are truncated to zero length and it can no longer be updated
 * or appended to, or its expiration time extended. FileContentsQuery and FileInfoQuery
 * will throw HederaPreCheckStatusException with a status of Status#FileDeleted.
 *
 * Only one of the file's keys needs to sign to delete the file, unless the key you have is part
 * of a KeyList.
 */
export default class FileDeleteTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {FileDeleteTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): FileDeleteTransaction;
    /**
     * @param {object} [props]
     * @param {FileId | string} [props.fileId]
     */
    constructor(props?: {
        fileId?: string | FileId | undefined;
    } | undefined);
    /**
     * @private
     * @type {?FileId}
     */
    private _fileId;
    /**
     * @returns {?FileId}
     */
    get fileId(): FileId | null;
    /**
     * Set the file ID which is being deleted in this transaction.
     *
     * @param {FileId | string} fileId
     * @returns {FileDeleteTransaction}
     */
    setFileId(fileId: FileId | string): FileDeleteTransaction;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type IFileDeleteTransactionBody = import("@hashgraph/proto").IFileDeleteTransactionBody;
}
export type Key = import("@hashgraph/cryptography").Key;
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import FileId from "./FileId.js";
