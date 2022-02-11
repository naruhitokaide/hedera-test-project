export default class ContractFunctionParameters {
    /**
     * @type {ContractFunctionSelector}
     */
    _selector: ContractFunctionSelector;
    /**
     * @type {import("./ContractFunctionSelector.js").Argument[]}
     */
    _arguments: import("./ContractFunctionSelector.js").Argument[];
    /**
     * @param {string} value
     * @returns {ContractFunctionParameters}
     */
    addString(value: string): ContractFunctionParameters;
    /**
     * @param {string[]} value
     * @returns {ContractFunctionParameters}
     */
    addStringArray(value: string[]): ContractFunctionParameters;
    /**
     * @param {Uint8Array} value
     * @returns {ContractFunctionParameters}
     */
    addBytes(value: Uint8Array): ContractFunctionParameters;
    /**
     * @param {Uint8Array} value
     * @returns {ContractFunctionParameters}
     */
    addBytes32(value: Uint8Array): ContractFunctionParameters;
    /**
     * @param {Uint8Array[]} value
     * @returns {ContractFunctionParameters}
     */
    addBytesArray(value: Uint8Array[]): ContractFunctionParameters;
    /**
     * @param {Uint8Array[]} value
     * @returns {ContractFunctionParameters}
     */
    addBytes32Array(value: Uint8Array[]): ContractFunctionParameters;
    /**
     * @param {boolean} value
     * @returns {ContractFunctionParameters}
     */
    addBool(value: boolean): ContractFunctionParameters;
    /**
     * @param {number} value
     * @returns {ContractFunctionParameters}
     */
    addInt8(value: number): ContractFunctionParameters;
    /**
     * @param {number} value
     * @returns {ContractFunctionParameters}
     */
    addInt32(value: number): ContractFunctionParameters;
    /**
     * @param {BigNumber} value
     * @returns {ContractFunctionParameters}
     */
    addInt64(value: BigNumber): ContractFunctionParameters;
    /**
     * @param {BigNumber} value
     * @returns {ContractFunctionParameters}
     */
    addInt256(value: BigNumber): ContractFunctionParameters;
    /**
     * @param {number[]} value
     * @returns {ContractFunctionParameters}
     */
    addInt8Array(value: number[]): ContractFunctionParameters;
    /**
     * @param {number[]} value
     * @returns {ContractFunctionParameters}
     */
    addInt32Array(value: number[]): ContractFunctionParameters;
    /**
     * @param {BigNumber[]} value
     * @returns {ContractFunctionParameters}
     */
    addInt64Array(value: BigNumber[]): ContractFunctionParameters;
    /**
     * @param {BigNumber[]} value
     * @returns {ContractFunctionParameters}
     */
    addInt256Array(value: BigNumber[]): ContractFunctionParameters;
    /**
     * @param {number} value
     * @returns {ContractFunctionParameters}
     */
    addUint8(value: number): ContractFunctionParameters;
    /**
     * @param {number} value
     * @returns {ContractFunctionParameters}
     */
    addUint32(value: number): ContractFunctionParameters;
    /**
     * @param {BigNumber} value
     * @returns {ContractFunctionParameters}
     */
    addUint64(value: BigNumber): ContractFunctionParameters;
    /**
     * @param {BigNumber | number} value
     * @returns {ContractFunctionParameters}
     */
    addUint256(value: BigNumber | number): ContractFunctionParameters;
    /**
     * @param {number[]} value
     * @returns {ContractFunctionParameters}
     */
    addUint8Array(value: number[]): ContractFunctionParameters;
    /**
     * @param {number[]} value
     * @returns {ContractFunctionParameters}
     */
    addUint32Array(value: number[]): ContractFunctionParameters;
    /**
     * @param {BigNumber[]} value
     * @returns {ContractFunctionParameters}
     */
    addUint64Array(value: BigNumber[]): ContractFunctionParameters;
    /**
     * @param {BigNumber[]} value
     * @returns {ContractFunctionParameters}
     */
    addUint256Array(value: BigNumber[]): ContractFunctionParameters;
    /**
     * @param {string} value
     * @returns {ContractFunctionParameters}
     */
    addAddress(value: string): ContractFunctionParameters;
    /**
     * @param {string[]} value
     * @returns {ContractFunctionParameters}
     */
    addAddressArray(value: string[]): ContractFunctionParameters;
    /**
     * @param {string} address
     * @param {ContractFunctionSelector} selector
     * @returns {ContractFunctionParameters}
     */
    addFunction(address: string, selector: ContractFunctionSelector): ContractFunctionParameters;
    /**
     * @internal
     * @param {string | boolean | number | Uint8Array | BigNumber | string[] | boolean[] | number[] | Uint8Array[] | BigNumber[]} param
     * @param {boolean} dynamic
     * @returns {ContractFunctionParameters}
     */
    _addParam(param: string | boolean | number | Uint8Array | BigNumber | string[] | boolean[] | number[] | Uint8Array[] | BigNumber[], dynamic: boolean): ContractFunctionParameters;
    /**
     * @internal
     * @param {string=} name
     * @returns {Uint8Array}
     */
    _build(name?: string | undefined): Uint8Array;
}
import ContractFunctionSelector from "./ContractFunctionSelector.js";
import BigNumber from "bignumber.js";
