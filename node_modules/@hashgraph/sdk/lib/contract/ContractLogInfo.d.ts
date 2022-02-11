/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IContractLoginfo} proto.IContractLoginfo
 * @typedef {import("@hashgraph/proto").IContractID} proto.IContractID
 */
/**
 * The log information for an event returned by a smart contract function call. One function call
 * may return several such events.
 */
export default class ContractLogInfo {
    /**
     * @internal
     * @param {proto.IContractLoginfo} info
     * @returns {ContractLogInfo}
     */
    static _fromProtobuf(info: proto.IContractLoginfo): ContractLogInfo;
    /**
     * @param {object} props
     * @param {ContractId} props.contractId
     * @param {Uint8Array} props.bloom
     * @param {Uint8Array[]} props.topics
     * @param {Uint8Array} props.data
     */
    constructor(props: {
        contractId: ContractId;
        bloom: Uint8Array;
        topics: Uint8Array[];
        data: Uint8Array;
    });
    /**
     * Address of a contract that emitted the event.
     *
     * @readonly
     */
    readonly contractId: ContractId;
    /**
     * Bloom filter for a particular log.
     *
     * @readonly
     */
    readonly bloom: Uint8Array;
    /**
     * Topics of a particular event.
     *
     * @readonly
     */
    readonly topics: Uint8Array[];
    /**
     * Event data.
     *
     * @readonly
     */
    readonly data: Uint8Array;
    /**
     * @internal
     * @returns {proto.IContractLoginfo}
     */
    _toProtobuf(): proto.IContractLoginfo;
}
export namespace proto {
    type IContractLoginfo = import("@hashgraph/proto").IContractLoginfo;
    type IContractID = import("@hashgraph/proto").IContractID;
}
import ContractId from "./ContractId.js";
