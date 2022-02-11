"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Channel = _interopRequireWildcard(require("./Channel.cjs"));

var base64 = _interopRequireWildcard(require("../encoding/base64.native.cjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class NativeChannel extends _Channel.default {
  /**
   * @param {string} address
   */
  constructor(address) {
    super();
    /**
     * @type {string}
     * @private
     */

    this._address = address;
  }
  /**
   * @override
   * @returns {void}
   */


  close() {// do nothing
  }
  /**
   * @override
   * @protected
   * @param {string} serviceName
   * @returns {import("protobufjs").RPCImpl}
   */


  _createUnaryClient(serviceName) {
    return async (method, requestData, callback) => {
      const data = base64.encode(new Uint8Array((0, _Channel.encodeRequest)(requestData)));
      const response = await fetch(`${this._address}/proto.${serviceName}/${method.name}`, {
        method: "POST",
        headers: {
          "content-type": "application/grpc-web-text",
          "x-user-agent": "hedera-sdk-js/v2",
          "x-accept-content-transfer-encoding": "base64",
          "x-grpc-web": "1"
        },
        body: data
      });
      const blob = await response.blob();
      /** @type {string} */

      const responseData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onloadend = () => {
          resolve(
          /** @type {string} */
          reader.result);
        };

        reader.onerror = reject;
      });
      let responseBuffer;

      if (responseData.startsWith("data:application/octet-stream;base64,")) {
        responseBuffer = base64.decode(responseData.split("data:application/octet-stream;base64,")[1]);
      } else if (responseData.startsWith("data:application/grpc-web+proto;base64,")) {
        responseBuffer = base64.decode(responseData.split("data:application/grpc-web+proto;base64,")[1]);
      } else {
        throw new Error(`Expected response data to be base64 encode with a 'data:application/octet-stream;base64,' or 'data:application/grpc-web+proto;base64,' prefix, but found: ${responseData}`);
      }

      const unaryResponse = (0, _Channel.decodeUnaryResponse)(responseBuffer.buffer, responseBuffer.byteOffset, responseBuffer.byteLength);
      callback(null, unaryResponse);
    };
  }

}

exports.default = NativeChannel;