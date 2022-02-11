/**
 * @augments {ObjectMap<PublicKey, Uint8Array>}
 */
export default class NodeAccountIdSignatureMap extends ObjectMap<PublicKey, Uint8Array> {
    /**
     * @param {import("@hashgraph/proto").ISignatureMap} sigMap
     * @returns {NodeAccountIdSignatureMap}
     */
    static _fromTransactionSigMap(sigMap: import("@hashgraph/proto").ISignatureMap): NodeAccountIdSignatureMap;
    constructor();
}
import PublicKey from "../PublicKey.js";
import ObjectMap from "../ObjectMap.js";
