export default class FeeSchedules {
    /**
     * @param {Uint8Array} bytes
     * @returns {FeeSchedules}
     */
    static fromBytes(bytes: Uint8Array): FeeSchedules;
    /**
     * @internal
     * @param {proto.ICurrentAndNextFeeSchedule} feeSchedules
     * @returns {FeeSchedules}
     */
    static _fromProtobuf(feeSchedules: proto.ICurrentAndNextFeeSchedule): FeeSchedules;
    /**
     * @param {object} [props]
     * @param {FeeSchedule} [props.currentFeeSchedule]
     * @param {FeeSchedule} [props.nextFeeSchedule]
     */
    constructor(props?: {
        currentFeeSchedule?: FeeSchedule | undefined;
        nextFeeSchedule?: FeeSchedule | undefined;
    } | undefined);
    current: FeeSchedule | undefined;
    next: FeeSchedule | undefined;
    /**
     * @internal
     * @returns {proto.ICurrentAndNextFeeSchedule}
     */
    _toProtobuf(): proto.ICurrentAndNextFeeSchedule;
    /**
     * @returns {Uint8Array}
     */
    toBytes(): Uint8Array;
}
import FeeSchedule from "./FeeSchedule";
import * as proto from "@hashgraph/proto";
