"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FileId = _interopRequireDefault(require("./FileId.cjs"));

var _Timestamp = _interopRequireDefault(require("../Timestamp.cjs"));

var _long = _interopRequireDefault(require("long"));

var proto = _interopRequireWildcard(require("@hashgraph/proto"));

var _KeyList = _interopRequireDefault(require("../KeyList.cjs"));

var _LedgerId = _interopRequireDefault(require("../LedgerId.cjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Response when the client sends the node CryptoGetInfoQuery.
 */
class FileInfo {
  /**
   * @private
   * @param {object} props
   * @param {FileId} props.fileId
   * @param {Long} props.size
   * @param {Timestamp} props.expirationTime
   * @param {boolean} props.isDeleted
   * @param {KeyList} props.keys
   * @param {string} props.fileMemo
   * @param {LedgerId|null} props.ledgerId
   */
  constructor(props) {
    /**
     * The ID of the file for which information is requested.
     *
     * @readonly
     */
    this.fileId = props.fileId;
    /**
     * Number of bytes in contents.
     *
     * @readonly
     */

    this.size = props.size;
    /**
     * The current time at which this account is set to expire.
     *
     * @readonly
     */

    this.expirationTime = props.expirationTime;
    /**
     * True if deleted but not yet expired.
     *
     * @readonly
     */

    this.isDeleted = props.isDeleted;
    /**
     * One of these keys must sign in order to delete the file.
     * All of these keys must sign in order to update the file.
     *
     * @readonly
     */

    this.keys = props.keys;
    this.fileMemo = props.fileMemo;
    this.ledgerId = props.ledgerId;
    Object.freeze(this);
  }
  /**
   * @internal
   * @param {proto.IFileInfo} info
   * @returns {FileInfo}
   */


  static _fromProtobuf(info) {
    const size =
    /** @type {Long | number} */
    info.size;
    return new FileInfo({
      fileId: _FileId.default._fromProtobuf(
      /** @type {proto.IFileID} */
      info.fileID),
      size: size instanceof _long.default ? size : _long.default.fromValue(size),
      expirationTime: _Timestamp.default._fromProtobuf(
      /** @type {proto.ITimestamp} */
      info.expirationTime),
      isDeleted:
      /** @type {boolean} */
      info.deleted,
      keys: info.keys != null ? _KeyList.default.__fromProtobufKeyList(info.keys) : new _KeyList.default(),
      fileMemo: info.memo != null ? info.memo : "",
      ledgerId: info.ledgerId != null ? _LedgerId.default.fromBytes(info.ledgerId) : null
    });
  }
  /**
   * @internal
   * @returns {proto.IFileInfo}
   */


  _toProtobuf() {
    return {
      fileID: this.fileId._toProtobuf(),
      size: this.size,
      expirationTime: this.expirationTime._toProtobuf(),
      deleted: this.isDeleted,
      keys: this.keys._toProtobufKey().keyList,
      memo: this.fileMemo,
      ledgerId: this.ledgerId != null ? this.ledgerId.toBytes() : null
    };
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {FileInfo}
   */


  static fromBytes(bytes) {
    return FileInfo._fromProtobuf(proto.FileGetInfoResponse.FileInfo.decode(bytes));
  }
  /**
   * @returns {Uint8Array}
   */


  toBytes() {
    return proto.FileGetInfoResponse.FileInfo.encode(this._toProtobuf()).finish();
  }

}

exports.default = FileInfo;