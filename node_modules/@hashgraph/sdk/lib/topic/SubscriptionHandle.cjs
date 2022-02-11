"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class SubscriptionHandle {
  constructor() {
    /** @type {{(): void} | null} */
    this._call = null;
  }
  /**
   * @param {() => void} call
   * @returns {void}
   */


  _setCall(call) {
    this._call = call;
  }

  unsubscribe() {
    if (this._call != null) {
      this._call();
    }
  }

}

exports.default = SubscriptionHandle;