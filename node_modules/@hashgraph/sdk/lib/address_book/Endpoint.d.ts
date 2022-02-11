/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IServiceEndpoint} proto.IServiceEndpoint
 */
/**
 * @typedef {object} EndPointJson
 * @property {string | null} address
 * @property {string | null} port
 */
export default class EndPoint {
    /**
     * @internal
     * @param {proto.IServiceEndpoint} endpoint
     * @returns {EndPoint}
     */
    static _fromProtobuf(endpoint: proto.IServiceEndpoint): EndPoint;
    /**
     * @param {object} props
     * @param {IPv4Address} [props.address]
     * @param {number} [props.port]
     */
    constructor(props?: {
        address?: IPv4Address | undefined;
        port?: number | undefined;
    });
    /**
     * @type {IPv4Address | null}
     */
    _address: IPv4Address | null;
    /**
     * @type {number | null}
     */
    _port: number | null;
    /**
     * @returns {?IPv4Address}
     */
    get address(): IPv4Address | null;
    /**
     * @param {IPv4Address} address
     * @returns {this}
     */
    setAddress(address: IPv4Address): this;
    /**
     * @returns {?number}
     */
    get port(): number | null;
    /**
     * @param {number} port
     * @returns {this}
     */
    setPort(port: number): this;
    /**
     * @returns {proto.IServiceEndpoint}
     */
    _toProtobuf(): proto.IServiceEndpoint;
    /**
     * @returns {string}
     */
    toString(): string;
    /**
     * @returns {EndPointJson}
     */
    toJSON(): EndPointJson;
}
export namespace proto {
    type IServiceEndpoint = import("@hashgraph/proto").IServiceEndpoint;
}
export type EndPointJson = {
    address: string | null;
    port: string | null;
};
import IPv4Address from "./IPv4Address.js";
