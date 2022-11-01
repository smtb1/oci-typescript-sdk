/**
 *
 *
 * OpenAPI spec version: 20220125
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/disasterrecovery/ListWorkRequests.ts.html |here} to see how to use ListWorkRequestsRequest.
 */
export interface ListWorkRequestsRequest extends common.BaseRequest {
  /**
 * The ID (OCID) of the compartment in which to list resources.
* <p>
Example: `ocid1.compartment.oc1..exampleocid1`
* 
 */
  "compartmentId"?: string;
  /**
 * The ID (OCID) of the asynchronous work request.
* <p>
Example: `ocid1.workrequest.oc1.phx.exampleocid1`
* 
 */
  "workRequestId"?: string;
  /**
   * A filter to return only resources whose lifecycleState matches the given OperationStatus.
   *
   */
  "status"?: model.OperationStatus;
  /**
   * The ID (OCID) of the resource affected by the work request.
   * Example: `ocid1.drplanexecution.oc1.iad.exampleocid`
   *
   */
  "resourceId"?: string;
  /**
   * The client request ID for tracing.
   *
   */
  "opcRequestId"?: string;
  /**
 * For list pagination. The value of the `opc-next-page` response
* header from the previous \"List\" call.
* <p>
For important details about how pagination works,
* see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* 
 */
  "page"?: string;
  /**
 * For list pagination. The maximum number of results per page,
* or items to return in a paginated \"List\" call.
* 1 is the minimum, 1000 is the maximum.
* <p>
For important details about how pagination works,
* see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: `100`
* 
 */
  "limit"?: number;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided.
   * Default order for timeAccepted is descending.
   *
   */
  "sortBy"?: ListWorkRequestsRequest.SortBy;
}

export namespace ListWorkRequestsRequest {
  export enum SortBy {
    TimeAccepted = "timeAccepted"
  }
}