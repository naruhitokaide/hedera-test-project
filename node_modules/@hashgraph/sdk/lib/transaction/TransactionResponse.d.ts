/**
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("./TransactionId.js").default} TransactionId
 * @typedef {import("./TransactionReceipt.js").default} TransactionReceipt
 * @typedef {import("./TransactionRecord.js").default} TransactionRecord
 */
export default class TransactionResponse {
    /**
     * @internal
     * @param {object} props
     * @param {AccountId} props.nodeId
     * @param {Uint8Array} props.transactionHash
     * @param {TransactionId} props.transactionId
     */
    constructor(props: {
        nodeId: AccountId;
        transactionHash: Uint8Array;
        transactionId: TransactionId;
    });
    /** @readonly */
    readonly nodeId: import("../account/AccountId.js").default;
    /** @readonly */
    readonly transactionHash: Uint8Array;
    /** @readonly */
    readonly transactionId: import("./TransactionId.js").default;
    /**
     * @param {Client} client
     * @returns {Promise<TransactionReceipt>}
     */
    getReceipt(client: import("../client/Client.js").default<any, any>): Promise<TransactionReceipt>;
    /**
     * @param {Client} client
     * @returns {Promise<TransactionRecord>}
     */
    getRecord(client: import("../client/Client.js").default<any, any>): Promise<TransactionRecord>;
}
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
export type TransactionId = import("./TransactionId.js").default;
export type TransactionReceipt = import("./TransactionReceipt.js").default;
export type TransactionRecord = import("./TransactionRecord.js").default;
