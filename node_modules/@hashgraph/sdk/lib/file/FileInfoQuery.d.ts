/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").IFileGetInfoQuery} proto.IFileGetInfoQuery
 * @typedef {import("@hashgraph/proto").IFileGetInfoResponse} proto.IFileGetInfoResponse
 * @typedef {import("@hashgraph/proto").IFileInfo} proto.IFileInfo
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 */
/**
 * @augments {Query<FileInfo>}
 */
export default class FileInfoQuery extends Query<FileInfo> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {FileInfoQuery}
     */
    static _fromProtobuf(query: proto.IQuery): FileInfoQuery;
    /**
     * @param {object} [props]
     * @param {FileId | string} [props.fileId]
     */
    constructor(props?: {
        fileId?: string | FileId | undefined;
    } | undefined);
    /**
     * @type {?FileId}
     * @private
     */
    private _fileId;
    /**
     * @returns {?FileId}
     */
    get fileId(): FileId | null;
    /**
     * Set the file ID for which the info is being requested.
     *
     * @param {FileId | string} fileId
     * @returns {FileInfoQuery}
     */
    setFileId(fileId: FileId | string): FileInfoQuery;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type IFileGetInfoQuery = import("@hashgraph/proto").IFileGetInfoQuery;
    type IFileGetInfoResponse = import("@hashgraph/proto").IFileGetInfoResponse;
    type IFileInfo = import("@hashgraph/proto").IFileInfo;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
import FileInfo from "./FileInfo.js";
import Query from "../query/Query.js";
import FileId from "./FileId.js";
