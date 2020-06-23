/**
 *
 *
 * OpenAPI spec version: 20190325
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
export interface ListFolderTagsRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * Unique data asset key.
   */
  "dataAssetKey": string;
  /**
   * Unique folder key.
   */
  "folderKey": string;
  /**
   * Immutable resource name.
   */
  "name"?: string;
  /**
   * A filter to return only resources that match the specified lifecycle state. The value is case insensitive.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Unique key of the related term.
   */
  "termKey"?: string;
  /**
   * Path of the related term.
   */
  "termPath"?: string;
  /**
   * Time that the resource was created. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * OCID of the user who created the resource.
   */
  "createdById"?: string;
  /**
   * Specifies the fields to return in a folder tag summary response.
   *
   */
  "fields"?: Array<ListFolderTagsRequest.Fields>;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. If no value is specified TIMECREATED is default.
   *
   */
  "sortBy"?: ListFolderTagsRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListFolderTagsRequest.SortOrder;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListFolderTagsRequest {
  export enum Fields {
    Key = "key",
    Name = "name",
    TermKey = "termKey",
    TermPath = "termPath",
    TermDescription = "termDescription",
    LifecycleState = "lifecycleState",
    TimeCreated = "timeCreated",
    Uri = "uri",
    GlossaryKey = "glossaryKey",
    FolderKey = "folderKey"
  }

  export enum SortBy {
    TIMECREATED = "TIMECREATED",
    DISPLAYNAME = "DISPLAYNAME"
  }

  export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
  }
}
