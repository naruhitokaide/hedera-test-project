"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var proto = _interopRequireWildcard(require("@hashgraph/proto"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class SemanticVersion {
  /**
   * @private
   * @param {object} props
   * @param {number} props.major
   * @param {number} props.minor
   * @param {number} props.patch
   */
  constructor(props) {
    /** @readonly */
    this.major = props.major;
    /** @readonly */

    this.minor = props.minor;
    /** @readonly */

    this.patch = props.patch;
    Object.freeze(this);
  }
  /**
   * @internal
   * @param {proto.ISemanticVersion} version
   * @returns {SemanticVersion}
   */


  static _fromProtobuf(version) {
    return new SemanticVersion({
      major:
      /** @type {number} */
      version.major,
      minor:
      /** @type {number} */
      version.minor,
      patch:
      /** @type {number} */
      version.patch
    });
  }
  /**
   * @internal
   * @returns {proto.ISemanticVersion}
   */


  _toProtobuf() {
    return {
      major: this.major,
      minor: this.minor,
      patch: this.patch
    };
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {SemanticVersion}
   */


  static fromBytes(bytes) {
    return SemanticVersion._fromProtobuf(proto.SemanticVersion.decode(bytes));
  }
  /**
   * @returns {Uint8Array}
   */


  toBytes() {
    return proto.SemanticVersion.encode(this._toProtobuf()).finish();
  }

}

exports.default = SemanticVersion;