/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").ITokenBurnTransactionBody} proto.ITokenBurnTransactionBody
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
/**
 * Burn a new Hedera™ crypto-currency token.
 */
export default class TokenBurnTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {TokenBurnTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): TokenBurnTransaction;
    /**
     * @param {object} [props]
     * @param {TokenId | string} [props.tokenId]
     * @param {Long | number} [props.amount]
     * @param {(Long | number)[]} [props.serials]
     */
    constructor(props?: {
        tokenId?: string | TokenId | undefined;
        amount?: number | Long.Long | undefined;
        serials?: (number | Long.Long)[] | undefined;
    } | undefined);
    /**
     * @private
     * @type {?TokenId}
     */
    private _tokenId;
    /**
     * @private
     * @type {?Long}
     */
    private _amount;
    /**
     * @private
     * @type {Long[]}
     */
    private _serials;
    /**
     * @returns {?TokenId}
     */
    get tokenId(): TokenId | null;
    /**
     * @param {TokenId | string} tokenId
     * @returns {this}
     */
    setTokenId(tokenId: TokenId | string): this;
    /**
     * @returns {?Long}
     */
    get amount(): Long.Long | null;
    /**
     * @param {Long | number} amount
     * @returns {this}
     */
    setAmount(amount: Long | number): this;
    /**
     * @returns {Long[]}
     */
    get serials(): Long.Long[];
    /**
     * @param {(Long | number)[]} serials
     * @returns {this}
     */
    setSerials(serials: (Long | number)[]): this;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type ITokenBurnTransactionBody = import("@hashgraph/proto").ITokenBurnTransactionBody;
    type ITokenID = import("@hashgraph/proto").ITokenID;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import TokenId from "./TokenId.js";
import Long from "long";
