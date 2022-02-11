/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IConsensusDeleteTopicTransactionBody} proto.IConsensusDeleteTopicTransactionBody
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
/**
 * Delete a topic.
 *
 * No more transactions or queries on the topic will succeed.
 *
 * If an adminKey is set, this transaction must be signed by that key.
 * If there is no adminKey, this transaction will fail with Status#Unautorized.
 */
export default class TopicDeleteTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {TopicDeleteTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): TopicDeleteTransaction;
    /**
     * @param {object} props
     * @param {TopicId | string} [props.topicId]
     */
    constructor(props?: {
        topicId?: string | TopicId | undefined;
    });
    /**
     * @private
     * @type {?TopicId}
     */
    private _topicId;
    /**
     * @returns {?TopicId}
     */
    get topicId(): TopicId | null;
    /**
     * Set the topic ID which is being deleted in this transaction.
     *
     * @param {TopicId | string} topicId
     * @returns {TopicDeleteTransaction}
     */
    setTopicId(topicId: TopicId | string): TopicDeleteTransaction;
}
export namespace proto {
    type IConsensusDeleteTopicTransactionBody = import("@hashgraph/proto").IConsensusDeleteTopicTransactionBody;
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import TopicId from "./TopicId.js";
