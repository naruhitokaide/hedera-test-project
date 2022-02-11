export default class TransactionFeeSchedule {
    /**
     * @param {Uint8Array} bytes
     * @returns {TransactionFeeSchedule}
     */
    static fromBytes(bytes: Uint8Array): TransactionFeeSchedule;
    /**
     * @internal
     * @param {proto.ITransactionFeeSchedule} transactionFeeSchedule
     * @returns {TransactionFeeSchedule}
     */
    static _fromProtobuf(transactionFeeSchedule: proto.ITransactionFeeSchedule): TransactionFeeSchedule;
    /**
     * @param {object} [props]
     * @param {RequestType} [props.hederaFunctionality]
     * @param {FeeData} [props.feeData]
     * @param {FeeData[]} [props.fees]
     */
    constructor(props?: {
        hederaFunctionality?: RequestType | undefined;
        feeData?: FeeData | undefined;
        fees?: FeeData[] | undefined;
    } | undefined);
    hederaFunctionality: RequestType | undefined;
    feeData: FeeData | undefined;
    fees: FeeData[] | undefined;
    /**
     * @internal
     * @returns {proto.ITransactionFeeSchedule}
     */
    _toProtobuf(): proto.ITransactionFeeSchedule;
    /**
     * @returns {Uint8Array}
     */
    toBytes(): Uint8Array;
}
import RequestType from "./RequestType";
import FeeData from "./FeeData";
import * as proto from "@hashgraph/proto";
