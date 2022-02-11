export default class ExchangeRate {
    /**
     * @internal
     * @param {import("@hashgraph/proto").IExchangeRate} rate
     * @returns {ExchangeRate}
     */
    static _fromProtobuf(rate: import("@hashgraph/proto").IExchangeRate): ExchangeRate;
    /**
     * @private
     * @param {object} props
     * @param {number} props.hbars
     * @param {number} props.cents
     * @param {Date} props.expirationTime
     */
    private constructor();
    /**
     * Denotes Hbar equivalent to cents (USD)
     *
     * @readonly
     * @type {number}
     */
    readonly hbars: number;
    /**
     * Denotes cents (USD) equivalent to Hbar
     *
     * @readonly
     * @type {number}
     */
    readonly cents: number;
    /**
     * Expiration time of this exchange rate
     *
     * @readonly
     * @type {Date}
     */
    readonly expirationTime: Date;
    /**
     * @internal
     * @returns {import("@hashgraph/proto").IExchangeRate}
     */
    _toProtobuf(): import("@hashgraph/proto").IExchangeRate;
}
