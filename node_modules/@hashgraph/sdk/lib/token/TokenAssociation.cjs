"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AccountId = _interopRequireDefault(require("../account/AccountId.cjs"));

var _TokenId = _interopRequireDefault(require("../token/TokenId.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITokenAssociation} proto.ITokenAssociation
 */
class TokenAssociation {
  /**
   * @param {object} props
   * @param {AccountId | string} [props.accountId]
   * @param {TokenId | string} [props.tokenId]
   */
  constructor(props = {}) {
    /**
     * @type {?AccountId}
     */
    this._accountId;

    if (props.accountId != null) {
      this.setAccountId(props.accountId);
    }
    /**
     * @type {?TokenId}
     */


    this._tokenId;

    if (props.tokenId != null) {
      this.setTokenId(props.tokenId);
    }
  }
  /**
   * @returns {?AccountId}
   */


  get accountId() {
    return this._accountId;
  }
  /**
   * @param {AccountId | string} accountId
   * @returns {this}
   */


  setAccountId(accountId) {
    this._accountId = typeof accountId === "string" ? _AccountId.default.fromString(accountId) : accountId;
    return this;
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
    this._tokenId = typeof tokenId === "string" ? _TokenId.default.fromString(tokenId) : tokenId;
    return this;
  }
  /**
   * @internal
   * @abstract
   * @param {proto.ITokenAssociation} association
   * @returns {TokenAssociation}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  static _fromProtobuf(association) {
    return new TokenAssociation({
      accountId: association.accountId != null ? _AccountId.default._fromProtobuf(association.accountId) : undefined,
      tokenId: association.tokenId != null ? _TokenId.default._fromProtobuf(association.tokenId) : undefined
    });
  }
  /**
   * @internal
   * @abstract
   * @returns {proto.ITokenAssociation}
   */


  _toProtobuf() {
    return {
      accountId: this._accountId != null ? this._accountId._toProtobuf() : undefined,
      tokenId: this._tokenId != null ? this._tokenId._toProtobuf() : undefined
    };
  }

}

exports.default = TokenAssociation;