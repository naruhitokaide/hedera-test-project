/**
 * @typedef {import("long").Long} Long
 * @typedef {import("../client/Client.js").default<*, *>} Client
 */
/**
 * The ID for a crypto-currency file on Hedera.
 */
export default class FileId {
    /**
     * @param {string} text
     * @returns {FileId}
     */
    static fromString(text: string): FileId;
    /**
     * @internal
     * @param {proto.IFileID} id
     * @returns {FileId}
     */
    static _fromProtobuf(id: proto.IFileID): FileId;
    /**
     * @param {Uint8Array} bytes
     * @returns {FileId}
     */
    static fromBytes(bytes: Uint8Array): FileId;
    /**
     * @param {string} address
     * @returns {FileId}
     */
    static fromSolidityAddress(address: string): FileId;
    /**
     * @param {number | Long | import("../EntityIdHelper").IEntityId} props
     * @param {(number | Long)=} realm
     * @param {(number | Long)=} num
     */
    constructor(props: number | Long | import("../EntityIdHelper").IEntityId, realm?: (number | Long) | undefined, num?: (number | Long) | undefined);
    shard: import("long").Long;
    realm: import("long").Long;
    num: import("long").Long;
    /**
     * @type {string | null}
     */
    _checksum: string | null;
    /**
     * @returns {string | null}
     */
    get checksum(): string | null;
    /**
     * @deprecated - Use `validateChecksum` instead
     * @param {Client} client
     */
    validate(client: import("../client/Client.js").default<any, any>): void;
    /**
     * @param {Client} client
     */
    validateChecksum(client: import("../client/Client.js").default<any, any>): void;
    /**
     * @returns {string} solidity address
     */
    toSolidityAddress(): string;
    /**
     * @internal
     * @returns {proto.IFileID}
     */
    _toProtobuf(): proto.IFileID;
    /**
     * @returns {string}
     */
    toString(): string;
    /**
     * @param {Client} client
     * @returns {string}
     */
    toStringWithChecksum(client: import("../client/Client.js").default<any, any>): string;
    /**
     * @returns {Uint8Array}
     */
    toBytes(): Uint8Array;
    /**
     * @returns {FileId}
     */
    clone(): FileId;
    /**
     * @param {FileId} other
     * @returns {number}
     */
    compare(other: FileId): number;
}
export type Long = import("long").Long;
export type Client = import("../client/Client.js").default<any, any>;
import * as proto from "@hashgraph/proto";
