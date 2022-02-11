export default class SemanticVersion {
    /**
     * @internal
     * @param {proto.ISemanticVersion} version
     * @returns {SemanticVersion}
     */
    static _fromProtobuf(version: proto.ISemanticVersion): SemanticVersion;
    /**
     * @param {Uint8Array} bytes
     * @returns {SemanticVersion}
     */
    static fromBytes(bytes: Uint8Array): SemanticVersion;
    /**
     * @private
     * @param {object} props
     * @param {number} props.major
     * @param {number} props.minor
     * @param {number} props.patch
     */
    private constructor();
    /** @readonly */
    readonly major: number;
    /** @readonly */
    readonly minor: number;
    /** @readonly */
    readonly patch: number;
    /**
     * @internal
     * @returns {proto.ISemanticVersion}
     */
    _toProtobuf(): proto.ISemanticVersion;
    /**
     * @returns {Uint8Array}
     */
    toBytes(): Uint8Array;
}
import * as proto from "@hashgraph/proto";
