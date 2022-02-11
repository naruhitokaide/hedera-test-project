"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Cache = _interopRequireDefault(require("./Cache.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IKey} proto.IKey
 */
class Key {
  /**
   * @internal
   * @abstract
   * @returns {proto.IKey}
   */
  // eslint-disable-next-line jsdoc/require-returns-check
  _toProtobufKey() {
    throw new Error("not implemented");
  }
  /**
   * @internal
   * @param {proto.IKey} key
   * @returns {Key}
   */


  static _fromProtobufKey(key) {
    if (key.contractID != null) {
      if (_Cache.default.contractId == null) {
        throw new Error("`ContractId` was not loaded before decoding `Key`");
      }

      return _Cache.default.contractId(key.contractID);
    }

    if (key.delegatableContractId != null) {
      if (_Cache.default.delegateContractId == null) {
        throw new Error("`ContractId` was not loaded before decoding `Key`");
      }

      return _Cache.default.delegateContractId(key.delegatableContractId);
    }

    if (key.ed25519 != null && key.ed25519.byteLength > 0) {
      if (_Cache.default.publicKeyED25519 == null) {
        throw new Error("`PublicKey` was not loaded before decoding `Key`");
      }

      return _Cache.default.publicKeyED25519(key.ed25519);
    }

    if (key.ECDSASecp256k1 != null && key.ECDSASecp256k1.byteLength > 0) {
      if (_Cache.default.publicKeyECDSA == null) {
        throw new Error("`PublicKey` was not loaded before decoding `Key`");
      }

      return _Cache.default.publicKeyECDSA(key.ECDSASecp256k1);
    }

    if (key.thresholdKey != null && key.thresholdKey.threshold != null) {
      if (_Cache.default.thresholdKey == null) {
        throw new Error("`PublicKey` was not loaded before decoding `Key`");
      }

      return _Cache.default.thresholdKey(key.thresholdKey);
    }

    if (key.keyList != null) {
      if (_Cache.default.keyList == null) {
        throw new Error("`PublicKey` was not loaded before decoding `Key`");
      }

      return _Cache.default.keyList(key.keyList);
    }

    throw new Error(`(BUG) keyFromProtobuf: not implemented key case: ${JSON.stringify(key)}`);
  }

}

exports.default = Key;