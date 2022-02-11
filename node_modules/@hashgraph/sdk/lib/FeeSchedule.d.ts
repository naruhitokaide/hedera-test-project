export default class FeeSchedule {
    /**
     * @param {Uint8Array} bytes
     * @returns {FeeSchedule}
     */
    static fromBytes(bytes: Uint8Array): FeeSchedule;
    /**
     * @internal
     * @param {proto.IFeeSchedule} feeSchedule
     * @returns {FeeSchedule}
     */
    static _fromProtobuf(feeSchedule: proto.IFeeSchedule): FeeSchedule;
    /**
     * @param {object} [props]
     * @param {TransactionFeeSchedule[]} [props.transactionFeeSchedule]
     * @param {Timestamp} [props.expirationTime]
     */
    constructor(props?: {
        transactionFeeSchedule?: TransactionFeeSchedule[] | undefined;
        expirationTime?: Timestamp | undefined;
    } | undefined);
    transactionFeeSchedule: TransactionFeeSchedule[] | undefined;
    expirationTime: Timestamp | undefined;
    /**
     * @internal
     * @returns {proto.IFeeSchedule}
     */
    _toProtobuf(): proto.IFeeSchedule;
    /**
     * @returns {Uint8Array}
     */
    toBytes(): Uint8Array;
}
import TransactionFeeSchedule from "./TransactionFeeSchedule";
import Timestamp from "./Timestamp";
import * as proto from "@hashgraph/proto";
