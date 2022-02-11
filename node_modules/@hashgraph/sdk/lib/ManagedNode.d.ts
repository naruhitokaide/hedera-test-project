/**
 * @typedef {import("./account/AccountId.js").default} AccountId
 * @typedef {import("./channel/Channel.js").default} Channel
 * @typedef {import("./channel/MirrorChannel.js").default} MirrorChannel
 * @typedef {import("./address_book/NodeAddress.js").default} NodeAddress
 */
/**
 * @template {Channel | MirrorChannel} ChannelT
 * @typedef {object} NewNode
 * @property {string | ManagedNodeAddress} address
 * @property {(address: string, cert?: string) => ChannelT} channelInitFunction
 */
/**
 * @template {Channel | MirrorChannel} ChannelT
 * @typedef {object} CloneNode
 * @property {ManagedNode<ChannelT>} node
 * @property {ManagedNodeAddress} address
 */
/**
 * @abstract
 * @template {Channel | MirrorChannel} ChannelT
 */
export default class ManagedNode<ChannelT extends import("./channel/Channel.js").default | import("./channel/MirrorChannel.js").default> {
    /**
     * @param {object} props
     * @param {NewNode<ChannelT>=} [props.newNode]
     * @param {CloneNode<ChannelT>=} [props.cloneNode]
     */
    constructor(props?: {
        newNode?: NewNode<ChannelT> | undefined;
        cloneNode?: CloneNode<ChannelT> | undefined;
    });
    _address: ManagedNodeAddress;
    /** @type {string=} */
    _cert: string | undefined;
    /** @type {ChannelT | null} */
    _channel: ChannelT | null;
    /** @type {(address: string, cert?: string) => ChannelT} */
    _channelInitFunction: (address: string, cert?: string | undefined) => ChannelT;
    _currentBackoff: number;
    _lastUsed: number;
    _backoffUntil: number;
    _useCount: number;
    _attempts: number;
    _minBackoff: number;
    _maxBackoff: number;
    /**
     * @abstract
     * @returns {string}
     */
    getKey(): string;
    /**
     * @abstract
     * @returns {ManagedNode<ChannelT>}
     */
    toInsecure(): ManagedNode<ChannelT>;
    /**
     * @abstract
     * @returns {ManagedNode<ChannelT>}
     */
    toSecure(): ManagedNode<ChannelT>;
    /**
     * @param {string} ledgerId
     * @returns {this}
     */
    setCert(ledgerId: string): this;
    /**
     * @returns {ManagedNodeAddress}
     */
    get address(): ManagedNodeAddress;
    /**
     * @returns {number}
     */
    get attempts(): number;
    /**
     * @returns {number}
     */
    get minBackoff(): number;
    /**
     * @param {number} minBackoff
     * @returns {this}
     */
    setMinBackoff(minBackoff: number): this;
    /**
     * @returns {number}
     */
    get maxBackoff(): number;
    /**
     * @param {number} maxBackoff
     * @returns {this}
     */
    setmaxBackoff(maxBackoff: number): this;
    getChannel(): ChannelT;
    __lastUsed: number | undefined;
    /**
     * Determines if this node is healthy by checking if this node hasn't been
     * in use for a the required `_currentBackoff` period. Since this looks at `this._lastUsed`
     * and that value is only set in the `wait()` method, any node that has not
     * returned a bad gRPC status will always be considered healthy.
     *
     * @returns {boolean}
     */
    isHealthy(): boolean;
    increaseDelay(): void;
    decreaseDelay(): void;
    /**
     * This is only ever called if the node itself is down.
     * A node returning a transaction with a bad status code does not indicate
     * the node is down, and hence this method will not be called.
     *
     * @returns {Promise<void>}
     */
    wait(): Promise<void>;
    /**
     * @param {ManagedNode<*>} node
     * @returns {number}
     */
    compare(node: ManagedNode<any>): number;
    close(): void;
}
export type AccountId = import("./account/AccountId.js").default;
export type Channel = import("./channel/Channel.js").default;
export type MirrorChannel = import("./channel/MirrorChannel.js").default;
export type NodeAddress = import("./address_book/NodeAddress.js").default;
export type NewNode<ChannelT extends import("./channel/Channel.js").default | import("./channel/MirrorChannel.js").default> = {
    address: string | ManagedNodeAddress;
    channelInitFunction: (address: string, cert?: string | undefined) => ChannelT;
};
export type CloneNode<ChannelT extends import("./channel/Channel.js").default | import("./channel/MirrorChannel.js").default> = {
    node: ManagedNode<ChannelT>;
    address: ManagedNodeAddress;
};
import ManagedNodeAddress from "./ManagedNodeAddress.js";
