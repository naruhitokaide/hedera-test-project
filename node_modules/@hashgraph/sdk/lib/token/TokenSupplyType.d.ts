/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").TokenSupplyType} proto.TokenSupplyType
 */
declare class TokenSupplyType {
    /**
     * @internal
     * @param {number} code
     * @returns {TokenSupplyType}
     */
    static _fromCode(code: number): TokenSupplyType;
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
     * @returns {proto.TokenSupplyType}
     */
    valueOf(): proto.TokenSupplyType;
}
declare namespace TokenSupplyType {
    const Infinite: TokenSupplyType;
    const Finite: TokenSupplyType;
}
export default TokenSupplyType;
export namespace proto {
    type TokenSupplyType = import("@hashgraph/proto").TokenSupplyType;
}
