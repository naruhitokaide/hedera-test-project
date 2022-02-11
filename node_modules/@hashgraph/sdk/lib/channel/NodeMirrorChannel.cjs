"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var grpc = _interopRequireWildcard(require("@grpc/grpc-js"));

var _MirrorChannel = _interopRequireDefault(require("./MirrorChannel.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("./MirrorChannel.js").MirrorError} MirrorError
 */

/**
 * @internal
 */
class NodeMirrorChannel extends _MirrorChannel.default {
  /**
   * @internal
   * @param {string} address
   */
  constructor(address) {
    super();
    /**
     * @type {grpc.Client}
     * @private
     */

    this._client = new grpc.Client(address, address.endsWith(":50212") || address.endsWith(":443") ? grpc.credentials.createSsl() : grpc.credentials.createInsecure());
  }
  /**
   * @override
   * @returns {void}
   */


  close() {
    this._client.close();
  }
  /**
   * @override
   * @internal
   * @param {Uint8Array} requestData
   * @param {(data: Uint8Array) => void} callback
   * @param {(error: MirrorError | Error) => void} error
   * @param {() => void} end
   * @returns {() => void}
   */


  makeServerStreamRequest(requestData, callback, error, end) {
    const stream = this._client.makeServerStreamRequest( // `/proto.ConsensusService/SubscribeTopic`,
    "/com.hedera.mirror.api.proto.ConsensusService/subscribeTopic", value => value, value => value, Buffer.from(requestData)).on("data", (
    /** @type {Uint8Array} */
    data) => {
      callback(data);
    }).on("status", (
    /** @type {grpc.StatusObject} */
    status) => {
      if (status.code == 0) {
        end();
      } else {
        error(status);
      }
    }) // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .on("error", (
    /** @type {grpc.StatusObject} */
    _) => {// Do nothing
    });

    return () => {
      stream.cancel();
    };
  }

}

exports.default = NodeMirrorChannel;