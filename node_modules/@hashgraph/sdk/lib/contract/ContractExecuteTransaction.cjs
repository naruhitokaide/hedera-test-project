"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Hbar = _interopRequireDefault(require("../Hbar.cjs"));

var _Transaction = _interopRequireWildcard(require("../transaction/Transaction.cjs"));

var _ContractId = _interopRequireDefault(require("./ContractId.cjs"));

var _ContractFunctionParameters = _interopRequireDefault(require("./ContractFunctionParameters.cjs"));

var _long = _interopRequireDefault(require("long"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").IContractCallTransactionBody} proto.IContractCallTransactionBody
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 * @typedef {import("@hashgraph/proto").IContractID} proto.IContractID
 * @typedef {import("@hashgraph/proto").IFileID} proto.IFileID
 */

/**
 * @typedef {import("bignumber.js").default} BigNumber
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 */

/**
 * @typedef {object} FunctionParameters
 * @property {string} name
 * @property {ContractFunctionParameters} parameters
 */
class ContractExecuteTransaction extends _Transaction.default {
  /**
   * @param {object} [props]
   * @param {ContractId | string} [props.contractId]
   * @param {number | Long} [props.gas]
   * @param {number | string | Long | BigNumber | Hbar} [props.amount]
   * @param {Uint8Array} [props.functionParameters]
   * @param {FunctionParameters} [props.function]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?ContractId}
     */

    this._contractId = null;
    /**
     * @private
     * @type {?Long}
     */

    this._gas = null;
    /**
     * @private
     * @type {?Hbar}
     */

    this._amount = null;
    /**
     * @private
     * @type {?Uint8Array}
     */

    this._functionParameters = null;

    if (props.contractId != null) {
      this.setContractId(props.contractId);
    }

    if (props.gas != null) {
      this.setGas(props.gas);
    }

    if (props.amount != null) {
      this.setPayableAmount(props.amount);
    }

    if (props.functionParameters != null) {
      this.setFunctionParameters(props.functionParameters);
    } else if (props.function != null) {
      this.setFunction(props.function.name, props.function.parameters);
    }
  }
  /**
   * @internal
   * @param {proto.ITransaction[]} transactions
   * @param {proto.ISignedTransaction[]} signedTransactions
   * @param {TransactionId[]} transactionIds
   * @param {AccountId[]} nodeIds
   * @param {proto.ITransactionBody[]} bodies
   * @returns {ContractExecuteTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const call =
    /** @type {proto.IContractCallTransactionBody} */
    body.contractCall;
    return _Transaction.default._fromProtobufTransactions(new ContractExecuteTransaction({
      contractId: call.contractID != null ? _ContractId.default._fromProtobuf(
      /** @type {proto.IContractID} */
      call.contractID) : undefined,
      gas: call.gas != null ? call.gas : undefined,
      amount: call.amount ? call.amount : undefined,
      functionParameters: call.functionParameters != null ? call.functionParameters : undefined
    }), transactions, signedTransactions, transactionIds, nodeIds, bodies);
  }
  /**
   * @returns {?ContractId}
   */


  get contractId() {
    return this._contractId;
  }
  /**
   * Sets the contract ID which is being executed in this transaction.
   *
   * @param {ContractId | string} contractId
   * @returns {ContractExecuteTransaction}
   */


  setContractId(contractId) {
    this._requireNotFrozen();

    this._contractId = typeof contractId === "string" ? _ContractId.default.fromString(contractId) : contractId.clone();
    return this;
  }
  /**
   * @returns {?Long}
   */


  get gas() {
    return this._gas;
  }
  /**
   * Sets the contract ID which is being executed in this transaction.
   *
   * @param {number | Long} gas
   * @returns {ContractExecuteTransaction}
   */


  setGas(gas) {
    this._requireNotFrozen();

    this._gas = gas instanceof _long.default ? gas : _long.default.fromValue(gas);
    return this;
  }
  /**
   * @returns {?Hbar}
   */


  get payableAmount() {
    return this._amount;
  }
  /**
   * Sets the contract ID which is being executed in this transaction.
   *
   * @param {number | string | Long | BigNumber | Hbar} amount
   * @returns {ContractExecuteTransaction}
   */


  setPayableAmount(amount) {
    this._requireNotFrozen();

    this._amount = amount instanceof _Hbar.default ? amount : new _Hbar.default(amount);
    return this;
  }
  /**
   * @returns {?Uint8Array}
   */


  get functionParameters() {
    return this._functionParameters;
  }
  /**
   * @param {Uint8Array} functionParameters
   * @returns {this}
   */


  setFunctionParameters(functionParameters) {
    this._requireNotFrozen();

    this._functionParameters = functionParameters;
    return this;
  }
  /**
   * @param {string} name
   * @param {ContractFunctionParameters} [functionParameters]
   * @returns {this}
   */


  setFunction(name, functionParameters) {
    this._requireNotFrozen();

    this._functionParameters = functionParameters != null ? functionParameters._build(name) : new _ContractFunctionParameters.default()._build(name);
    return this;
  }
  /**
   * @param {Client} client
   */


  _validateChecksums(client) {
    if (this._contractId != null) {
      this._contractId.validateChecksum(client);
    }
  }
  /**
   * @override
   * @internal
   * @param {Channel} channel
   * @param {proto.ITransaction} request
   * @returns {Promise<proto.ITransactionResponse>}
   */


  _execute(channel, request) {
    return channel.smartContract.contractCallMethod(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "contractCall";
  }
  /**
   * @override
   * @protected
   * @returns {proto.IContractCallTransactionBody}
   */


  _makeTransactionData() {
    return {
      contractID: this._contractId != null ? this._contractId._toProtobuf() : null,
      gas: this._gas,
      amount: this._amount != null ? this._amount.toTinybars() : null,
      functionParameters: this._functionParameters
    };
  }

}

exports.default = ContractExecuteTransaction;

_Transaction.TRANSACTION_REGISTRY.set("contractCall", // eslint-disable-next-line @typescript-eslint/unbound-method
ContractExecuteTransaction._fromProtobuf);