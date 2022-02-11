export namespace Network {
    /**
     * @param {string} name
     * @returns {{[key: string]: (string | AccountId)}}
     */
    function fromName(name: string): {
        [key: string]: string | AccountId;
    };
    /**
     * @param {string} name
     * @returns {{[key: string]: (string | AccountId)}}
     */
    function fromName(name: string): {
        [key: string]: string | AccountId;
    };
    const MAINNET: {
        "35.237.200.180:50211": AccountId;
        "35.186.191.247:50211": AccountId;
        "35.192.2.25:50211": AccountId;
        "35.199.161.108:50211": AccountId;
        "35.203.82.240:50211": AccountId;
        "35.236.5.219:50211": AccountId;
        "35.197.192.225:50211": AccountId;
        "35.242.233.154:50211": AccountId;
        "35.240.118.96:50211": AccountId;
        "35.204.86.32:50211": AccountId;
        "35.234.132.107:50211": AccountId;
        "35.236.2.27:50211": AccountId;
        "35.228.11.53:50211": AccountId;
        "34.91.181.183:50211": AccountId;
        "34.86.212.247:50211": AccountId;
        "172.105.247.67:50211": AccountId;
        "34.89.87.138:50211": AccountId;
        "34.82.78.255:50211": AccountId;
    };
    const TESTNET: {
        "0.testnet.hedera.com:50211": AccountId;
        "1.testnet.hedera.com:50211": AccountId;
        "2.testnet.hedera.com:50211": AccountId;
        "3.testnet.hedera.com:50211": AccountId;
        "4.testnet.hedera.com:50211": AccountId;
    };
    const PREVIEWNET: {
        "0.previewnet.hedera.com:50211": AccountId;
        "1.previewnet.hedera.com:50211": AccountId;
        "2.previewnet.hedera.com:50211": AccountId;
        "3.previewnet.hedera.com:50211": AccountId;
        "4.previewnet.hedera.com:50211": AccountId;
    };
}
export namespace MirrorNetwork {
    /**
     * @param {string} name
     * @returns {string[]}
     */
    export function fromName(name: string): string[];
    /**
     * @param {string} name
     * @returns {string[]}
     */
    export function fromName(name: string): string[];
    const MAINNET_1: string[];
    export { MAINNET_1 as MAINNET };
    const TESTNET_1: string[];
    export { TESTNET_1 as TESTNET };
    const PREVIEWNET_1: string[];
    export { PREVIEWNET_1 as PREVIEWNET };
}
/**
 * @augments {Client<NodeChannel, NodeMirrorChannel>}
 */
export default class NodeClient extends Client<NodeChannel, NodeMirrorChannel> {
    /**
     * @param {string | ClientConfiguration} data
     * @returns {NodeClient}
     */
    static fromConfig(data: string | ClientConfiguration): NodeClient;
    /**
     * @param {string} filename
     * @returns {Promise<NodeClient>}
     */
    static fromConfigFile(filename: string): Promise<NodeClient>;
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
    static forNetwork(network: {
        [key: string]: string | AccountId;
    }): NodeClient;
    /**
     * @param {string} network
     * @returns {NodeClient}
     */
    static forName(network: string): NodeClient;
    /**
     * Construct a Hedera client pre-configured for Mainnet access.
     *
     * @returns {NodeClient}
     */
    static forMainnet(): NodeClient;
    /**
     * Construct a Hedera client pre-configured for Testnet access.
     *
     * @returns {NodeClient}
     */
    static forTestnet(): NodeClient;
    /**
     * Construct a Hedera client pre-configured for Previewnet access.
     *
     * @returns {NodeClient}
     */
    static forPreviewnet(): NodeClient;
    /**
     * @param {ClientConfiguration} [props]
     */
    constructor(props?: import("./Client.js").ClientConfiguration | undefined);
}
export type ClientConfiguration = import("./Client.js").ClientConfiguration;
import AccountId from "../account/AccountId.js";
import NodeChannel from "../channel/NodeChannel.js";
import NodeMirrorChannel from "../channel/NodeMirrorChannel.js";
import Client from "./Client.js";
