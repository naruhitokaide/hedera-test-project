export default CACHE;
export type ContractId = import("./contract/ContractId.js").default;
export type AccountId = import("./account/AccountId.js").default;
export type KeyList = import("./KeyList.js").default;
export type PublicKey = import("./PublicKey.js").default;
export type PrivateKey = import("./PrivateKey.js").default;
export namespace proto {
    type IKey = import("@hashgraph/proto").IKey;
    type IKeyList = import("@hashgraph/proto").IKeyList;
    type IThresholdKey = import("@hashgraph/proto").IThresholdKey;
    type IContractID = import("@hashgraph/proto").IContractID;
}
export namespace cryptography {
    type PrivateKey = import("@hashgraph/cryptography").PrivateKey;
}
export type FromProtobufKeyFuncT<ProtobufT extends object, SdkT extends object> = (proto: ProtobufT) => SdkT;
declare namespace CACHE {
    const contractId: FromProtobufKeyFuncT<proto.IContractID, ContractId> | null;
    const keyList: FromProtobufKeyFuncT<proto.IKeyList, KeyList> | null;
    const thresholdKey: FromProtobufKeyFuncT<proto.IThresholdKey, KeyList> | null;
    const publicKeyED25519: FromProtobufKeyFuncT<Uint8Array, PublicKey> | null;
    const publicKeyECDSA: FromProtobufKeyFuncT<Uint8Array, PublicKey> | null;
    const privateKeyConstructor: ((key: import("@hashgraph/cryptography").PrivateKey) => import("./PrivateKey.js").default) | null;
    const accountIdConstructor: ((shard: number | import("long").Long, realm: number | import("long").Long, key: import("./PublicKey.js").default) => import("./account/AccountId.js").default) | null;
    const delegateContractId: FromProtobufKeyFuncT<proto.IContractID, ContractId> | null;
}
