/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").HederaFunctionality} proto.HederaFunctionality
 */
declare class RequestType {
    /**
     * @internal
     * @param {number} code
     * @returns {RequestType}
     */
    static _fromCode(code: number): RequestType;
    /**
     * @hideconstructor
     * @internal
     * @param {number} code
     */
    constructor(code: number);
    /** @readonly */
    readonly _code: number;
    /**
     * @returns {string}
     */
    toString(): string;
    /**
     * @returns {proto.HederaFunctionality}
     */
    valueOf(): proto.HederaFunctionality;
}
declare namespace RequestType {
    const None: RequestType;
    const CryptoTransfer: RequestType;
    const CryptoUpdate: RequestType;
    const CryptoDelete: RequestType;
    const CryptoAddLiveHash: RequestType;
    const CryptoDeleteLiveHash: RequestType;
    const ContractCall: RequestType;
    const ContractCreate: RequestType;
    const ContractUpdate: RequestType;
    const FileCreate: RequestType;
    const FileAppend: RequestType;
    const FileUpdate: RequestType;
    const FileDelete: RequestType;
    const CryptoGetAccountBalance: RequestType;
    const CryptoGetAccountRecords: RequestType;
    const CryptoGetInfo: RequestType;
    const ContractCallLocal: RequestType;
    const ContractGetInfo: RequestType;
    const ContractGetBytecode: RequestType;
    const GetBySolidityID: RequestType;
    const GetByKey: RequestType;
    const CryptoGetLiveHash: RequestType;
    const CryptoGetStakers: RequestType;
    const FileGetContents: RequestType;
    const FileGetInfo: RequestType;
    const TransactionGetRecord: RequestType;
    const ContractGetRecords: RequestType;
    const CryptoCreate: RequestType;
    const SystemDelete: RequestType;
    const SystemUndelete: RequestType;
    const ContractDelete: RequestType;
    const Freeze: RequestType;
    const CreateTransactionRecord: RequestType;
    const CryptoAccountAutoRenew: RequestType;
    const ContractAutoRenew: RequestType;
    const GetVersionInfo: RequestType;
    const TransactionGetReceipt: RequestType;
    const ConsensusCreateTopic: RequestType;
    const ConsensusUpdateTopic: RequestType;
    const ConsensusDeleteTopic: RequestType;
    const ConsensusGetTopicInfo: RequestType;
    const ConsensusSubmitMessage: RequestType;
    const UncheckedSubmit: RequestType;
    const TokenCreate: RequestType;
    const TokenGetInfo: RequestType;
    const TokenFreezeAccount: RequestType;
    const TokenUnfreezeAccount: RequestType;
    const TokenGrantKycToAccount: RequestType;
    const TokenRevokeKycFromAccount: RequestType;
    const TokenDelete: RequestType;
    const TokenUpdate: RequestType;
    const TokenMint: RequestType;
    const TokenBurn: RequestType;
    const TokenAccountWipe: RequestType;
    const TokenAssociateToAccount: RequestType;
    const TokenDissociateFromAccount: RequestType;
    const ScheduleCreate: RequestType;
    const ScheduleDelete: RequestType;
    const ScheduleSign: RequestType;
    const ScheduleGetInfo: RequestType;
    const TokenPause: RequestType;
    const TokenUnpause: RequestType;
}
export default RequestType;
export namespace proto {
    type HederaFunctionality = import("@hashgraph/proto").HederaFunctionality;
}
