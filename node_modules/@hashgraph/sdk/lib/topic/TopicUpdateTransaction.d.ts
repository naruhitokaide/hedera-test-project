/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IConsensusUpdateTopicTransactionBody} proto.IConsensusUpdateTopicTransactionBody
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
 * Update a topic.
 *
 * If there is no adminKey, the only authorized update (available to anyone) is to extend the expirationTime.
 * Otherwise transaction must be signed by the adminKey.
 *
 * If an adminKey is updated, the transaction must be signed by the pre-update adminKey and post-update adminKey.
 *
 * If a new autoRenewAccount is specified (not just being removed), that account must also sign the transaction.
 */
export default class TopicUpdateTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {TopicUpdateTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): TopicUpdateTransaction;
    /**
     * @param {object} props
     * @param {TopicId | string} [props.topicId]
     * @param {Key} [props.adminKey]
     * @param {Key} [props.submitKey]
     * @param {Duration | Long | number} [props.autoRenewPeriod]
     * @param {AccountId | string} [props.autoRenewAccountId]
     * @param {string} [props.topicMemo]
     */
    constructor(props?: {
        topicId?: string | TopicId | undefined;
        adminKey?: Key | undefined;
        submitKey?: Key | undefined;
        autoRenewPeriod?: number | import("long").Long | Duration | undefined;
        autoRenewAccountId?: string | AccountId | undefined;
        topicMemo?: string | undefined;
    });
    /**
     * @private
     * @type {?TopicId}
     */
    private _topicId;
    /**
     * @private
     * @type {?string}
     */
    private _topicMemo;
    /**
     * @private
     * @type {?Key}
     */
    private _submitKey;
    /**
     * @private
     * @type {?Key}
     */
    private _adminKey;
    /**
     * @private
     * @type {?AccountId}
     */
    private _autoRenewAccountId;
    /**
     * @private
     * @type {?Duration}
     */
    private _autoRenewPeriod;
    /**
     * @returns {?TopicId}
     */
    get topicId(): TopicId | null;
    /**
     * @param {TopicId | string} topicId
     * @returns {TopicUpdateTransaction}
     */
    setTopicId(topicId: TopicId | string): TopicUpdateTransaction;
    /**
     * @returns {TopicUpdateTransaction}
     */
    clearTopicId(): TopicUpdateTransaction;
    /**
     * @returns {?string}
     */
    get topicMemo(): string | null;
    /**
     * @param {string} topicMemo
     * @returns {TopicUpdateTransaction}
     */
    setTopicMemo(topicMemo: string): TopicUpdateTransaction;
    /**
     * @returns {TopicUpdateTransaction}
     */
    clearTopicMemo(): TopicUpdateTransaction;
    /**
     * @returns {?Key}
     */
    get adminKey(): Key | null;
    /**
     * @param {Key} adminKey
     * @returns {TopicUpdateTransaction}
     */
    setAdminKey(adminKey: Key): TopicUpdateTransaction;
    /**
     * @returns {TopicUpdateTransaction}
     */
    clearAdminKey(): TopicUpdateTransaction;
    /**
     * @returns {?Key}
     */
    get submitKey(): Key | null;
    /**
     * @param {Key} submitKey
     * @returns {TopicUpdateTransaction}
     */
    setSubmitKey(submitKey: Key): TopicUpdateTransaction;
    /**
     * @returns {TopicUpdateTransaction}
     */
    clearSubmitKey(): TopicUpdateTransaction;
    /**
     * @returns {?AccountId}
     */
    get autoRenewAccountId(): AccountId | null;
    /**
     * @param {AccountId | string} autoRenewAccountId
     * @returns {TopicUpdateTransaction}
     */
    setAutoRenewAccountId(autoRenewAccountId: AccountId | string): TopicUpdateTransaction;
    /**
     * @returns {TopicUpdateTransaction}
     */
    clearAutoRenewAccountId(): TopicUpdateTransaction;
    /**
     * @returns {?Duration}
     */
    get autoRenewPeriod(): Duration | null;
    /**
     * Set the auto renew period for this account.
     *
     * @param {Duration | Long | number} autoRenewPeriod
     * @returns {TopicUpdateTransaction}
     */
    setAutoRenewPeriod(autoRenewPeriod: Duration | Long | number): TopicUpdateTransaction;
}
export namespace proto {
    type IConsensusUpdateTopicTransactionBody = import("@hashgraph/proto").IConsensusUpdateTopicTransactionBody;
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
import TopicId from "./TopicId.js";
import Key from "../Key.js";
import AccountId from "../account/AccountId.js";
import Duration from "../Duration.js";
