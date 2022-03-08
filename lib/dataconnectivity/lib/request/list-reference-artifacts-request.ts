/**
 *
 *
 * OpenAPI spec version: 20210217
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dataconnectivity/ListReferenceArtifacts.ts.html |here} to see how to use ListReferenceArtifactsRequest.
 */
export interface ListReferenceArtifactsRequest extends common.BaseRequest {
  /**
   * The registry Ocid.
   */
  "registryId": string;
  /**
   * The ID of a dcms artifact (DataAsset or Endpoint).
   */
  "dcmsArtifactId": string;
  /**
   * For list pagination. The value for this parameter is the `opc-next-page` or the `opc-prev-page` response header from the previous `List` call. See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * Sets the maximum number of results per page, or items to return in a paginated `List` call. See [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * Specifies the fields to get for an object.
   */
  "fields"?: Array<string>;
  /**
   * Type of the object to filter the results with.
   */
  "type"?: string;
  /**
   * Specifies the field to sort by. Accepts only one field. By default, when you sort by time fields, results are shown in descending order. All other fields default to ascending order. Sorting related parameters are ignored when parameter `query` is present (search operation and sorting order is by relevance score in descending order).
   */
  "sortBy"?: ListReferenceArtifactsRequest.SortBy;
  /**
   * Specifies sort order to use, either `ASC` (ascending) or `DESC` (descending).
   */
  "sortOrder"?: ListReferenceArtifactsRequest.SortOrder;
  /**
   * Used to filter by the name of the object.
   */
  "name"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * Types which wont be listed while listing dataAsset/Connection
   */
  "excludeTypes"?: Array<string>;
  /**
   * If value is FAVORITES_ONLY, then only objects marked as favorite by the requesting user will be included in result. If value is NON_FAVORITES_ONLY, then objects marked as favorites by the requesting user will be skipped. If value is ALL or if not specified, all objects, irrespective of favorites or not will be returned. Default is ALL.
   */
  "favoritesQueryParam"?: ListReferenceArtifactsRequest.FavoritesQueryParam;
  /**
   * Unique key of the service.
   */
  "serviceArtifactId"?: string;
}

export namespace ListReferenceArtifactsRequest {
  export enum SortBy {
    Id = "id",
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum FavoritesQueryParam {
    FavoritesOnly = "FAVORITES_ONLY",
    NonFavoritesOnly = "NON_FAVORITES_ONLY",
    All = "ALL"
  }
}