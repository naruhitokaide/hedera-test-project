/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITokenAssociation} proto.ITokenAssociation
 */
export default class TokenAssociation {
    /**
     * @internal
     * @abstract
     * @param {proto.ITokenAssociation} association
     * @returns {TokenAssociation}
     */
    static _fromProtobuf(association: proto.ITokenAssociation): TokenAssociation;
    /**
     * @param {object} props
     * @param {AccountId | string} [props.accountId]
     * @param {TokenId | string} [props.tokenId]
     */
    constructor(props?: {
        accountId?: string | AccountId | undefined;
        tokenId?: string | TokenId | undefined;
    });
    /**
     * @type {?AccountId}
     */
    _accountId: AccountId | null;
    /**
     * @type {?TokenId}
     */
    _tokenId: TokenId | null;
    /**
     * @returns {?AccountId}
     */
    get accountId(): AccountId | null;
    /**
     * @param {AccountId | string} accountId
     * @returns {this}
     */
    setAccountId(accountId: AccountId | string): this;
    /**
     * @returns {?TokenId}
     */
    get tokenId(): TokenId | null;
    /**
     * @param {TokenId | string} tokenId
     * @returns {this}
     */
    setTokenId(tokenId: TokenId | string): this;
    /**
     * @internal
     * @abstract
     * @returns {proto.ITokenAssociation}
     */
    _toProtobuf(): proto.ITokenAssociation;
}
export namespace proto {
    type ITokenAssociation = import("@hashgraph/proto").ITokenAssociation;
}
import AccountId from "../account/AccountId.js";
import TokenId from "../token/TokenId.js";
