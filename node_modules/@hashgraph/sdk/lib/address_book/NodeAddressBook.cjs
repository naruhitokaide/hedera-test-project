"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NodeAddress = _interopRequireDefault(require("./NodeAddress.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").INodeAddressBook} proto.INodeAddressBook
 */

/**
 * @typedef {import("./NodeAddress.js").NodeAddressJson} NodeAddressJson
 */

/**
 * @typedef {object} NodeAddressBookJson
 * @property {NodeAddressJson[]} nodeAddresses
 */
class NodeAddressBook {
  /**
   * @param {object} props
   * @param {NodeAddress[]} [props.nodeAddresses]
   */
  constructor(props = {}) {
    /**
     * @type {NodeAddress[]}
     */
    this._nodeAddresses = [];

    if (props.nodeAddresses != null) {
      this.setNodeAddresses(props.nodeAddresses);
    }
  }
  /**
   * @returns {NodeAddress[]}
   */


  get nodeAddresses() {
    return this._nodeAddresses;
  }
  /**
   * @param {NodeAddress[]} nodeAddresses
   * @returns {this}
   */


  setNodeAddresses(nodeAddresses) {
    this._nodeAddresses = nodeAddresses;
    return this;
  }
  /**
   * @internal
   * @param {proto.INodeAddressBook} nodeAddressBook
   * @returns {NodeAddressBook}
   */


  static _fromProtobuf(nodeAddressBook) {
    return new NodeAddressBook({
      nodeAddresses: nodeAddressBook.nodeAddress != null ? nodeAddressBook.nodeAddress.map(nodeAddress => _NodeAddress.default._fromProtobuf(nodeAddress)) : undefined
    });
  }
  /**
   * @returns {proto.INodeAddressBook}
   */


  _toProtobuf() {
    return {
      nodeAddress: this._nodeAddresses.map(nodeAddress => nodeAddress._toProtobuf())
    };
  }
  /**
   * @returns {string}
   */


  toString() {
    return JSON.stringify(this.toJSON());
  }
  /**
   * @returns {NodeAddressBookJson}
   */


  toJSON() {
    return {
      nodeAddresses: this._nodeAddresses.map(nodeAddress => nodeAddress.toJSON())
    };
  }

}

exports.default = NodeAddressBook;