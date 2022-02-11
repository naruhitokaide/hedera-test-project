/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").ITokenDissociateTransactionBody} proto.ITokenDissociateTransactionBody
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */
/**
 * Dissociate a new Hedera™ crypto-currency token.
 */
export default class TokenDissociateTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {TokenDissociateTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): TokenDissociateTransaction;
    /**
     * @param {object} [props]
     * @param {(TokenId | string)[]} [props.tokenIds]
     * @param {AccountId | string} [props.accountId]
     */
    constructor(props?: {
        tokenIds?: (string | TokenId)[] | undefined;
        accountId?: string | AccountId | undefined;
    } | undefined);
    /**
     * @private
     * @type {?TokenId[]}
     */
    private _tokenIds;
    /**
     * @private
     * @type {?AccountId}
     */
    private _accountId;
    /**
     * @returns {?TokenId[]}
     */
    get tokenIds(): TokenId[] | null;
    /**
     * @param {(TokenId | string)[]} tokenIds
     * @returns {this}
     */
    setTokenIds(tokenIds: (TokenId | string)[]): this;
    /**
     * @returns {?AccountId}
     */
    get accountId(): AccountId | null;
    /**
     * @param {AccountId | string} accountId
     * @returns {this}
     */
    setAccountId(accountId: AccountId | string): this;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type ITokenDissociateTransactionBody = import("@hashgraph/proto").ITokenDissociateTransactionBody;
    type ITokenID = import("@hashgraph/proto").ITokenID;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type TransactionId = import("../transaction/TransactionId.js").default;
import Transaction from "../transaction/Transaction.js";
import TokenId from "./TokenId.js";
import AccountId from "../account/AccountId.js";
