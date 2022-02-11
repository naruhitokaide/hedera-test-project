/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITokenRelationship} proto.ITokenRelationship
 * @typedef {import("@hashgraph/proto").TokenKycStatus} proto.TokenKycStatus
 * @typedef {import("@hashgraph/proto").TokenFreezeStatus} proto.TokenFreezeStatus
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */
/**
 * Token's information related to the given Account
 */
export default class TokenRelationship {
    /**
     * @param {proto.ITokenRelationship} relationship
     * @returns {TokenRelationship}
     */
    static _fromProtobuf(relationship: proto.ITokenRelationship): TokenRelationship;
    /**
     * @param {object} props
     * @param {TokenId} props.tokenId
     * @param {string} props.symbol
     * @param {Long} props.balance
     * @param {boolean | null} props.isKycGranted
     * @param {boolean | null} props.isFrozen
     * @param {boolean | null} props.automaticAssociation
     */
    constructor(props: {
        tokenId: TokenId;
        symbol: string;
        balance: Long;
        isKycGranted: boolean | null;
        isFrozen: boolean | null;
        automaticAssociation: boolean | null;
    });
    /**
     * The ID of the token
     *
     * @readonly
     */
    readonly tokenId: TokenId;
    /**
     * The Symbol of the token
     *
     * @readonly
     */
    readonly symbol: string;
    /**
     * The balance that the Account holds in the smallest denomination
     *
     * @readonly
     */
    readonly balance: Long.Long;
    /**
     * The KYC status of the account (KycNotApplicable, Granted or Revoked). If the token does
     * not have KYC key, KycNotApplicable is returned
     *
     * @readonly
     */
    readonly isKycGranted: boolean | null;
    /**
     * The Freeze status of the account (FreezeNotApplicable, Frozen or Unfrozen). If the token
     * does not have Freeze key, FreezeNotApplicable is returned
     *
     * @readonly
     */
    readonly isFrozen: boolean | null;
    /**
     * Specifies if the relationship is created implicitly. False : explicitly associated, True :
     * implicitly associated.
     *
     * @readonly
     */
    readonly automaticAssociation: boolean | null;
    /**
     * @returns {proto.ITokenRelationship}
     */
    _toProtobuf(): proto.ITokenRelationship;
}
export namespace proto {
    type ITokenRelationship = import("@hashgraph/proto").ITokenRelationship;
    type TokenKycStatus = import("@hashgraph/proto").TokenKycStatus;
    type TokenFreezeStatus = import("@hashgraph/proto").TokenFreezeStatus;
    type ITokenID = import("@hashgraph/proto").ITokenID;
}
import TokenId from "../token/TokenId.js";
import Long from "long";
