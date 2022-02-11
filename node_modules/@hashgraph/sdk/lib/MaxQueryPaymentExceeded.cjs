"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @typedef {import("./Hbar.js").default} Hbar
 */
class MaxQueryPaymentExceeded extends Error {
  /**
   * @param {Hbar} queryCost
   * @param {Hbar} maxQueryPayment
   */
  constructor(queryCost, maxQueryPayment) {
    super();
    this.message = `query cost of ${queryCost.toString()} HBAR exceeds max set on client: ${maxQueryPayment.toString()} HBAR`;
    this.name = "MaxQueryPaymentExceededError";
    this.queryCost = queryCost;
    this.maxQueryPayment = maxQueryPayment;
  }

}

exports.default = MaxQueryPaymentExceeded;