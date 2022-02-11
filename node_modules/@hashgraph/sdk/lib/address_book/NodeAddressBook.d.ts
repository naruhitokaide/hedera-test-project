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
export default class NodeAddressBook {
    /**
     * @internal
     * @param {proto.INodeAddressBook} nodeAddressBook
     * @returns {NodeAddressBook}
     */
    static _fromProtobuf(nodeAddressBook: proto.INodeAddressBook): NodeAddressBook;
    /**
     * @param {object} props
     * @param {NodeAddress[]} [props.nodeAddresses]
     */
    constructor(props?: {
        nodeAddresses?: NodeAddress[] | undefined;
    });
    /**
     * @type {NodeAddress[]}
     */
    _nodeAddresses: NodeAddress[];
    /**
     * @returns {NodeAddress[]}
     */
    get nodeAddresses(): NodeAddress[];
    /**
     * @param {NodeAddress[]} nodeAddresses
     * @returns {this}
     */
    setNodeAddresses(nodeAddresses: NodeAddress[]): this;
    /**
     * @returns {proto.INodeAddressBook}
     */
    _toProtobuf(): proto.INodeAddressBook;
    /**
     * @returns {string}
     */
    toString(): string;
    /**
     * @returns {NodeAddressBookJson}
     */
    toJSON(): NodeAddressBookJson;
}
export namespace proto {
    type INodeAddressBook = import("@hashgraph/proto").INodeAddressBook;
}
export type NodeAddressJson = import("./NodeAddress.js").NodeAddressJson;
export type NodeAddressBookJson = {
    nodeAddresses: NodeAddressJson[];
};
import NodeAddress from "./NodeAddress.js";
