"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContractId = _interopRequireDefault(require("./ContractId.cjs"));

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

var _Timestamp = _interopRequireDefault(require("../Timestamp.cjs"));

var _Duration = _interopRequireDefault(require("../Duration.cjs"));

var _Hbar = _interopRequireDefault(require("../Hbar.cjs"));

var _long = _interopRequireDefault(require("long"));

var proto = _interopRequireWildcard(require("@hashgraph/proto"));

var _TokenRelationshipMap = _interopRequireDefault(require("../account/TokenRelationshipMap.cjs"));

var _Key = _interopRequireDefault(require("../Key.cjs"));

var _LedgerId = _interopRequireDefault(require("../LedgerId.cjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Response when the client sends the node CryptoGetInfoQuery.
 */
class ContractInfo {
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
  constructor(props) {
    /**
     * ID of the contract instance, in the format used in transactions.
     *
     * @readonly
     */
    this.contractId = props.contractId;
    /**
     * ID of the cryptocurrency account owned by the contract instance,
     * in the format used in transactions.
     *
     * @readonly
     */

    this.accountId = props.accountId;
    /**
     * ID of both the contract instance and the cryptocurrency account owned by the contract
     * instance, in the format used by Solidity.
     *
     * @readonly
     */

    this.contractAccountId = props.contractAccountId;
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

    this.adminKey = props.adminKey != null ? props.adminKey : null;
    /**
     * The current time at which this contract instance (and its account) is set to expire.
     *
     * @readonly
     */

    this.expirationTime = props.expirationTime;
    /**
     * The expiration time will extend every this many seconds. If there are insufficient funds,
     * then it extends as long as possible. If the account is empty when it expires,
     * then it is deleted.
     *
     * @readonly
     */

    this.autoRenewPeriod = props.autoRenewPeriod;
    /**
     * Number of bytes of storage being used by this instance (which affects the cost to
     * extend the expiration time).
     *
     * @readonly
     */

    this.storage = props.storage;
    /**
     * The memo associated with the contract (max 100 bytes).
     *
     * @readonly
     */

    this.contractMemo = props.contractMemo;
    /**
     * The current balance of the contract.
     *
     * @readonly
     */

    this.balance = props.balance;
    /**
     * Whether the contract has been deleted
     *
     * @readonly
     */

    this.isDeleted = props.isDeleted;
    /**
     * The tokens associated to the contract
     *
     * @readonly
     */

    this.tokenRelationships = props.tokenRelationships;
    this.ledgerId = props.ledgerId;
    Object.freeze(this);
  }
  /**
   * @internal
   * @param {proto.IContractInfo} info
   * @returns {ContractInfo}
   */


  static _fromProtobuf(info) {
    const autoRenewPeriod =
    /** @type {Long | number} */

    /** @type {proto.IDuration} */
    info.autoRenewPeriod.seconds;
    return new ContractInfo({
      contractId: _ContractId.default._fromProtobuf(
      /** @type {proto.IContractID} */
      info.contractID),
      accountId: _AccountId.default._fromProtobuf(
      /** @type {proto.IAccountID} */
      info.accountID),
      contractAccountId: info.contractAccountID != null ? info.contractAccountID : "",
      adminKey: info.adminKey != null ? _Key.default._fromProtobufKey(info.adminKey) : null,
      expirationTime: _Timestamp.default._fromProtobuf(
      /** @type {proto.ITimestamp} */
      info.expirationTime),
      autoRenewPeriod: new _Duration.default(autoRenewPeriod),
      storage: info.storage != null ? info.storage instanceof _long.default ? info.storage : _long.default.fromValue(info.storage) : _long.default.ZERO,
      contractMemo: info.memo != null ? info.memo : "",
      balance: _Hbar.default.fromTinybars(info.balance != null ? info.balance : 0),
      isDeleted:
      /** @type {boolean} */
      info.deleted,
      tokenRelationships: _TokenRelationshipMap.default._fromProtobuf(info.tokenRelationships != null ? info.tokenRelationships : []),
      ledgerId: info.ledgerId != null ? _LedgerId.default.fromBytes(info.ledgerId) : null
    });
  }
  /**
   * @internal
   * @returns {proto.IContractInfo}
   */


  _toProtobuf() {
    return {
      contractID: this.contractId._toProtobuf(),
      accountID: this.accountId._toProtobuf(),
      contractAccountID: this.contractAccountId,
      adminKey: this.adminKey != null ? this.adminKey._toProtobufKey() : null,
      expirationTime: this.expirationTime._toProtobuf(),
      autoRenewPeriod: this.autoRenewPeriod != null ? this.autoRenewPeriod._toProtobuf() : null,
      storage: this.storage,
      memo: this.contractMemo,
      balance: this.balance.toTinybars(),
      deleted: this.isDeleted,
      tokenRelationships: this.tokenRelationships != null ? this.tokenRelationships._toProtobuf() : null,
      ledgerId: this.ledgerId != null ? this.ledgerId.toBytes() : null
    };
  }
  /**
   * @param {Uint8Array} bytes
   * @returns {ContractInfo}
   */


  static fromBytes(bytes) {
    return ContractInfo._fromProtobuf(proto.ContractGetInfoResponse.ContractInfo.decode(bytes));
  }
  /**
   * @returns {Uint8Array}
   */


  toBytes() {
    return proto.ContractGetInfoResponse.ContractInfo.encode(this._toProtobuf()).finish();
  }

}

exports.default = ContractInfo;