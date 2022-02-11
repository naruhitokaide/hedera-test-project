"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TokenId = _interopRequireDefault(require("./TokenId.cjs"));

var _Transaction = _interopRequireWildcard(require("../transaction/Transaction.cjs"));

var _CustomFixedFee = _interopRequireDefault(require("./CustomFixedFee.cjs"));

var _CustomFractionalFee = _interopRequireDefault(require("./CustomFractionalFee.cjs"));

var _CustomRoyaltyFee = _interopRequireDefault(require("./CustomRoyaltyFee.cjs"));

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
 * @typedef {import("@hashgraph/proto").ITokenFeeScheduleUpdateTransactionBody} proto.ITokenFeeScheduleUpdateTransactionBody
 * @typedef {import("@hashgraph/proto").ITokenID} proto.ITokenID
 */

/**
 * @typedef {import("bignumber.js").default} BigNumber
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 * @typedef {import("./CustomFee.js").default} CustomFee
 * @typedef {import("../account/AccountId.js").default} AccountId
 */

/**
 * FeeScheduleUpdate a new Hedera™ crypto-currency token.
 */
class TokenFeeScheduleUpdateTransaction extends _Transaction.default {
  /**
   * @param {object} [props]
   * @param {TokenId | string} [props.tokenId]
   * @param {CustomFee[]} [props.customFees]
   */
  constructor(props = {}) {
    super();
    /**
     * @private
     * @type {?TokenId}
     */

    this._tokenId = null;
    /**
     * @private
     * @type {CustomFee[]}
     */

    this._customFees = [];

    if (props.tokenId != null) {
      this.setTokenId(props.tokenId);
    }

    if (props.customFees != null) {
      this.setCustomFees(props.customFees);
    }
  }
  /**
   * @internal
   * @param {proto.ITransaction[]} transactions
   * @param {proto.ISignedTransaction[]} signedTransactions
   * @param {TransactionId[]} transactionIds
   * @param {AccountId[]} nodeIds
   * @param {proto.ITransactionBody[]} bodies
   * @returns {TokenFeeScheduleUpdateTransaction}
   */


  static _fromProtobuf(transactions, signedTransactions, transactionIds, nodeIds, bodies) {
    const body = bodies[0];
    const feeScheduleUpdate =
    /** @type {proto.ITokenFeeScheduleUpdateTransactionBody} */
    body.tokenFeeScheduleUpdate;
    return _Transaction.default._fromProtobufTransactions(new TokenFeeScheduleUpdateTransaction({
      tokenId: feeScheduleUpdate.tokenId != null ? _TokenId.default._fromProtobuf(feeScheduleUpdate.tokenId) : undefined,
      customFees: feeScheduleUpdate.customFees != null ? feeScheduleUpdate.customFees.map(fee => {
        if (fee.fixedFee != null) {
          return _CustomFixedFee.default._fromProtobuf(fee);
        } else if (fee.fractionalFee != null) {
          return _CustomFractionalFee.default._fromProtobuf(fee);
        } else {
          return _CustomRoyaltyFee.default._fromProtobuf(fee);
        }
      }) : undefined
    }), transactions, signedTransactions, transactionIds, nodeIds, bodies);
  }
  /**
   * @returns {?TokenId}
   */


  get tokenId() {
    return this._tokenId;
  }
  /**
   * @param {TokenId | string} tokenId
   * @returns {this}
   */


  setTokenId(tokenId) {
    this._requireNotFrozen();

    this._tokenId = typeof tokenId === "string" ? _TokenId.default.fromString(tokenId) : _TokenId.default._fromProtobuf(tokenId._toProtobuf());
    return this;
  }
  /**
   * @returns {CustomFee[]}
   */


  get customFees() {
    return this._customFees;
  }
  /**
   * @param {CustomFee[]} fees
   * @returns {this}
   */


  setCustomFees(fees) {
    this._requireNotFrozen();

    this._customFees = fees;
    return this;
  }
  /**
   * @override
   * @internal
   * @param {Channel} channel
   * @param {proto.ITransaction} request
   * @returns {Promise<proto.ITransactionResponse>}
   */


  _execute(channel, request) {
    return channel.token.updateTokenFeeSchedule(request);
  }
  /**
   * @override
   * @protected
   * @returns {NonNullable<proto.TransactionBody["data"]>}
   */


  _getTransactionDataCase() {
    return "tokenFeeScheduleUpdate";
  }
  /**
   * @override
   * @protected
   * @returns {proto.ITokenFeeScheduleUpdateTransactionBody}
   */


  _makeTransactionData() {
    return {
      tokenId: this._tokenId != null ? this._tokenId._toProtobuf() : null,
      customFees: this._customFees.map(fee => fee._toProtobuf())
    };
  }

}

exports.default = TokenFeeScheduleUpdateTransaction;

_Transaction.TRANSACTION_REGISTRY.set("tokenFeeScheduleUpdate", // eslint-disable-next-line @typescript-eslint/unbound-method
TokenFeeScheduleUpdateTransaction._fromProtobuf);