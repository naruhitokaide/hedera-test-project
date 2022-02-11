/**
 * @template {any} T
 */
export default class List<T extends unknown> {
    /** @type {T[]} */
    list: T[];
    locked: boolean;
    index: number;
    /**
     * @param {T[]} list
     * @returns {this}
     */
    setList(list: T[]): this;
    /**
     * @param {T[]} items
     * @returns {this}
     */
    push(...items: T[]): this;
    /**
     * @returns {this}
     */
    setLocked(): this;
    clear(): void;
    /**
     * @param {number} index
     * @returns {T}
     */
    get(index: number): T;
    /**
     * @param {number} index
     * @param {T} item
     * @returns {this}
     */
    set(index: number, item: T): this;
    /**
     * @param {number} index
     * @param {() => T} lambda
     * @returns {this}
     */
    setIfAbsent(index: number, lambda: () => T): this;
    /**
     * @returns {T}
     */
    get next(): T;
    /**
     * @returns {T}
     */
    get current(): T;
    /**
     * @returns {number}
     */
    advance(): number;
    /**
     * @returns {boolean}
     */
    get isEmpty(): boolean;
    /**
     * @returns {number}
     */
    get length(): number;
}
