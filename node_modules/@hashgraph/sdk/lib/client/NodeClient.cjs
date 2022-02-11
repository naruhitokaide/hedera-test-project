"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Network = exports.MirrorNetwork = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _util = _interopRequireDefault(require("util"));

var _Client = _interopRequireDefault(require("./Client.cjs"));

var _NodeChannel = _interopRequireDefault(require("../channel/NodeChannel.cjs"));

var _NodeMirrorChannel = _interopRequireDefault(require("../channel/NodeMirrorChannel.cjs"));

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

var _LedgerId = _interopRequireDefault(require("../LedgerId.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const readFileAsync = _util.default.promisify(_fs.default.readFile);
/**
 * @typedef {import("./Client.js").ClientConfiguration} ClientConfiguration
 */
//@typedef {import("./Client.js").NetworkName} NetworkName


const Network = {
  /**
   * @param {string} name
   * @returns {{[key: string]: (string | AccountId)}}
   */
  fromName(name) {
    switch (name) {
      case "mainnet":
        return Network.MAINNET;

      case "testnet":
        return Network.TESTNET;

      case "previewnet":
        return Network.PREVIEWNET;

      default:
        throw new Error(`unknown network name: ${name}`);
    }
  },

  MAINNET: {
    "35.237.200.180:50211": new _AccountId.default(3),
    "35.186.191.247:50211": new _AccountId.default(4),
    "35.192.2.25:50211": new _AccountId.default(5),
    "35.199.161.108:50211": new _AccountId.default(6),
    "35.203.82.240:50211": new _AccountId.default(7),
    "35.236.5.219:50211": new _AccountId.default(8),
    "35.197.192.225:50211": new _AccountId.default(9),
    "35.242.233.154:50211": new _AccountId.default(10),
    "35.240.118.96:50211": new _AccountId.default(11),
    "35.204.86.32:50211": new _AccountId.default(12),
    "35.234.132.107:50211": new _AccountId.default(13),
    "35.236.2.27:50211": new _AccountId.default(14),
    "35.228.11.53:50211": new _AccountId.default(15),
    "34.91.181.183:50211": new _AccountId.default(16),
    "34.86.212.247:50211": new _AccountId.default(17),
    "172.105.247.67:50211": new _AccountId.default(18),
    "34.89.87.138:50211": new _AccountId.default(19),
    "34.82.78.255:50211": new _AccountId.default(20)
  },
  TESTNET: {
    "0.testnet.hedera.com:50211": new _AccountId.default(3),
    "1.testnet.hedera.com:50211": new _AccountId.default(4),
    "2.testnet.hedera.com:50211": new _AccountId.default(5),
    "3.testnet.hedera.com:50211": new _AccountId.default(6),
    "4.testnet.hedera.com:50211": new _AccountId.default(7)
  },
  PREVIEWNET: {
    "0.previewnet.hedera.com:50211": new _AccountId.default(3),
    "1.previewnet.hedera.com:50211": new _AccountId.default(4),
    "2.previewnet.hedera.com:50211": new _AccountId.default(5),
    "3.previewnet.hedera.com:50211": new _AccountId.default(6),
    "4.previewnet.hedera.com:50211": new _AccountId.default(7)
  }
};
exports.Network = Network;
const MirrorNetwork = {
  /**
   * @param {string} name
   * @returns {string[]}
   */
  fromName(name) {
    switch (name) {
      case "mainnet":
        return MirrorNetwork.MAINNET;

      case "testnet":
        return MirrorNetwork.TESTNET;

      case "previewnet":
        return MirrorNetwork.PREVIEWNET;

      default:
        throw new Error(`unknown network name: ${name}`);
    }
  },

  MAINNET: ["hcs.mainnet.mirrornode.hedera.com:5600"],
  TESTNET: ["hcs.testnet.mirrornode.hedera.com:5600"],
  PREVIEWNET: ["hcs.previewnet.mirrornode.hedera.com:5600"]
};
/**
 * @augments {Client<NodeChannel, NodeMirrorChannel>}
 */

exports.MirrorNetwork = MirrorNetwork;

class NodeClient extends _Client.default {
  /**
   * @param {ClientConfiguration} [props]
   */
  constructor(props) {
    super(props);

    if (props != null) {
      if (typeof props.network === "string") {
        switch (props.network) {
          case "mainnet":
            this.setNetwork(Network.MAINNET);
            this.setMirrorNetwork(MirrorNetwork.MAINNET);
            this.setLedgerId(_LedgerId.default.MAINNET);
            break;

          case "testnet":
            this.setNetwork(Network.TESTNET);
            this.setMirrorNetwork(MirrorNetwork.TESTNET);
            this.setLedgerId(_LedgerId.default.TESTNET);
            break;

          case "previewnet":
            this.setNetwork(Network.PREVIEWNET);
            this.setMirrorNetwork(MirrorNetwork.PREVIEWNET);
            this.setLedgerId(_LedgerId.default.PREVIEWNET);
            break;

          default:
            throw new Error( // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `unknown network: ${props.network}`);
        }
      } else if (props.network != null) {
        this.setNetwork(props.network);
      }

      if (typeof props.mirrorNetwork === "string") {
        switch (props.mirrorNetwork) {
          case "mainnet":
            this.setMirrorNetwork(MirrorNetwork.MAINNET);
            break;

          case "testnet":
            this.setMirrorNetwork(MirrorNetwork.TESTNET);
            break;

          case "previewnet":
            this.setMirrorNetwork(MirrorNetwork.PREVIEWNET);
            break;

          default:
            this.setMirrorNetwork([props.mirrorNetwork]);
            break;
        }
      } else if (props.mirrorNetwork != null) {
        this.setMirrorNetwork(props.mirrorNetwork);
      }
    }
  }
  /**
   * @param {string | ClientConfiguration} data
   * @returns {NodeClient}
   */


  static fromConfig(data) {
    return new NodeClient(typeof data === "string" ?
    /** @type {ClientConfiguration | undefined} */
    JSON.parse(data) : data);
  }
  /**
   * @param {string} filename
   * @returns {Promise<NodeClient>}
   */


  static async fromConfigFile(filename) {
    return NodeClient.fromConfig(await readFileAsync(filename, "utf8"));
  }
  /**
   * Construct a client for a specific network.
   *
   * It is the responsibility of the caller to ensure that all nodes in the map are part of the
   * same Hedera network. Failure to do so will result in undefined behavior.
   *
   * The client will load balance all requests to Hedera using a simple round-robin scheme to
   * chose nodes to send transactions to. For one transaction, at most 1/3 of the nodes will be
   * tried.
   *
   * @param {{[key: string]: (string | AccountId)}} network
   * @returns {NodeClient}
   */


  static forNetwork(network) {
    return new NodeClient({
      network
    });
  }
  /**
   * @param {string} network
   * @returns {NodeClient}
   */


  static forName(network) {
    return new NodeClient({
      network
    });
  }
  /**
   * Construct a Hedera client pre-configured for Mainnet access.
   *
   * @returns {NodeClient}
   */


  static forMainnet() {
    return new NodeClient({
      network: "mainnet"
    });
  }
  /**
   * Construct a Hedera client pre-configured for Testnet access.
   *
   * @returns {NodeClient}
   */


  static forTestnet() {
    return new NodeClient({
      network: "testnet"
    });
  }
  /**
   * Construct a Hedera client pre-configured for Previewnet access.
   *
   * @returns {NodeClient}
   */


  static forPreviewnet() {
    return new NodeClient({
      network: "previewnet"
    });
  }
  /**
   * @param {{[key: string]: (string | AccountId)} | string} network
   * @returns {void}
   */


  setNetwork(network) {
    if (typeof network === "string") {
      switch (network) {
        case "previewnet":
          this._network.setNetwork(Network.PREVIEWNET);

          this._network._ledgerId = _LedgerId.default.PREVIEWNET;
          break;

        case "testnet":
          this._network.setNetwork(Network.TESTNET);

          this._network._ledgerId = _LedgerId.default.TESTNET;
          break;

        case "mainnet":
          this._network.setNetwork(Network.MAINNET);

          this._network._ledgerId = _LedgerId.default.MAINNET;
      }
    } else {
      this._network.setNetwork(network);
    }
  }
  /**
   * @param {string[] | string} mirrorNetwork
   * @returns {this}
   */


  setMirrorNetwork(mirrorNetwork) {
    if (typeof mirrorNetwork === "string") {
      switch (mirrorNetwork) {
        case "previewnet":
          this._mirrorNetwork.setNetwork(MirrorNetwork.PREVIEWNET);

          break;

        case "testnet":
          this._mirrorNetwork.setNetwork(MirrorNetwork.TESTNET);

          break;

        case "mainnet":
          this._mirrorNetwork.setNetwork(MirrorNetwork.MAINNET);

          break;

        default:
          this._mirrorNetwork.setNetwork([mirrorNetwork]);

      }
    } else {
      this._mirrorNetwork.setNetwork(mirrorNetwork);
    }

    return this;
  }
  /**
   * @override
   * @returns {(address: string, cert?: string) => NodeChannel}
   */


  _createNetworkChannel() {
    return (address, cert) => new _NodeChannel.default(address, cert);
  }
  /**
   * @override
   * @returns {(address: string) => NodeMirrorChannel}
   */


  _createMirrorNetworkChannel() {
    return address => new _NodeMirrorChannel.default(address);
  }

}

exports.default = NodeClient;