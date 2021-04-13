/**
 *
 *
 * OpenAPI spec version: 20181025
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/limits/ListLimitValues.ts.html |here} to see how to use ListLimitValuesRequest.
 */
export interface ListLimitValuesRequest extends common.BaseRequest {
  /**
   * The OCID of the parent compartment (remember that the tenancy is simply the root compartment).
   *
   */
  "compartmentId": string;
  /**
   * The target service name
   */
  "serviceName": string;
  /**
   * Filter entries by scope type.
   */
  "scopeType"?: ListLimitValuesRequest.ScopeType;
  /**
   * Filter entries by availability domain. This implies that only AD-specific values will be returned.
   *
   */
  "availabilityDomain"?: string;
  /**
   * Optional field, can be used to see a specific resource limit value.
   */
  "name"?: string;
  /**
   * The field to sort by. We will be implicitly sorting by availabilityDomain, as a second level field, if available.
   *
   */
  "sortBy"?: ListLimitValuesRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'. By default it will be ascending.
   *
   */
  "sortOrder"?: ListLimitValuesRequest.SortOrder;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListLimitValuesRequest {
  export enum ScopeType {
    Global = "GLOBAL",
    Region = "REGION",
    Ad = "AD"
  }

  export enum SortBy {
    Name = "name"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
