/**
 *
 *
 * OpenAPI spec version: 20200606
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/optimizer/ListProfileLevels.ts.html |here} to see how to use ListProfileLevelsRequest.
 */
export interface ListProfileLevelsRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
 * When set to true, the hierarchy of compartments is traversed and all compartments and subcompartments in the tenancy are returned depending on the the setting of `accessLevel`.
* <p>
Can only be set to true when performing ListCompartments on the tenancy (root compartment).
* 
 */
  "compartmentIdInSubtree": boolean;
  /**
   * Optional. A filter that returns results that match the name specified.
   */
  "name"?: string;
  /**
   * Optional. A filter that returns results that match the recommendation name specified.
   */
  "recommendationName"?: string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for NAME is ascending. The NAME sort order is case sensitive.
   *
   */
  "sortBy"?: ListProfileLevelsRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListProfileLevelsRequest {
  export enum SortBy {
    Name = "NAME",
    Timecreated = "TIMECREATED"
  }
}
