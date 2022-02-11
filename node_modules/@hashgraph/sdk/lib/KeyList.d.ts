/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IKey} proto.IKey
 * @typedef {import("@hashgraph/proto").IKeyList} proto.IKeyList
 * @typedef {import("@hashgraph/proto").IThresholdKey} proto.IThresholdKey
 */
/**
 * A list of Keys (`Key`) with an optional threshold.
 */
export default class KeyList extends Key {
    /**
     * @param {Key[]} keys
     * @returns {KeyList}
     */
    static of(...keys: Key[]): KeyList;
    /**
     * @template T
     * @param {ArrayLike<Key>} arrayLike
     * @param {((key: Key) => Key)} [mapFn]
     * @param {T} [thisArg]
     * @returns {KeyList}
     */
    static from<T>(arrayLike: ArrayLike<Key>, mapFn?: ((key: Key) => Key) | undefined, thisArg?: T | undefined): KeyList;
    /**
     * @param {proto.IKeyList} key
     * @returns {KeyList}
     */
    static __fromProtobufKeyList(key: proto.IKeyList): KeyList;
    /**
     * @param {proto.IThresholdKey} key
     * @returns {KeyList}
     */
    static __fromProtobufThresoldKey(key: proto.IThresholdKey): KeyList;
    /**
     * @param {?Key[]} [keys]
     * @param {?number} [threshold]
     */
    constructor(keys?: Key[] | null | undefined, threshold?: number | null | undefined);
    /**
     * @private
     * @type {Key[]}
     */
    private _keys;
    /**
     * @type {?number}
     */
    _threshold: number | null;
    /**
     * @returns {?number}
     */
    get threshold(): number | null;
    /**
     * @param {number} threshold
     * @returns {this}
     */
    setThreshold(threshold: number): this;
    /**
     * @param {Key[]} keys
     * @returns {number}
     */
    push(...keys: Key[]): number;
    /**
     * @param {number} start
     * @param {number} deleteCount
     * @param {Key[]} items
     * @returns {KeyList}
     */
    splice(start: number, deleteCount: number, ...items: Key[]): KeyList;
    /**
     * @param {number=} start
     * @param {number=} end
     * @returns {KeyList}
     */
    slice(start?: number | undefined, end?: number | undefined): KeyList;
    /**
     * @returns {Key[]}
     */
    toArray(): Key[];
    /**
     * @returns {Iterator<Key>}
     */
    [Symbol.iterator](): Iterator<Key>;
}
export namespace proto {
    type IKey = import("@hashgraph/proto").IKey;
    type IKeyList = import("@hashgraph/proto").IKeyList;
    type IThresholdKey = import("@hashgraph/proto").IThresholdKey;
}
import Key from "./Key.js";
