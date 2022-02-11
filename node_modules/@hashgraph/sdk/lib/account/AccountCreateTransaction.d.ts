/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").ICryptoCreateTransactionBody} proto.ICryptoCreateTransactionBody
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 */
/**
 * @typedef {import("bignumber.js").default} BigNumber
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../Timestamp.js").default} Timestamp
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
/**
 * Create a new Hedera™ crypto-currency account.
 */
export default class AccountCreateTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {AccountCreateTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): AccountCreateTransaction;
    /**
     * @param {object} [props]
     * @param {Key} [props.key]
     * @param {number | string | Long | BigNumber | Hbar} [props.initialBalance]
     * @param {boolean} [props.receiverSignatureRequired]
     * @param {AccountId} [props.proxyAccountId]
     * @param {Duration | Long | number} [props.autoRenewPeriod]
     * @param {string} [props.accountMemo]
     * @param {Long | number} [props.maxAutomaticTokenAssociations]
     */
    constructor(props?: {
        key?: Key | undefined;
        initialBalance?: string | number | Long.Long | import("bignumber.js").default | Hbar | undefined;
        receiverSignatureRequired?: boolean | undefined;
        proxyAccountId?: AccountId | undefined;
        autoRenewPeriod?: number | Long.Long | Duration | undefined;
        accountMemo?: string | undefined;
        maxAutomaticTokenAssociations?: number | Long.Long | undefined;
    } | undefined);
    /**
     * @private
     * @type {?Key}
     */
    private _key;
    /**
     * @private
     * @type {?Hbar}
     */
    private _initialBalance;
    /**
     * @private
     * @type {Hbar}
     */
    private _sendRecordThreshold;
    /**
     * @private
     * @type {Hbar}
     */
    private _receiveRecordThreshold;
    /**
     * @private
     * @type {boolean}
     */
    private _receiverSignatureRequired;
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
     * @type {?string}
     */
    private _accountMemo;
    /**
     * @private
     * @type {?Long}
     */
    private _maxAutomaticTokenAssociations;
    /**
     * @returns {?Key}
     */
    get key(): Key | null;
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
    setKey(key: Key): this;
    /**
     * @returns {?Hbar}
     */
    get initialBalance(): Hbar | null;
    /**
     * Set the initial amount to transfer into this account.
     *
     * @param {number | string | Long | BigNumber | Hbar} initialBalance
     * @returns {this}
     */
    setInitialBalance(initialBalance: number | string | Long | BigNumber | Hbar): this;
    /**
     * @returns {boolean}
     */
    get receiverSignatureRequired(): boolean;
    /**
     * Set to true to require the key for this account to sign any transfer of
     * hbars to this account.
     *
     * @param {boolean} receiverSignatureRequired
     * @returns {this}
     */
    setReceiverSignatureRequired(receiverSignatureRequired: boolean): this;
    /**
     * @returns {?AccountId}
     */
    get proxyAccountId(): AccountId | null;
    /**
     * Set the ID of the account to which this account is proxy staked.
     *
     * @param {AccountId} proxyAccountId
     * @returns {this}
     */
    setProxyAccountId(proxyAccountId: AccountId): this;
    /**
     * @returns {Duration}
     */
    get autoRenewPeriod(): Duration;
    /**
     * Set the auto renew period for this account.
     *
     * @param {Duration | Long | number} autoRenewPeriod
     * @returns {this}
     */
    setAutoRenewPeriod(autoRenewPeriod: Duration | Long | number): this;
    /**
     * @returns {?string}
     */
    get accountMemo(): string | null;
    /**
     * @param {string} memo
     * @returns {this}
     */
    setAccountMemo(memo: string): this;
    /**
     * @returns {?Long}
     */
    get maxAutomaticTokenAssociations(): Long.Long | null;
    /**
     * @param {Long | number} maxAutomaticTokenAssociations
     * @returns {this}
     */
    setMaxAutomaticTokenAssociations(maxAutomaticTokenAssociations: Long | number): this;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type ICryptoCreateTransactionBody = import("@hashgraph/proto").ICryptoCreateTransactionBody;
    type IAccountID = import("@hashgraph/proto").IAccountID;
}
export type BigNumber = import("bignumber.js").default;
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type Timestamp = import("../Timestamp.js").default;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import Key from "../Key.js";
import Hbar from "../Hbar.js";
import Long from "long";
import AccountId from "./AccountId.js";
import Duration from "../Duration.js";
