/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransferList} proto.ITransferList
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 */
/**
 * @typedef {import("../long.js").LongObject} LongObject
 * @typedef {import("bignumber.js").default} BigNumber
 */
/**
 * @augments {ObjectMap<AccountId, Hbar>}
 */
export default class HbarTransferMap extends ObjectMap<AccountId, Hbar> {
    /**
     * @param {proto.ITransferList} transfers
     * @returns {HbarTransferMap}
     */
    static _fromProtobuf(transfers: proto.ITransferList): HbarTransferMap;
    constructor();
}
export namespace proto {
    type ITransferList = import("@hashgraph/proto").ITransferList;
    type IAccountID = import("@hashgraph/proto").IAccountID;
}
export type LongObject = import("../long.js").LongObject;
export type BigNumber = import("bignumber.js").default;
import AccountId from "./AccountId.js";
import Hbar from "../Hbar.js";
import ObjectMap from "../ObjectMap.js";
