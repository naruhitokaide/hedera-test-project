"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ManagedNode = _interopRequireDefault(require("./ManagedNode.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {import("./channel/MirrorChannel.js").default} MirrorChannel
 * @typedef {import("./ManagedNodeAddress.js").default} ManagedNodeAddress
 */

/**
 * @typedef {object} NewNode
 * @property {string} address
 * @property {(address: string, cert?: string) => MirrorChannel} channelInitFunction
 */

/**
 * @typedef {object} CloneNode
 * @property {MirrorNode} node
 * @property {ManagedNodeAddress} address
 */

/**
 * @augments {ManagedNode<MirrorChannel>}
 */
class MirrorNode extends _ManagedNode.default {
  /**
   * @param {object} props
   * @param {NewNode=} [props.newNode]
   * @param {CloneNode=} [props.cloneNode]
   */
  constructor(props = {}) {
    super(props);
  }
  /**
   * @returns {string}
   */


  getKey() {
    return this._address.toString();
  }
  /**
   * @returns {MirrorNode}
   */


  toInsecure() {
    return new MirrorNode({
      cloneNode: {
        node: this,
        address: this._address.toInsecure()
      }
    });
  }
  /**
   * @returns {MirrorNode}
   */


  toSecure() {
    return new MirrorNode({
      cloneNode: {
        node: this,
        address: this._address.toSecure()
      }
    });
  }

}

exports.default = MirrorNode;