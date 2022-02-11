"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var entity_id = _interopRequireWildcard(require("../EntityIdHelper.cjs"));

var proto = _interopRequireWildcard(require("@hashgraph/proto"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @typedef {import("long").Long} Long
 * @typedef {import("../client/Client.js").default<*, *>} Client
 */

/**
 * The ID for a crypto-currency file on Hedera.
 */
class FileId {
  /**
   * @param {number | Long | import("../EntityIdHelper").IEntityId} props
   * @param {(number | Long)=} realm
   * @param {(number | Long)=} num
   */
  constructor(props, realm, num) {
    const result = entity_id.constructor(props, realm, num);
    this.shard = result.shard;
    this.realm = result.realm;
    this.num = result.num;
    /**
     * @type {string | null}
     */

    this._checksum = null;
  }
  /**
   * @param {string} text
   * @returns {FileId}
   */


  static fromString(text) {
    const result = entity_id.fromString(text);
    const id = new FileId(result);
    id._checksum = result.checksum;
    return id;
  }
  /**
   * @internal
   * @param {proto.IFileID} id
   * @returns {FileId}
   */


  static _fromProtobuf(id) {
    const fileId = new FileId(id.shardNum != null ? id.shardNum : 0, id.realmNum != null ? id.realmNum : 0, id.fileNum != null ? id.fileNum : 0);
    return fileId;
  }
  /**
   * @returns {string | null}
   */


  get checksum() {
    return this._checksum;
  }
  /**
   * @deprecated - Use `validateChecksum` instead
   * @param {Client} client
   */


  validate(client) {
    console.warn("Deprecated: Use `validateChecksum` instead");
    this.validateChecksum(client);
  }
  /**
   * @param {Client} client
   */


  validateChecksum(client) {
    entity_id.validateChecksum(this.shard, this.realm, this.num, this._checksum, client);
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {FileId}
   */


  static fromBytes(bytes) {
    return FileId._fromProtobuf(proto.FileID.decode(bytes));
  }
  /**
   * @param {string} address
   * @returns {FileId}
   */


  static fromSolidityAddress(address) {
    const [shard, realm, file] = entity_id.fromSolidityAddress(address);
    return new FileId(shard, realm, file);
  }
  /**
   * @returns {string} solidity address
   */


  toSolidityAddress() {
    return entity_id.toSolidityAddress([this.shard, this.realm, this.num]);
  }
  /**
   * @internal
   * @returns {proto.IFileID}
   */


  _toProtobuf() {
    return {
      fileNum: this.num,
      shardNum: this.shard,
      realmNum: this.realm
    };
  }
  /**
   * @returns {string}
   */


  toString() {
    return `${this.shard.toString()}.${this.realm.toString()}.${this.num.toString()}`;
  }
  /**
   * @param {Client} client
   * @returns {string}
   */


  toStringWithChecksum(client) {
    return entity_id.toStringWithChecksum(this.toString(), client);
  }
  /**
   * @returns {Uint8Array}
   */


  toBytes() {
    return proto.FileID.encode(this._toProtobuf()).finish();
  }
  /**
   * @returns {FileId}
   */


  clone() {
    const id = new FileId(this);
    id._checksum = this._checksum;
    return id;
  }
  /**
   * @param {FileId} other
   * @returns {number}
   */


  compare(other) {
    return entity_id.compare([this.shard, this.realm, this.num], [other.shard, other.realm, other.num]);
  }

}

exports.default = FileId;