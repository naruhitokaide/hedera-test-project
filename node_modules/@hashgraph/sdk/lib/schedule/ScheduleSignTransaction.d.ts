/**
 * @typedef {object} ProtoSignaturePair
 * @property {(Uint8Array | null)=} pubKeyPrefix
 * @property {(Uint8Array | null)=} ed25519
 */
/**
 * @typedef {object} ProtoSigMap
 * @property {(ProtoSignaturePair[] | null)=} sigPair
 */
/**
 * @typedef {object} ProtoSignedTransaction
 * @property {(Uint8Array | null)=} bodyBytes
 * @property {(ProtoSigMap | null)=} sigMap
 */
/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").IScheduleSignTransactionBody} proto.IScheduleSignTransactionBody
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 * @typedef {import("@hashgraph/proto").ISignatureMap} proto.ISignatureMap
 */
/**
 * @typedef {import("bignumber.js").default} BigNumber
 * @typedef {import("@hashgraph/cryptography").Key} Key
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../Timestamp.js").default} Timestamp
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("@hashgraph/cryptography").PublicKey} PublicKey
 */
/**
 * Create a new Hedera™ crypto-currency account.
 */
export default class ScheduleSignTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {ScheduleSignTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): ScheduleSignTransaction;
    /**
     * @param {object} [props]
     * @param {ScheduleId | string} [props.scheduleId]
     */
    constructor(props?: {
        scheduleId?: string | ScheduleId | undefined;
    } | undefined);
    /**
     * @private
     * @type {?ScheduleId}
     */
    private _scheduleId;
    /**
     * @returns {?ScheduleId}
     */
    get scheduleId(): ScheduleId | null;
    /**
     * @param {ScheduleId | string} scheduleId
     * @returns {this}
     */
    setScheduleId(scheduleId: ScheduleId | string): this;
}
export type ProtoSignaturePair = {
    pubKeyPrefix?: (Uint8Array | null) | undefined;
    ed25519?: (Uint8Array | null) | undefined;
};
export type ProtoSigMap = {
    sigPair?: (ProtoSignaturePair[] | null) | undefined;
};
export type ProtoSignedTransaction = {
    bodyBytes?: (Uint8Array | null) | undefined;
    sigMap?: (ProtoSigMap | null) | undefined;
};
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type IScheduleSignTransactionBody = import("@hashgraph/proto").IScheduleSignTransactionBody;
    type IAccountID = import("@hashgraph/proto").IAccountID;
    type ISignatureMap = import("@hashgraph/proto").ISignatureMap;
}
export type BigNumber = import("bignumber.js").default;
export type Key = import("@hashgraph/cryptography").Key;
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type Timestamp = import("../Timestamp.js").default;
export type TransactionId = import("../transaction/TransactionId.js").default;
export type AccountId = import("../account/AccountId.js").default;
export type PublicKey = import("@hashgraph/cryptography").PublicKey;
import Transaction from "../transaction/Transaction.js";
import ScheduleId from "./ScheduleId.js";
