/**
 * @param {Uint8Array} data
 * @returns {ArrayBuffer}
 */
export function encodeRequest(data: Uint8Array): ArrayBuffer;
/**
 * @param {ArrayBuffer} data
 * @param {number} byteOffset
 * @param {number} byteLength
 * @returns {Uint8Array}
 */
export function decodeUnaryResponse(data: ArrayBuffer, byteOffset?: number, byteLength?: number): Uint8Array;
/**
 * @internal
 * @abstract
 */
export default class Channel {
    /**
     * @protected
     * @type {?CryptoService}
     */
    protected _crypto: CryptoService | null;
    /**
     * @protected
     * @type {?SmartContractService}
     */
    protected _smartContract: SmartContractService | null;
    /**
     * @protected
     * @type {?FileService}
     */
    protected _file: FileService | null;
    /**
     * @protected
     * @type {?ConsensusService}
     */
    protected _consensus: ConsensusService | null;
    /**
     * @protected
     * @type {?FreezeService}
     */
    protected _freeze: FreezeService | null;
    /**
     * @protected
     * @type {?NetworkService}
     */
    protected _network: NetworkService | null;
    /**
     * @protected
     * @type {?TokenService}
     */
    protected _token: TokenService | null;
    /**
     * @protected
     * @type {?ScheduleService}
     */
    protected _schedule: ScheduleService | null;
    /**
     * @abstract
     * @returns {void}
     */
    close(): void;
    /**
     * @returns {CryptoService}
     */
    get crypto(): CryptoService;
    /**
     * @returns {SmartContractService}
     */
    get smartContract(): SmartContractService;
    /**
     * @returns {FileService}
     */
    get file(): FileService;
    /**
     * @returns {ConsensusService}
     */
    get consensus(): ConsensusService;
    /**
     * @returns {FreezeService}
     */
    get freeze(): FreezeService;
    /**
     * @returns {NetworkService}
     */
    get network(): NetworkService;
    /**
     * @returns {TokenService}
     */
    get token(): TokenService;
    /**
     * @returns {ScheduleService}
     */
    get schedule(): ScheduleService;
    /**
     * @abstract
     * @protected
     * @param {string} serviceName
     * @returns {import("protobufjs").RPCImpl}
     */
    protected _createUnaryClient(serviceName: string): import("protobufjs").RPCImpl;
}
import { CryptoService } from "@hashgraph/proto";
import { SmartContractService } from "@hashgraph/proto";
import { FileService } from "@hashgraph/proto";
import { ConsensusService } from "@hashgraph/proto";
import { FreezeService } from "@hashgraph/proto";
import { NetworkService } from "@hashgraph/proto";
import { TokenService } from "@hashgraph/proto";
import { ScheduleService } from "@hashgraph/proto";
