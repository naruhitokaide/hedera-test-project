/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ICustomFee} proto.ICustomFee
 */
export default class CustomFee {
    /**
     * @internal
     * @abstract
     * @param {proto.ICustomFee} info
     * @returns {CustomFee}
     */
    static _fromProtobuf(info: proto.ICustomFee): CustomFee;
    /**
     * @param {object} props
     * @param {AccountId | string} [props.feeCollectorAccountId]
     */
    constructor(props?: {
        feeCollectorAccountId?: string | AccountId | undefined;
    });
    /**
     * @type {?AccountId}
     */
    _feeCollectorAccountId: AccountId | null;
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
     * @internal
     * @abstract
     * @returns {proto.ICustomFee}
     */
    _toProtobuf(): proto.ICustomFee;
}
export namespace proto {
    type ICustomFee = import("@hashgraph/proto").ICustomFee;
}
import AccountId from "../account/AccountId.js";
