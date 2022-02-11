/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").IFileUpdateTransactionBody} proto.IFileUpdateTransactionBody
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
/**
 * Update a new Hedera™ crypto-currency file.
 */
export default class FileUpdateTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {FileUpdateTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): FileUpdateTransaction;
    /**
     * @param {object} props
     * @param {FileId | string} [props.fileId]
     * @param {Key[] | KeyList} [props.keys]
     * @param {Timestamp | Date} [props.expirationTime]
     * @param {Uint8Array | string} [props.contents]
     * @param {string} [props.fileMemo]
     */
    constructor(props?: {
        fileId?: string | FileId | undefined;
        keys?: KeyList | Key[] | undefined;
        expirationTime?: Date | Timestamp | undefined;
        contents?: string | Uint8Array | undefined;
        fileMemo?: string | undefined;
    });
    /**
     * @private
     * @type {?FileId}
     */
    private _fileId;
    /**
     * @private
     * @type {?Key[]}
     */
    private _keys;
    /**
     * @private
     * @type {?Timestamp}
     */
    private _expirationTime;
    /**
     * @private
     * @type {?Uint8Array}
     */
    private _contents;
    /**
     * @private
     * @type {?string}
     */
    private _fileMemo;
    /**
     * @returns {?FileId}
     */
    get fileId(): FileId | null;
    /**
     * Set the keys which must sign any transactions modifying this file. Required.
     *
     * All keys must sign to modify the file's contents or keys. No key is required
     * to sign for extending the expiration time (except the one for the operator account
     * paying for the transaction). Only one key must sign to delete the file, however.
     *
     * To require more than one key to sign to delete a file, add them to a
     * KeyList and pass that here.
     *
     * The network currently requires a file to have at least one key (or key list or threshold key)
     * but this requirement may be lifted in the future.
     *
     * @param {FileId | string} fileId
     * @returns {this}
     */
    setFileId(fileId: FileId | string): this;
    /**
     * @returns {?Key[]}
     */
    get keys(): Key[] | null;
    /**
     * Set the keys which must sign any transactions modifying this file. Required.
     *
     * All keys must sign to modify the file's contents or keys. No key is required
     * to sign for extending the expiration time (except the one for the operator account
     * paying for the transaction). Only one key must sign to delete the file, however.
     *
     * To require more than one key to sign to delete a file, add them to a
     * KeyList and pass that here.
     *
     * The network currently requires a file to have at least one key (or key list or threshold key)
     * but this requirement may be lifted in the future.
     *
     * @param {Key[] | KeyList} keys
     * @returns {this}
     */
    setKeys(keys: Key[] | KeyList): this;
    /**
     * @returns {?Timestamp}
     */
    get expirationTime(): Timestamp | null;
    /**
     * Set the instant at which this file will expire, after which its contents will no longer be
     * available.
     *
     * Defaults to 1/4 of a Julian year from the instant FileUpdateTransaction
     * was invoked.
     *
     * May be extended using FileUpdateTransaction#setExpirationTime(Timestamp).
     *
     * @param {Timestamp | Date} expirationTime
     * @returns {this}
     */
    setExpirationTime(expirationTime: Timestamp | Date): this;
    /**
     * @returns {?Uint8Array}
     */
    get contents(): Uint8Array | null;
    /**
     * Set the given byte array as the file's contents.
     *
     * This may be omitted to update an empty file.
     *
     * Note that total size for a given transaction is limited to 6KiB (as of March 2020) by the
     * network; if you exceed this you may receive a HederaPreCheckStatusException
     * with Status#TransactionOversize.
     *
     * In this case, you will need to break the data into chunks of less than ~6KiB and execute this
     * transaction with the first chunk and then use FileAppendTransaction with
     * FileAppendTransaction#setContents(Uint8Array) for the remaining chunks.
     *
     * @param {Uint8Array | string} contents
     * @returns {this}
     */
    setContents(contents: Uint8Array | string): this;
    /**
     * @returns {?string}
     */
    get fileMemo(): string | null;
    /**
     * @param {string} memo
     * @returns {this}
     */
    setFileMemo(memo: string): this;
    /**
     * @returns {this}
     */
    clearFileMemo(): this;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type IFileUpdateTransactionBody = import("@hashgraph/proto").IFileUpdateTransactionBody;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import FileId from "./FileId.js";
import Key from "../Key.js";
import KeyList from "../KeyList.js";
import Timestamp from "../Timestamp.js";
