/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").ITokenWipeAccountTransactionBody} proto.ITokenWipeAccountTransactionBody
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
/**
 * Wipe a new Hedera™ crypto-currency token.
 */
export default class TokenWipeTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {TokenWipeTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): TokenWipeTransaction;
    /**
     * @param {object} [props]
     * @param {TokenId | string} [props.tokenId]
     * @param {AccountId | string} [props.accountId]
     * @param {Long | number} [props.amount]
     * @param {(Long | number)[]} [props.serials]
     */
    constructor(props?: {
        tokenId?: string | TokenId | undefined;
        accountId?: string | AccountId | undefined;
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
     * @type {?AccountId}
     */
    private _accountId;
    /**
     * @private
     * @type {Long[]}
     */
    private _serials;
    /**
     * @private
     * @type {?Long}
     */
    private _amount;
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
     * @returns {?AccountId}
     */
    get accountId(): AccountId | null;
    /**
     * @param {AccountId | string} accountId
     * @returns {this}
     */
    setAccountId(accountId: AccountId | string): this;
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
    type ITokenWipeAccountTransactionBody = import("@hashgraph/proto").ITokenWipeAccountTransactionBody;
    type ITokenID = import("@hashgraph/proto").ITokenID;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import TokenId from "./TokenId.js";
import AccountId from "../account/AccountId.js";
import Long from "long";
