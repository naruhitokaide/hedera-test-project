/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").ICryptoDeleteLiveHashTransactionBody} proto.ICryptoDeleteLiveHashTransactionBody
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
export default class LiveHashDeleteTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {LiveHashDeleteTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): LiveHashDeleteTransaction;
    /**
     * @param {object} [props]
     * @param {Uint8Array} [props.hash]
     * @param {AccountId | string} [props.accountId]
     */
    constructor(props?: {
        hash?: Uint8Array | undefined;
        accountId?: string | AccountId | undefined;
    } | undefined);
    /**
     * @private
     * @type {?Uint8Array}
     */
    private _hash;
    /**
     * @private
     * @type {?AccountId}
     */
    private _accountId;
    /**
     * @returns {?Uint8Array}
     */
    get hash(): Uint8Array | null;
    /**
     * @param {Uint8Array} hash
     * @returns {LiveHashDeleteTransaction}
     */
    setHash(hash: Uint8Array): LiveHashDeleteTransaction;
    /**
     * @returns {?AccountId}
     */
    get accountId(): AccountId | null;
    /**
     * @param {AccountId | string} accountId
     * @returns {LiveHashDeleteTransaction}
     */
    setAccountId(accountId: AccountId | string): LiveHashDeleteTransaction;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type ICryptoDeleteLiveHashTransactionBody = import("@hashgraph/proto").ICryptoDeleteLiveHashTransactionBody;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import AccountId from "./AccountId.js";
