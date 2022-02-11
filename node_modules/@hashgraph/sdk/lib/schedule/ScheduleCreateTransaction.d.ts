/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").IScheduleCreateTransactionBody} proto.IScheduleCreateTransactionBody
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 * @typedef {import("@hashgraph/proto").ISignatureMap} proto.ISignatureMap
 */
/**
 * @typedef {import("bignumber.js").default} BigNumber
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../Timestamp.js").default} Timestamp
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 * @typedef {import("../PublicKey.js").default} PublicKey
 * @typedef {import("../PrivateKey.js").default} PrivateKey
 */
/**
 * Create a new Hedera™ crypto-currency account.
 */
export default class ScheduleCreateTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {ScheduleCreateTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): ScheduleCreateTransaction;
    /**
     * @param {object} [props]
     * @param {Key} [props.adminKey]
     * @param {AccountId} [props.payerAccountID]
     * @param {string} [props.scheduleMemo]
     */
    constructor(props?: {
        adminKey?: Key | undefined;
        payerAccountID?: AccountId | undefined;
        scheduleMemo?: string | undefined;
    } | undefined);
    /**
     * @private
     * @type {?Key}
     */
    private _adminKey;
    /**
     * @private
     * @type {?Transaction}
     */
    private _scheduledTransaction;
    /**
     * @private
     * @type {?AccountId}
     */
    private _payerAccountId;
    /**
     * @private
     * @type {?string}
     */
    private _scheduleMemo;
    /**
     * @private
     * @type {Set<string>}
     */
    private _scheduledSignerPublicKeys;
    /**
     * @internal
     * @param {Transaction} tx
     * @returns {this}
     */
    _setScheduledTransaction(tx: Transaction): this;
    /**
     * @returns {?Key}
     */
    get adminKey(): Key | null;
    /**
     * Set the key for this account.
     *
     * This is the key that must sign each transfer out of the account.
     *
     * If `receiverSignatureRequired` is true, then the key must also sign
     * any transfer into the account.
     *
     * @param {Key} key
     * @returns {this}
     */
    setAdminKey(key: Key): this;
    /**
     * @returns {?AccountId}
     */
    get payerAccountId(): AccountId | null;
    /**
     * @param {AccountId} account
     * @returns {this}
     */
    setPayerAccountId(account: AccountId): this;
    /**
     * @param {string} memo
     * @returns {this}
     */
    setScheduleMemo(memo: string): this;
    /**
     * @returns {?string}
     */
    get getScheduleMemo(): string | null;
    /**
     * @param {Transaction} transaction
     * @returns {this}
     */
    setScheduledTransaction(transaction: Transaction): this;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type IScheduleCreateTransactionBody = import("@hashgraph/proto").IScheduleCreateTransactionBody;
    type IAccountID = import("@hashgraph/proto").IAccountID;
    type ISignatureMap = import("@hashgraph/proto").ISignatureMap;
}
export type BigNumber = import("bignumber.js").default;
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type Timestamp = import("../Timestamp.js").default;
export type TransactionId = import("../transaction/TransactionId.js").default;
export type PublicKey = import("../PublicKey.js").default;
export type PrivateKey = import("../PrivateKey.js").default;
import Transaction from "../transaction/Transaction.js";
import Key from "../Key.js";
import AccountId from "../account/AccountId.js";
