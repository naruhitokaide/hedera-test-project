/**
 * Multi-word mnemonic phrase (BIP-39).
 *
 * Compatible with the official Hedera mobile
 * wallets (24-words or 22-words) and BRD (12-words).
 */
export default class Mnemonic {
    /**
     * Returns a new random 24-word mnemonic from the BIP-39
     * standard English word list.
     *
     * @returns {Promise<Mnemonic>}
     */
    static generate(): Promise<Mnemonic>;
    /**
     * Returns a new random 12-word mnemonic from the BIP-39
     * standard English word list.
     *
     * @returns {Promise<Mnemonic>}
     */
    static generate12(): Promise<Mnemonic>;
    /**
     * @param {number} length
     * @returns {Promise<Mnemonic>}
     */
    static _generate(length: number): Promise<Mnemonic>;
    /**
     * Construct a mnemonic from a list of words. Handles 12, 22 (legacy), and 24 words.
     *
     * An exception of BadMnemonicError will be thrown if the mnemonic
     * contains unknown words or fails the checksum. An invalid mnemonic
     * can still be used to create private keys, the exception will
     * contain the failing mnemonic in case you wish to ignore the
     * validation error and continue.
     *
     * @param {string[]} words
     * @throws {BadMnemonicError}
     * @returns {Promise<Mnemonic>}
     */
    static fromWords(words: string[]): Promise<Mnemonic>;
    /**
     * Recover a mnemonic phrase from a string, splitting on spaces. Handles 12, 22 (legacy), and 24 words.
     *
     * @param {string} mnemonic
     * @returns {Promise<Mnemonic>}
     */
    static fromString(mnemonic: string): Promise<Mnemonic>;
    /**
     * @param {Object} props
     * @param {string[]} props.words
     * @param {boolean} props.legacy
     * @throws {BadMnemonicError}
     * @hideconstructor
     * @private
     */
    private constructor();
    words: string[];
    _isLegacy: boolean;
    /**
     * Recover a private key from this mnemonic phrase, with an
     * optional passphrase.
     *
     * @param {string} [passphrase]
     * @returns {Promise<PrivateKey>}
     */
    toPrivateKey(passphrase?: string | undefined): Promise<PrivateKey>;
    /**
     * @returns {Promise<Mnemonic>}
     * @private
     */
    private _validate;
    /**
     * @private
     * @param {string} passphrase
     * @returns {Promise<PrivateKey>}
     */
    private _toPrivateKey;
    /**
     * @returns {Promise<PrivateKey>}
     */
    toLegacyPrivateKey(): Promise<PrivateKey>;
    /**
     * @returns {string}
     */
    toString(): string;
}
import PrivateKey from "./PrivateKey.js";
