/**
 * @property {?proto.CryptoService} _crypto
 * @property {?proto.SmartContractService} _smartContract
 * @property {?proto.FileService} _file
 * @property {?proto.FreezeService} _freeze
 * @property {?proto.ConsensusService} _consensus
 * @property {?proto.NetworkService} _network
 */
export default class NodeChannel extends Channel {
    /**
     * @internal
     * @param {string} address
     * @param {string=} cert
     */
    constructor(address: string, cert?: string | undefined);
    cert: string | undefined;
    /**
     * @type {Client}
     * @private
     */
    private _client;
}
import Channel from "./Channel.js";
