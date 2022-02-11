"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Channel = _interopRequireWildcard(require("./Channel.cjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class WebChannel extends _Channel.default {
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
      const response = await fetch(`${this._address}/proto.${serviceName}/${method.name}`, {
        method: "POST",
        headers: {
          "content-type": "application/grpc-web+proto",
          "x-user-agent": "hedera-sdk-js/v2",
          "x-grpc-web": "1"
        },
        body: (0, _Channel.encodeRequest)(requestData)
      });
      const responseBuffer = await response.arrayBuffer();
      const unaryResponse = (0, _Channel.decodeUnaryResponse)(responseBuffer);
      callback(null, unaryResponse);
    };
  }

}

exports.default = WebChannel;