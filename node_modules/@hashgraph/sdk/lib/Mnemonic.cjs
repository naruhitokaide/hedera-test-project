"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var cryptography = _interopRequireWildcard(require("@hashgraph/cryptography"));

var _Cache = _interopRequireDefault(require("./Cache.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @typedef {import("./PrivateKey.js").default} PrivateKey
 */

/**
 * Multi-word mnemonic phrase (BIP-39).
 *
 * Compatible with the official Hedera mobile
 * wallets (24-words or 22-words) and BRD (12-words).
 */
class Mnemonic {
  /**
   * @param {cryptography.Mnemonic} mnemonic
   * @hideconstructor
   * @private
   */
  constructor(mnemonic) {
    this._mnemonic = mnemonic;
  }
  /**
   * Returns a new random 24-word mnemonic from the BIP-39
   * standard English word list.
   *
   * @returns {Promise<Mnemonic>}
   */


  static async generate() {
    return new Mnemonic(await cryptography.Mnemonic._generate(24));
  }
  /**
   * Returns a new random 12-word mnemonic from the BIP-39
   * standard English word list.
   *
   * @returns {Promise<Mnemonic>}
   */


  static async generate12() {
    return new Mnemonic(await cryptography.Mnemonic._generate(12));
  }
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


  static async fromWords(words) {
    return new Mnemonic(await cryptography.Mnemonic.fromWords(words));
  }
  /**
   * Recover a private key from this mnemonic phrase, with an
   * optional passphrase.
   *
   * @param {string} [passphrase]
   * @returns {Promise<PrivateKey>}
   */


  async toPrivateKey(passphrase = "") {
    if (_Cache.default.privateKeyConstructor == null) {
      throw new Error("`PrivateKey` has not been loaded");
    }

    return _Cache.default.privateKeyConstructor(await this._mnemonic.toPrivateKey(passphrase));
  }
  /**
   * Recover a mnemonic phrase from a string, splitting on spaces. Handles 12, 22 (legacy), and 24 words.
   *
   * @param {string} mnemonic
   * @returns {Promise<Mnemonic>}
   */


  static async fromString(mnemonic) {
    return new Mnemonic(await cryptography.Mnemonic.fromString(mnemonic));
  }
  /**
   * @returns {Promise<PrivateKey>}
   */


  async toLegacyPrivateKey() {
    if (_Cache.default.privateKeyConstructor == null) {
      throw new Error("`PrivateKey` has not been loaded");
    }

    return _Cache.default.privateKeyConstructor(await this._mnemonic.toLegacyPrivateKey());
  }
  /**
   * @returns {string}
   */


  toString() {
    return this._mnemonic.toString();
  }

}

exports.default = Mnemonic;