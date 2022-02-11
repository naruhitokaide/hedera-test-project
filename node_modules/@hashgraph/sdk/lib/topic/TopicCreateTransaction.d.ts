/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IConsensusCreateTopicTransactionBody} proto.IConsensusCreateTopicTransactionBody
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
/**
 * Create a topic to be used for consensus.
 */
export default class TopicCreateTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {TopicCreateTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): TopicCreateTransaction;
    /**
     * @param {object} props
     * @param {Key} [props.adminKey]
     * @param {Key} [props.submitKey]
     * @param {Duration | Long | number} [props.autoRenewPeriod]
     * @param {AccountId | string} [props.autoRenewAccountId]
     * @param {string} [props.topicMemo]
     */
    constructor(props?: {
        adminKey?: Key | undefined;
        submitKey?: Key | undefined;
        autoRenewPeriod?: number | import("long").Long | Duration | undefined;
        autoRenewAccountId?: string | AccountId | undefined;
        topicMemo?: string | undefined;
    });
    /**
     * @private
     * @type {?Key}
     */
    private _adminKey;
    /**
     * @private
     * @type {?Key}
     */
    private _submitKey;
    /**
     * @private
     * @type {?AccountId}
     */
    private _autoRenewAccountId;
    /**
     * @private
     * @type {Duration}
     */
    private _autoRenewPeriod;
    /**
     * @private
     * @type {?string}
     */
    private _topicMemo;
    /**
     * @returns {?string}
     */
    get topicMemo(): string | null;
    /**
     * @param {string} topicMemo
     * @returns {this}
     */
    setTopicMemo(topicMemo: string): this;
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
     * @returns {?Key}
     */
    get submitKey(): Key | null;
    /**
     * @param {Key} submitKey
     * @returns {this}
     */
    setSubmitKey(submitKey: Key): this;
    /**
     * @returns {?AccountId}
     */
    get autoRenewAccountId(): AccountId | null;
    /**
     * @param {AccountId | string} autoRenewAccountId
     * @returns {this}
     */
    setAutoRenewAccountId(autoRenewAccountId: AccountId | string): this;
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
}
export namespace proto {
    type IConsensusCreateTopicTransactionBody = import("@hashgraph/proto").IConsensusCreateTopicTransactionBody;
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import Key from "../Key.js";
import AccountId from "../account/AccountId.js";
import Duration from "../Duration.js";
