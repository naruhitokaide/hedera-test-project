/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IAssessedCustomFee} proto.IAssessedCustomFee
 */
export default class AssessedCustomFee {
    /**
     * @internal
     * @param {proto.IAssessedCustomFee} fee
     * @returns {AssessedCustomFee}
     */
    static _fromProtobuf(fee: proto.IAssessedCustomFee): AssessedCustomFee;
    /**
     * @param {object} props
     * @param {AccountId | string} [props.feeCollectorAccountId]
     * @param {TokenId | string} [props.tokenId]
     * @param {Long | number} [props.amount]
     * @param {AccountId[]} [props.payerAccountIds]
     */
    constructor(props?: {
        feeCollectorAccountId?: string | AccountId | undefined;
        tokenId?: string | TokenId | undefined;
        amount?: number | Long.Long | undefined;
        payerAccountIds?: AccountId[] | undefined;
    });
    /**
     * @type {?AccountId}
     */
    _feeCollectorAccountId: AccountId | null;
    /**
     * @type {?TokenId}
     */
    _tokenId: TokenId | null;
    /**
     * @type {?Long}
     */
    _amount: Long | null;
    /**
     * @type {?AccountId[]}
     */
    _payerAccountIds: AccountId[] | null;
    /**
     * @returns {?AccountId}
     */
    get feeCollectorAccountId(): AccountId | null;
    /**
     * @param {AccountId | string} feeCollectorAccountId
     * @returns {this}
     */
    setFeeCollectorAccountId(feeCollectorAccountId: AccountId | string): this;
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
     * @returns {?Long}
     */
    get amount(): Long.Long | null;
    /**
     * @param {Long | number} amount
     * @returns {AssessedCustomFee}
     */
    setAmount(amount: Long | number): AssessedCustomFee;
    /**
     * @returns {?AccountId[]}
     */
    get payerAccountIds(): AccountId[] | null;
    /**
     * @param {AccountId[]} payerAccountIds
     * @returns {AssessedCustomFee}
     */
    setPayerAccountIds(payerAccountIds: AccountId[]): AssessedCustomFee;
    /**
     * @internal
     * @abstract
     * @returns {proto.IAssessedCustomFee}
     */
    _toProtobuf(): proto.IAssessedCustomFee;
}
export namespace proto {
    type IAssessedCustomFee = import("@hashgraph/proto").IAssessedCustomFee;
}
import AccountId from "../account/AccountId.js";
import TokenId from "./TokenId.js";
import Long from "long";
