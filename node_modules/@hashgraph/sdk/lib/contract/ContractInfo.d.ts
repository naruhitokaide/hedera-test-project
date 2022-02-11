/**
 * Response when the client sends the node CryptoGetInfoQuery.
 */
export default class ContractInfo {
    /**
     * @internal
     * @param {proto.IContractInfo} info
     * @returns {ContractInfo}
     */
    static _fromProtobuf(info: proto.IContractInfo): ContractInfo;
    /**
     * @param {Uint8Array} bytes
     * @returns {ContractInfo}
     */
    static fromBytes(bytes: Uint8Array): ContractInfo;
    /**
     * @private
     * @param {object} props
     * @param {ContractId} props.contractId
     * @param {AccountId} props.accountId
     * @param {string} props.contractAccountId
     * @param {?Key} props.adminKey
     * @param {Timestamp} props.expirationTime
     * @param {Duration} props.autoRenewPeriod
     * @param {Long} props.storage
     * @param {string} props.contractMemo
     * @param {Hbar} props.balance
     * @param {boolean} props.isDeleted
     * @param {TokenRelationshipMap} props.tokenRelationships
     * @param {LedgerId|null} props.ledgerId
     */
    private constructor();
    /**
     * ID of the contract instance, in the format used in transactions.
     *
     * @readonly
     */
    readonly contractId: ContractId;
    /**
     * ID of the cryptocurrency account owned by the contract instance,
     * in the format used in transactions.
     *
     * @readonly
     */
    readonly accountId: AccountId;
    /**
     * ID of both the contract instance and the cryptocurrency account owned by the contract
     * instance, in the format used by Solidity.
     *
     * @readonly
     */
    readonly contractAccountId: string;
    /**
     * The state of the instance and its fields can be modified arbitrarily if this key signs a
     * transaction to modify it. If this is null, then such modifications are not possible,
     * and there is no administrator that can override the normal operation of this smart
     * contract instance. Note that if it is created with no admin keys, then there is no
     * administrator to authorize changing the admin keys, so there can never be any admin keys
     * for that instance.
     *
     * @readonly
     */
    readonly adminKey: Key | null;
    /**
     * The current time at which this contract instance (and its account) is set to expire.
     *
     * @readonly
     */
    readonly expirationTime: Timestamp;
    /**
     * The expiration time will extend every this many seconds. If there are insufficient funds,
     * then it extends as long as possible. If the account is empty when it expires,
     * then it is deleted.
     *
     * @readonly
     */
    readonly autoRenewPeriod: Duration;
    /**
     * Number of bytes of storage being used by this instance (which affects the cost to
     * extend the expiration time).
     *
     * @readonly
     */
    readonly storage: Long.Long;
    /**
     * The memo associated with the contract (max 100 bytes).
     *
     * @readonly
     */
    readonly contractMemo: string;
    /**
     * The current balance of the contract.
     *
     * @readonly
     */
    readonly balance: Hbar;
    /**
     * Whether the contract has been deleted
     *
     * @readonly
     */
    readonly isDeleted: boolean;
    /**
     * The tokens associated to the contract
     *
     * @readonly
     */
    readonly tokenRelationships: TokenRelationshipMap;
    ledgerId: LedgerId | null;
    /**
     * @internal
     * @returns {proto.IContractInfo}
     */
    _toProtobuf(): proto.IContractInfo;
    /**
     * @returns {Uint8Array}
     */
    toBytes(): Uint8Array;
}
import ContractId from "./ContractId.js";
import AccountId from "../account/AccountId.js";
import Key from "../Key.js";
import Timestamp from "../Timestamp.js";
import Duration from "../Duration.js";
import Long from "long";
import Hbar from "../Hbar.js";
import TokenRelationshipMap from "../account/TokenRelationshipMap.js";
import LedgerId from "../LedgerId.js";
import * as proto from "@hashgraph/proto";
