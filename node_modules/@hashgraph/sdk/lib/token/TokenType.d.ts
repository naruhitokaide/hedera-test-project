/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").TokenType} proto.TokenType
 */
declare class TokenType {
    /**
     * @internal
     * @param {number} code
     * @returns {TokenType}
     */
    static _fromCode(code: number): TokenType;
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
     * @returns {proto.TokenType}
     */
    valueOf(): proto.TokenType;
}
declare namespace TokenType {
    const FungibleCommon: TokenType;
    const NonFungibleUnique: TokenType;
}
export default TokenType;
export namespace proto {
    type TokenType = import("@hashgraph/proto").TokenType;
}
