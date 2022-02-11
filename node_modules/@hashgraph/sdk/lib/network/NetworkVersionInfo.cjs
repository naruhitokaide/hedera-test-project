"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SemanticVersion = _interopRequireDefault(require("./SemanticVersion.cjs"));

var proto = _interopRequireWildcard(require("@hashgraph/proto"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Response when the client sends the node CryptoGetVersionInfoQuery.
 */
class NetworkVersionInfo {
  /**
   * @private
   * @param {object} props
   * @param {SemanticVersion} props.protobufVersion
   * @param {SemanticVersion} props.servicesVesion
   */
  constructor(props) {
    /**
     * The account ID for which this information applies.
     *
     * @readonly
     */
    this.protobufVersion = props.protobufVersion;
    /**
     * The account ID for which this information applies.
     *
     * @readonly
     */

    this.servicesVesion = props.servicesVesion;
    Object.freeze(this);
  }
  /**
   * @internal
   * @param {proto.INetworkGetVersionInfoResponse} info
   * @returns {NetworkVersionInfo}
   */


  static _fromProtobuf(info) {
    return new NetworkVersionInfo({
      protobufVersion: _SemanticVersion.default._fromProtobuf(
      /** @type {proto.ISemanticVersion} */
      info.hapiProtoVersion),
      servicesVesion: _SemanticVersion.default._fromProtobuf(
      /** @type {proto.ISemanticVersion} */
      info.hederaServicesVersion)
    });
  }
  /**
   * @internal
   * @returns {proto.INetworkGetVersionInfoResponse}
   */


  _toProtobuf() {
    return {
      hapiProtoVersion: this.protobufVersion._toProtobuf(),
      hederaServicesVersion: this.servicesVesion._toProtobuf()
    };
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {NetworkVersionInfo}
   */


  static fromBytes(bytes) {
    return NetworkVersionInfo._fromProtobuf(proto.NetworkGetVersionInfoResponse.decode(bytes));
  }
  /**
   * @returns {Uint8Array}
   */


  toBytes() {
    return proto.NetworkGetVersionInfoResponse.encode(this._toProtobuf()).finish();
  }

}

exports.default = NetworkVersionInfo;