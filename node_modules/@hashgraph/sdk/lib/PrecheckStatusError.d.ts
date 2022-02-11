/**
 * @typedef {import("./Status.js").default} Status
 * @typedef {import("./transaction/TransactionId.js").default} TransactionId
 */
export default class PrecheckStatusError extends StatusError {
    /**
     * @param {object} props
     * @param {Status} props.status
     * @param {TransactionId} props.transactionId
     */
    constructor(props: {
        status: Status;
        transactionId: TransactionId;
    });
}
export type Status = import("./Status.js").default;
export type TransactionId = import("./transaction/TransactionId.js").default;
import StatusError from "./StatusError.js";
