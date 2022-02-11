/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").ITokenFeeScheduleUpdateTransactionBody} proto.ITokenFeeScheduleUpdateTransactionBody
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */
/**
 * @typedef {import("bignumber.js").default} BigNumber
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 * @typedef {import("./CustomFee.js").default} CustomFee
 * @typedef {import("../account/AccountId.js").default} AccountId
 */
/**
 * FeeScheduleUpdate a new Hedera™ crypto-currency token.
 */
export default class TokenFeeScheduleUpdateTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {TokenFeeScheduleUpdateTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): TokenFeeScheduleUpdateTransaction;
    /**
     * @param {object} [props]
     * @param {TokenId | string} [props.tokenId]
     * @param {CustomFee[]} [props.customFees]
     */
    constructor(props?: {
        tokenId?: string | TokenId | undefined;
        customFees?: import("./CustomFee.js").default[] | undefined;
    } | undefined);
    /**
     * @private
     * @type {?TokenId}
     */
    private _tokenId;
    /**
     * @private
     * @type {CustomFee[]}
     */
    private _customFees;
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
     * @returns {CustomFee[]}
     */
    get customFees(): import("./CustomFee.js").default[];
    /**
     * @param {CustomFee[]} fees
     * @returns {this}
     */
    setCustomFees(fees: CustomFee[]): this;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type ITokenFeeScheduleUpdateTransactionBody = import("@hashgraph/proto").ITokenFeeScheduleUpdateTransactionBody;
    type ITokenID = import("@hashgraph/proto").ITokenID;
}
export type BigNumber = import("bignumber.js").default;
export type Channel = import("../channel/Channel.js").default;
export type TransactionId = import("../transaction/TransactionId.js").default;
export type CustomFee = import("./CustomFee.js").default;
export type AccountId = import("../account/AccountId.js").default;
import Transaction from "../transaction/Transaction.js";
import TokenId from "./TokenId.js";
