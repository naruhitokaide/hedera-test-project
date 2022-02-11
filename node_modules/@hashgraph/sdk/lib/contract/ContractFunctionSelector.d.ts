export type ArgumentType = number;
export namespace ArgumentType {
    const uint8: number;
    const int8: number;
    const uint16: number;
    const int16: number;
    const uint32: number;
    const int32: number;
    const uint64: number;
    const int64: number;
    const uint256: number;
    const int256: number;
    const string: number;
    const bool: number;
    const bytes: number;
    const bytes32: number;
    const address: number;
    const func: number;
}
/**
 * @typedef {object} Argument
 * @property {boolean} dynamic
 * @property {Uint8Array} value
 */
/**
 * @typedef {object} SolidityType
 * @property {ArgumentType} ty
 * @property {boolean} array
 */
export default class ContractFunctionSelector {
    /**
     * @param {string} [name]
     */
    constructor(name?: string | undefined);
    /**
     * @type {?string}
     */
    name: string | null;
    /**
     * @type {string}
     */
    _params: string;
    /**
     * @type {SolidityType[]}
     */
    _paramTypes: SolidityType[];
    _name: string | undefined;
    /**
     * @returns {ContractFunctionSelector}
     */
    addString(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addStringArray(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addBytes(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addBytes32(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addBytesArray(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addBytes32Array(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addInt8(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addInt32(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addInt64(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addInt256(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addInt8Array(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addInt32Array(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addInt64Array(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addInt256Array(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addUint8(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addUint32(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addUint64(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addUint256(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addUint8Array(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addUint32Array(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addUint64Array(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addUint256Array(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addBool(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addAddress(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addAddressArray(): ContractFunctionSelector;
    /**
     * @returns {ContractFunctionSelector}
     */
    addFunction(): ContractFunctionSelector;
    /**
     * @param {SolidityType} ty
     * @returns {ContractFunctionSelector}
     */
    _addParam(ty: SolidityType): ContractFunctionSelector;
    /**
     * @param {string} [name]
     * @returns {Uint8Array}
     */
    _build(name?: string | undefined): Uint8Array;
    /**
     * @returns {string}
     */
    toString(): string;
}
export type Argument = {
    dynamic: boolean;
    value: Uint8Array;
};
export type SolidityType = {
    ty: ArgumentType;
    array: boolean;
};
