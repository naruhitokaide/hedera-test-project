/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").IQuery} proto.IQuery
 * @typedef {import("@hashgraph/proto").IQueryHeader} proto.IQueryHeader
 * @typedef {import("@hashgraph/proto").IResponse} proto.IResponse
 * @typedef {import("@hashgraph/proto").IResponseHeader} proto.IResponseHeader
 * @typedef {import("@hashgraph/proto").IFileGetContentsQuery} proto.IFileGetContentsQuery
 * @typedef {import("@hashgraph/proto").IFileGetContentsResponse} proto.IFileGetContentsResponse
 * @typedef {import("@hashgraph/proto").IFileContents} proto.IFileContents
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../account/AccountId.js").default} AccountId
 */
/**
 * @augments {Query<Uint8Array>}
 */
export default class FileContentsQuery extends Query<Uint8Array> {
    /**
     * @internal
     * @param {proto.IQuery} query
     * @returns {FileContentsQuery}
     */
    static _fromProtobuf(query: proto.IQuery): FileContentsQuery;
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
     * @returns {FileContentsQuery}
     */
    setFileId(fileId: FileId | string): FileContentsQuery;
}
export namespace proto {
    type IQuery = import("@hashgraph/proto").IQuery;
    type IQueryHeader = import("@hashgraph/proto").IQueryHeader;
    type IResponse = import("@hashgraph/proto").IResponse;
    type IResponseHeader = import("@hashgraph/proto").IResponseHeader;
    type IFileGetContentsQuery = import("@hashgraph/proto").IFileGetContentsQuery;
    type IFileGetContentsResponse = import("@hashgraph/proto").IFileGetContentsResponse;
    type IFileContents = import("@hashgraph/proto").IFileContents;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type AccountId = import("../account/AccountId.js").default;
import Query from "../query/Query.js";
import FileId from "./FileId.js";
