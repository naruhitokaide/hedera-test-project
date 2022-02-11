/**
 * @typedef {import("./transaction/Transaction.js").default} Transaction
 * @typedef {import("./account/AccountId.js").default} AccountId
 */
/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IKey} proto.IKey
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignaturePair} proto.ISignaturePair
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 */
export default class PublicKey extends Key {
    /**
     * @param {Uint8Array} data
     * @returns {PublicKey}
     */
    static fromBytes(data: Uint8Array): PublicKey;
    /**
     * @param {Uint8Array} data
     * @returns {PublicKey}
     */
    static fromBytesED25519(data: Uint8Array): PublicKey;
    /**
     * @param {Uint8Array} data
     * @returns {PublicKey}
     */
    static fromBytesECDSA(data: Uint8Array): PublicKey;
    /**
     * Parse a public key from a string of hexadecimal digits.
     *
     * The public key may optionally be prefixed with
     * the DER header.
     *
     * @param {string} text
     * @returns {PublicKey}
     */
    static fromString(text: string): PublicKey;
    /**
     * @internal
     * @hideconstructor
     * @param {cryptography.PublicKey} key
     */
    constructor(key: cryptography.PublicKey);
    _key: cryptography.PublicKey;
    /**
     * Verify a signature on a message with this public key.
     *
     * @param {Uint8Array} message
     * @param {Uint8Array} signature
     * @returns {boolean}
     */
    verify(message: Uint8Array, signature: Uint8Array): boolean;
    /**
     * @param {Transaction} transaction
     * @returns {boolean}
     */
    verifyTransaction(transaction: Transaction): boolean;
    /**
     * @returns {Uint8Array}
     */
    toBytes(): Uint8Array;
    /**
     * @returns {Uint8Array}
     */
    toBytesDer(): Uint8Array;
    /**
     * @returns {Uint8Array}
     */
    toBytesRaw(): Uint8Array;
    /**
     * @returns {string}
     */
    toStringDer(): string;
    /**
     * @returns {string}
     */
    toStringRaw(): string;
    /**
     * @param {PublicKey} other
     * @returns {boolean}
     */
    equals(other: PublicKey): boolean;
    /**
     * @param {Uint8Array} signature
     * @returns {proto.ISignaturePair}
     */
    _toProtobufSignature(signature: Uint8Array): proto.ISignaturePair;
    /**
     * @param {Long | number} shard
     * @param {Long | number} realm
     * @returns {AccountId}
     */
    toAccountId(shard: Long | number, realm: Long | number): AccountId;
}
export type Transaction = import("./transaction/Transaction.js").default;
export type AccountId = import("./account/AccountId.js").default;
export namespace proto {
    type IKey = import("@hashgraph/proto").IKey;
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignaturePair = import("@hashgraph/proto").ISignaturePair;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
}
import Key from "./Key.js";
import * as cryptography from "@hashgraph/cryptography";
