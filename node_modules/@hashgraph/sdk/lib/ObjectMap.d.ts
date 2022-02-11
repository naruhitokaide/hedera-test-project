/**
 * @abstract
 * @template {{ toString(): string }} KeyT
 * @template {any} ValueT
 */
export default class ObjectMap<KeyT extends {
    toString(): string;
}, ValueT extends unknown> {
    /**
     * @param {(s: string) => KeyT} fromString
     */
    constructor(fromString: (s: string) => KeyT);
    /** @type {Map<string, ValueT>} */
    _map: Map<string, ValueT>;
    /** @type {Map<KeyT, ValueT>} */
    __map: Map<KeyT, ValueT>;
    _fromString: (s: string) => KeyT;
    /**
     * @param {KeyT | string} key
     * @returns {?ValueT}
     */
    get(key: KeyT | string): ValueT | null;
    /**
     * @internal
     * @param {KeyT} key
     * @param {ValueT} value
     */
    _set(key: KeyT, value: ValueT): void;
    /**
     * @returns {IterableIterator<ValueT>}
     */
    values(): IterableIterator<ValueT>;
    /**
     * @returns {number}
     */
    get size(): number;
    /**
     * @returns {IterableIterator<KeyT>}
     */
    keys(): IterableIterator<KeyT>;
    /**
     * @returns {string}
     */
    toString(): string;
    /**
     * @returns {IterableIterator<[KeyT, ValueT]>}
     */
    [Symbol.iterator](): IterableIterator<[KeyT, ValueT]>;
}
