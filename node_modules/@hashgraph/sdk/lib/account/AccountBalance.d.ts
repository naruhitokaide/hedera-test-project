/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITimestamp} proto.ITimestamp
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 * @typedef {import("@hashgraph/proto").ICryptoGetAccountBalanceResponse} proto.ICryptoGetAccountBalanceResponse
 * @typedef {import("@hashgraph/proto").IKey} proto.IKey
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 * @typedef {import("@hashgraph/proto").ITokenBalance} proto.ITokenBalance
 */
/**
 * @typedef {object} TokenBalanceJson
 * @property {string} tokenId
 * @property {string} balance
 * @property {number} decimals
 */
/**
 * @typedef {object} AccountBalanceJson
 * @property {string} hbars
 * @property {TokenBalanceJson[]} tokens
 */
export default class AccountBalance {
    /**
     * @internal
     * @param {proto.ICryptoGetAccountBalanceResponse} accountBalance
     * @returns {AccountBalance}
     */
    static _fromProtobuf(accountBalance: proto.ICryptoGetAccountBalanceResponse): AccountBalance;
    /**
     * @private
     * @param {object} props
     * @param {Hbar} props.hbars
     * @param {?TokenBalanceMap} props.tokens
     * @param {?TokenDecimalMap} props.tokenDecimals
     */
    private constructor();
    /**
     * The account ID for which this balancermation applies.
     *
     * @readonly
     */
    readonly hbars: Hbar;
    /** @readonly */
    readonly tokens: TokenBalanceMap | null;
    /** @readonly */
    readonly tokenDecimals: TokenDecimalMap | null;
    /**
     * @returns {proto.ICryptoGetAccountBalanceResponse}
     */
    _toProtobuf(): proto.ICryptoGetAccountBalanceResponse;
    /**
     * @returns {string}
     */
    toString(): string;
    /**
     * @returns {AccountBalanceJson}
     */
    toJSON(): AccountBalanceJson;
}
export namespace proto {
    type ITimestamp = import("@hashgraph/proto").ITimestamp;
    type IAccountID = import("@hashgraph/proto").IAccountID;
    type ICryptoGetAccountBalanceResponse = import("@hashgraph/proto").ICryptoGetAccountBalanceResponse;
    type IKey = import("@hashgraph/proto").IKey;
    type ITokenID = import("@hashgraph/proto").ITokenID;
    type ITokenBalance = import("@hashgraph/proto").ITokenBalance;
}
export type TokenBalanceJson = {
    tokenId: string;
    balance: string;
    decimals: number;
};
export type AccountBalanceJson = {
    hbars: string;
    tokens: TokenBalanceJson[];
};
import Hbar from "../Hbar.js";
import TokenBalanceMap from "./TokenBalanceMap.js";
import TokenDecimalMap from "./TokenDecimalMap.js";
