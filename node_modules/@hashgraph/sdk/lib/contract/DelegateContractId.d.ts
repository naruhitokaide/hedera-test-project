/**
 * @namespace {proto}
 * @typedef {import("@hashgraph/proto").IContractID} proto.IContractID
 * @typedef {import("@hashgraph/proto").IKey} proto.IKey
 */
/**
 * @typedef {import("long").Long} Long
 * @typedef {import("../client/Client.js").default<*, *>} Client
 */
export default class DelegateContractId extends ContractId {
}
export namespace proto {
    type IContractID = import("@hashgraph/proto").IContractID;
    type IKey = import("@hashgraph/proto").IKey;
}
export type Long = import("long").Long;
export type Client = import("../client/Client.js").default<any, any>;
import ContractId from "./ContractId.js";
