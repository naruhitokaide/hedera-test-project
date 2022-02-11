/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../address_book/NodeAddressBook.js").default} NodeAddressBook
 */
/**
 * @augments {ManagedNetwork<Channel, Node, AccountId>}
 */
export default class Network extends ManagedNetwork<import("../channel/Channel.js").default, Node, AccountId> {
    /**
     * @param {(address: string) => Channel} createNetworkChannel
     */
    constructor(createNetworkChannel: (address: string) => Channel);
    _maxNodesPerTransaction: number;
    /** @type {NodeAddressBook | null} */
    _addressBook: NodeAddressBook | null;
    /**
     * @param {{[key: string]: (string | AccountId)}} network
     */
    setNetwork(network: {
        [key: string]: string | AccountId;
    }): void;
    /**
     * @returns {{[key: string]: (string | AccountId)}}
     */
    get network(): {
        [key: string]: string | AccountId;
    };
    /**
     * @abstract
     * @param {[string, (string | AccountId)]} entry
     * @returns {boolean}
     */
    _checkNetworkContainsEntry(entry: [string, (string | AccountId)]): boolean;
    /**
     * @returns {number}
     */
    get maxNodesPerTransaction(): number;
    /**
     * @param {number} maxNodesPerTransaction
     * @returns {this}
     */
    setMaxNodesPerTransaction(maxNodesPerTransaction: number): this;
    /**
     * @internal
     * @returns {number}
     */
    getNumberOfNodesForTransaction(): number;
    /**
     * @internal
     * @returns {AccountId[]}
     */
    getNodeAccountIdsForExecute(): AccountId[];
}
export type Channel = import("../channel/Channel.js").default;
export type NodeAddressBook = import("../address_book/NodeAddressBook.js").default;
import Node from "../Node.js";
import AccountId from "../account/AccountId.js";
import ManagedNetwork from "./ManagedNetwork.js";
