/**
 * Response when the client sends the node CryptoGetVersionInfoQuery.
 */
export default class NetworkVersionInfo {
    /**
     * @internal
     * @param {proto.INetworkGetVersionInfoResponse} info
     * @returns {NetworkVersionInfo}
     */
    static _fromProtobuf(info: proto.INetworkGetVersionInfoResponse): NetworkVersionInfo;
    /**
     * @param {Uint8Array} bytes
     * @returns {NetworkVersionInfo}
     */
    static fromBytes(bytes: Uint8Array): NetworkVersionInfo;
    /**
     * @private
     * @param {object} props
     * @param {SemanticVersion} props.protobufVersion
     * @param {SemanticVersion} props.servicesVesion
     */
    private constructor();
    /**
     * The account ID for which this information applies.
     *
     * @readonly
     */
    readonly protobufVersion: SemanticVersion;
    /**
     * The account ID for which this information applies.
     *
     * @readonly
     */
    readonly servicesVesion: SemanticVersion;
    /**
     * @internal
     * @returns {proto.INetworkGetVersionInfoResponse}
     */
    _toProtobuf(): proto.INetworkGetVersionInfoResponse;
    /**
     * @returns {Uint8Array}
     */
    toBytes(): Uint8Array;
}
import SemanticVersion from "./SemanticVersion.js";
import * as proto from "@hashgraph/proto";
