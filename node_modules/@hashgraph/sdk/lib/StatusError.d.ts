/**
 * @typedef {import("./Status.js").default} Status
 * @typedef {import("./transaction/TransactionId.js").default} TransactionId
 */
export default class StatusError extends Error {
    /**
     * @param {object} props
     * @param {Status} props.status
     * @param {TransactionId} props.transactionId
     * @param {string} message
     */
    constructor(props: {
        status: Status;
        transactionId: TransactionId;
    }, message: string);
    status: import("./Status.js").default;
    transactionId: import("./transaction/TransactionId.js").default;
}
export type Status = import("./Status.js").default;
export type TransactionId = import("./transaction/TransactionId.js").default;
