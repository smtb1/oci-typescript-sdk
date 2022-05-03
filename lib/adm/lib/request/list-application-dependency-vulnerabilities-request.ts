/**
 *
 *
 * OpenAPI spec version: 20220421
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/adm/ListApplicationDependencyVulnerabilities.ts.html |here} to see how to use ListApplicationDependencyVulnerabilitiesRequest.
 */
export interface ListApplicationDependencyVulnerabilitiesRequest extends common.BaseRequest {
  /**
   * Unique Vulnerability Audit identifier path parameter.
   */
  "vulnerabilityAuditId": string;
  /**
   * A filter to return only Vulnerability Audits that match the specified id.
   */
  "vulnerabilityId"?: string;
  /**
   * A filter that returns only Vulnerability Audits that have a Common Vulnerability Scoring System Version 3 (CVSS V3) greater or equal than the specified value.
   *
   */
  "cvssV3GreaterThanOrEqual"?: number;
  /**
   * A filter that returns only Vulnerability Audits that have a Common Vulnerability Scoring System Version 2 (CVSS V2) greater or equal than the specified value.
   *
   */
  "cvssV2GreaterThanOrEqual"?: number;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the `opc-next-page` header field of a previous response.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided.
   * Default order for gav is ascending where ascending corresponds to alphanumerical order.
   * Default order for nodeId is ascending where ascending corresponds to alphanumerical order.
   *
   */
  "sortBy"?: ListApplicationDependencyVulnerabilitiesRequest.SortBy;
  /**
   * A filter to return only resources that match the entire GAV (Group Artifact Version) identifier given.
   */
  "gav"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListApplicationDependencyVulnerabilitiesRequest {
  export enum SortBy {
    Gav = "gav",
    NodeId = "nodeId"
  }
}