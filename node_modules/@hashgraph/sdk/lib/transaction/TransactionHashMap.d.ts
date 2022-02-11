/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 */
/**
 * @augments {ObjectMap<AccountId, Uint8Array>}
 */
export default class TransactionHashMap extends ObjectMap<AccountId, Uint8Array> {
    /**
     * @param {import("./Transaction.js").default} transaction
     * @returns {Promise<TransactionHashMap>}
     */
    static _fromTransaction(transaction: import("./Transaction.js").default): Promise<TransactionHashMap>;
    constructor();
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
}
import AccountId from "../account/AccountId.js";
import ObjectMap from "../ObjectMap.js";
