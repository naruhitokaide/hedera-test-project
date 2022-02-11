"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Query = _interopRequireWildcard(require("../query/Query.cjs"));

var _FileId = _interopRequireDefault(require("./FileId.cjs"));

var _FileInfo = _interopRequireDefault(require("./FileInfo.cjs"));

var _Hbar = _interopRequireDefault(require("../Hbar.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").IFileGetInfoQuery} proto.IFileGetInfoQuery
 * @typedef {import("@hashgraph/proto").IFileGetInfoResponse} proto.IFileGetInfoResponse
 * @typedef {import("@hashgraph/proto").IFileInfo} proto.IFileInfo
 */

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 */

/**
 * @augments {Query<FileInfo>}
 */
class FileInfoQuery extends _Query.default {
  /**
   * @param {object} [props]
   * @param {FileId | string} [props.fileId]
   */
  constructor(props = {}) {
    super();
    /**
     * @type {?FileId}
     * @private
     */

    this._fileId = null;

    if (props.fileId != null) {
      this.setFileId(props.fileId);
    }
  }
  /**
   * @internal
   * @param {proto.IQuery} query
   * @returns {FileInfoQuery}
   */


  static _fromProtobuf(query) {
    const info =
    /** @type {proto.IFileGetInfoQuery} */
    query.fileGetInfo;
    return new FileInfoQuery({
      fileId: info.fileID != null ? _FileId.default._fromProtobuf(info.fileID) : undefined
    });
  }
  /**
   * @returns {?FileId}
   */


  get fileId() {
    return this._fileId;
  }
  /**
   * Set the file ID for which the info is being requested.
   *
   * @param {FileId | string} fileId
   * @returns {FileInfoQuery}
   */


  setFileId(fileId) {
    this._fileId = typeof fileId === "string" ? _FileId.default.fromString(fileId) : fileId.clone();
    return this;
  }
  /**
   * @override
   * @param {import("../client/Client.js").default<Channel, *>} client
   * @returns {Promise<Hbar>}
   */


  async getCost(client) {
    let cost = await super.getCost(client);

    if (cost.toTinybars().greaterThan(25)) {
      return cost;
    } else {
      return _Hbar.default.fromTinybars(25);
    }
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._fileId != null) {
      this._fileId.validateChecksum(client);
    }
  }
  /**
   * @override
   * @internal
   * @param {Channel} channel
   * @param {proto.IQuery} request
   * @returns {Promise<proto.IResponse>}
   */


  _execute(channel, request) {
    return channel.file.getFileInfo(request);
  }
  /**
   * @override
   * @internal
   * @param {proto.IResponse} response
   * @returns {proto.IResponseHeader}
   */


  _mapResponseHeader(response) {
    const fileGetInfo =
    /** @type {proto.IFileGetInfoResponse} */
    response.fileGetInfo;
    return (
      /** @type {proto.IResponseHeader} */
      fileGetInfo.header
    );
  }
  /**
   * @protected
   * @override
   * @param {proto.IResponse} response
   * @param {AccountId} nodeAccountId
   * @param {proto.IQuery} request
   * @returns {Promise<FileInfo>}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  _mapResponse(response, nodeAccountId, request) {
    const info =
    /** @type {proto.IFileGetInfoResponse} */
    response.fileGetInfo;
    return Promise.resolve(_FileInfo.default._fromProtobuf(
    /** @type {proto.IFileInfo} */
    info.fileInfo));
  }
  /**
   * @override
   * @internal
   * @param {proto.IQueryHeader} header
   * @returns {proto.IQuery}
   */


  _onMakeRequest(header) {
    return {
      fileGetInfo: {
        header,
        fileID: this._fileId != null ? this._fileId._toProtobuf() : null
      }
    };
  }

} // eslint-disable-next-line @typescript-eslint/unbound-method


exports.default = FileInfoQuery;

_Query.QUERY_REGISTRY.set("fileGetInfo", FileInfoQuery._fromProtobuf);