"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BadEntityIdException extends Error {
  /**
   * @param {Long} shard
   * @param {Long} realm
   * @param {Long} num
   * @param {string} presentChecksum
   * @param {string} expectedChecksum
   */
  constructor(shard, realm, num, presentChecksum, expectedChecksum) {
    super(`Entity ID ${shard.toString()}.${realm.toString()}.${num.toString()}-${presentChecksum} was incorrect.`);
    this.name = "BadEntityIdException";
    this.shard = shard;
    this.realm = realm;
    this.num = num;
    this.presentChecksum = presentChecksum;
    this.expectedChecksum = expectedChecksum;
  }

}

exports.default = BadEntityIdException;