/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IKey} proto.IKey
 */
export default class Key {
    /**
     * @internal
     * @param {proto.IKey} key
     * @returns {Key}
     */
    static _fromProtobufKey(key: proto.IKey): Key;
    /**
     * @internal
     * @abstract
     * @returns {proto.IKey}
     */
    _toProtobufKey(): proto.IKey;
}
export namespace proto {
    type IKey = import("@hashgraph/proto").IKey;
}
