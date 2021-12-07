/**
 *
 *
 * OpenAPI spec version: 20201101
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/databasemanagement/ListDbManagementPrivateEndpoints.ts.html |here} to see how to use ListDbManagementPrivateEndpointsRequest.
 */
export interface ListDbManagementPrivateEndpointsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * A filter to return only resources that match the entire name.
   */
  "name"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VCN.
   */
  "vcnId"?: string;
  /**
   * The option to filter Database Management private endpoints that can used for Oracle Databases in a cluster. This should be used along with the vcnId query parameter.
   *
   */
  "isCluster"?: boolean;
  /**
   * The lifecycle state of a resource.
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * The maximum number of records returned in the paginated response.
   */
  "limit"?: number;
  /**
   * The page token representing the page from where the next set of paginated results
   * are retrieved. This is usually retrieved from a previous list call.
   *
   */
  "page"?: string;
  /**
   * The option to sort information in ascending (\u2018ASC\u2019) or descending (\u2018DESC\u2019) order. Ascending order is the default order.
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The field to sort information by. Only one sortOrder can be used. The default sort order
   * for \u2018TIMECREATED\u2019 is descending and the default sort order for \u2018NAME\u2019 is ascending.
   * The \u2018NAME\u2019 sort order is case-sensitive.
   *
   */
  "sortBy"?: ListDbManagementPrivateEndpointsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListDbManagementPrivateEndpointsRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Name = "NAME"
  }
}