export default class FeeData {
    /**
     * @param {Uint8Array} bytes
     * @returns {FeeData}
     */
    static fromBytes(bytes: Uint8Array): FeeData;
    /**
     * @internal
     * @param {proto.IFeeData} feeData
     * @returns {FeeData}
     */
    static _fromProtobuf(feeData: proto.IFeeData): FeeData;
    /**
     * @param {object} [props]
     * @param {FeeComponents} [props.nodedata]
     * @param {FeeComponents} [props.networkdata]
     * @param {FeeComponents} [props.servicedata]
     * @param {FeeDataType} [props.feeDataType]
     */
    constructor(props?: {
        nodedata?: FeeComponents | undefined;
        networkdata?: FeeComponents | undefined;
        servicedata?: FeeComponents | undefined;
        feeDataType?: FeeDataType | undefined;
    } | undefined);
    nodedata: FeeComponents | undefined;
    networkdata: FeeComponents | undefined;
    servicedata: FeeComponents | undefined;
    feeDataType: FeeDataType | undefined;
    /**
     * @internal
     * @returns {proto.IFeeData}
     */
    _toProtobuf(): proto.IFeeData;
    /**
     * @returns {Uint8Array}
     */
    toBytes(): Uint8Array;
}
import FeeComponents from "./FeeComponents";
import FeeDataType from "./FeeDataType";
import * as proto from "@hashgraph/proto";
