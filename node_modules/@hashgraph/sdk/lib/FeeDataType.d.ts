/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").SubType} proto.SubType
 */
declare class FeeDataType {
    /**
     * @internal
     * @param {number} code
     * @returns {FeeDataType}
     */
    static _fromCode(code: number): FeeDataType;
    /**
     * @hideconstructor
     * @internal
     * @param {number} code
     */
    constructor(code: number);
    /** @readonly */
    readonly _code: number;
    /**
     * @returns {string}
     */
    toString(): string;
    /**
     * @returns {proto.SubType}
     */
    valueOf(): proto.SubType;
}
declare namespace FeeDataType {
    const Default: FeeDataType;
    const TokenFungibleCommon: FeeDataType;
    const TokenNonFungibleUnique: FeeDataType;
    const TokenFungibleCommonWithCustomFees: FeeDataType;
    const TokenNonFungibleUniqueWithCustomFees: FeeDataType;
}
export default FeeDataType;
export namespace proto {
    type SubType = import("@hashgraph/proto").SubType;
}
