"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var proto = _interopRequireWildcard(require("@hashgraph/proto"));

var _FeeComponents = _interopRequireDefault(require("./FeeComponents"));

var _FeeDataType = _interopRequireDefault(require("./FeeDataType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class FeeData {
  /**
   * @param {object} [props]
   * @param {FeeComponents} [props.nodedata]
   * @param {FeeComponents} [props.networkdata]
   * @param {FeeComponents} [props.servicedata]
   * @param {FeeDataType} [props.feeDataType]
   */
  constructor(props = {}) {
    /*
     * Fee paid to the submitting node
     *
     * @type {FeeComponents}
     */
    this.nodedata = props.nodedata;
    /*
     * Fee paid to the network for processing a transaction into consensus
     *
     * @type {FeeComponents}
     */

    this.networkdata = props.networkdata;
    /*
     * Fee paid to the network for providing the service associated with the transaction; for instance, storing a file
     *
     * @type {FeeComponents}
     */

    this.servicedata = props.servicedata;
    /*
     * SubType distinguishing between different types of FeeData, correlating to the same HederaFunctionality
     *
     * @type {SubType}
     */

    this.feeDataType = props.feeDataType;
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {FeeData}
   */


  static fromBytes(bytes) {
    return FeeData._fromProtobuf(proto.FeeData.decode(bytes));
  }
  /**
   * @internal
   * @param {proto.IFeeData} feeData
   * @returns {FeeData}
   */


  static _fromProtobuf(feeData) {
    return new FeeData({
      nodedata: feeData.nodedata != null ? _FeeComponents.default._fromProtobuf(feeData.nodedata) : undefined,
      networkdata: feeData.networkdata != null ? _FeeComponents.default._fromProtobuf(feeData.networkdata) : undefined,
      servicedata: feeData.servicedata != null ? _FeeComponents.default._fromProtobuf(feeData.servicedata) : undefined,
      feeDataType: feeData.subType != null ? _FeeDataType.default._fromCode(feeData.subType) : undefined
    });
  }
  /**
   * @internal
   * @returns {proto.IFeeData}
   */


  _toProtobuf() {
    return {
      nodedata: this.nodedata != null ? this.nodedata._toProtobuf() : undefined,
      networkdata: this.networkdata != null ? this.networkdata._toProtobuf() : undefined,
      servicedata: this.servicedata != null ? this.servicedata._toProtobuf() : undefined,
      subType: this.feeDataType != null ? this.feeDataType.valueOf() : undefined
    };
  }
  /**
   * @returns {Uint8Array}
   */


  toBytes() {
    return proto.FeeData.encode(this._toProtobuf()).finish();
  }

}

exports.default = FeeData;