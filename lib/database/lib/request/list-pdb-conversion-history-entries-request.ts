/**
 *
 *
 * OpenAPI spec version: 20160918
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/database/ListPdbConversionHistoryEntries.ts.html |here} to see how to use ListPdbConversionHistoryEntriesRequest.
 */
export interface ListPdbConversionHistoryEntriesRequest extends common.BaseRequest {
  /**
   * The database [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "databaseId": string;
  /**
   * A filter to return only the pluggable database conversion history entries that match the specified conversion action. For example, you can use this filter to return only entries for the precheck operation.
   */
  "pdbConversionAction"?: string;
  /**
   * A filter to return only the pluggable database conversion history entries that match the specified lifecycle state. For example, you can use this filter to return only entries in the \"failed\" lifecycle state.
   */
  "lifecycleState"?: string;
  /**
   * The field to sort by. You can provide one sort order (`sortOrder`). The default order for `TIMECREATED` is ascending.
   *
   */
  "sortBy"?: ListPdbConversionHistoryEntriesRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   */
  "sortOrder"?: ListPdbConversionHistoryEntriesRequest.SortOrder;
  /**
   * Unique identifier for the request.
   *
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
   * The pagination token to continue listing from.
   */
  "page"?: string;
}

export namespace ListPdbConversionHistoryEntriesRequest {
  export enum SortBy {
    Timestarted = "TIMESTARTED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}