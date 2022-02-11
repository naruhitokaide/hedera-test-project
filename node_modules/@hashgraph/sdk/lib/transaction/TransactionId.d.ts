/**
 * The client-generated ID for a transaction.
 *
 * This is used for retrieving receipts and records for a transaction, for appending to a file
 * right after creating it, for instantiating a smart contract with bytecode in a file just created,
 * and internally by the network for detecting when duplicate transactions are submitted.
 */
export default class TransactionId {
    /**
     * @param {AccountId} accountId
     * @param {Timestamp} validStart
     * @returns {TransactionId}
     */
    static withValidStart(accountId: AccountId, validStart: Timestamp): TransactionId;
    /**
     * Generates a new transaction ID for the given account ID.
     *
     * Note that transaction IDs are made of the valid start of the transaction and the account
     * that will be charged the transaction fees for the transaction.
     *
     * @param {AccountId | string} id
     * @returns {TransactionId}
     */
    static generate(id: AccountId | string): TransactionId;
    /**
     * @param {string} wholeId
     * @returns {TransactionId}
     */
    static fromString(wholeId: string): TransactionId;
    /**
     * @internal
     * @param {proto.ITransactionID} id
     * @returns {TransactionId}
     */
    static _fromProtobuf(id: proto.ITransactionID): TransactionId;
    /**
     * @param {Uint8Array} bytes
     * @returns {TransactionId}
     */
    static fromBytes(bytes: Uint8Array): TransactionId;
    /**
     * Don't use this method directly.
     * Use `TransactionId.[generate|withNonce|withValidStart]()` instead.
     *
     * @param {?AccountId} accountId
     * @param {?Timestamp} validStart
     * @param {?boolean} scheduled
     * @param {?Long | number} nonce
     */
    constructor(accountId: AccountId | null, validStart: Timestamp | null, scheduled?: boolean | null, nonce?: (Long | number) | null);
    /**
     * The Account ID that paid for this transaction.
     *
     * @readonly
     */
    readonly accountId: AccountId | null;
    /**
     * The time from when this transaction is valid.
     *
     * When a transaction is submitted there is additionally a validDuration (defaults to 120s)
     * and together they define a time window that a transaction may be processed in.
     *
     * @readonly
     */
    readonly validStart: Timestamp | null;
    scheduled: boolean | null;
    nonce: Long.Long | null;
    /**
     * @param {Long | number} nonce
     * @returns {TransactionId}
     */
    setNonce(nonce: Long | number): TransactionId;
    /**
     * @param {boolean} scheduled
     * @returns {this}
     */
    setScheduled(scheduled: boolean): this;
    /**
     * @returns {string}
     */
    toString(): string;
    /**
     * @internal
     * @returns {proto.ITransactionID}
     */
    _toProtobuf(): proto.ITransactionID;
    /**
     * @returns {Uint8Array}
     */
    toBytes(): Uint8Array;
    /**
     * @returns {TransactionId}
     */
    clone(): TransactionId;
    /**
     * @param {TransactionId} other
     * @returns {number}
     */
    compare(other: TransactionId): number;
}
import AccountId from "../account/AccountId.js";
import Timestamp from "../Timestamp.js";
import Long from "long";
import * as proto from "@hashgraph/proto";
