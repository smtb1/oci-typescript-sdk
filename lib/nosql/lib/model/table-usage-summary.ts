/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
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
 * TableUsageSummary represents a single usage record, or slice, that includes
 * information about read and write throughput consumed during that period
 * as well as the current information regarding storage capacity. In
 * addition the count of throttling exceptions for the period is reported.
 *
 */
export interface TableUsageSummary {
  /**
   * The length of the sampling period. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "secondsInPeriod"?: number;
  /**
   * Read throughput during the sampling period. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "readUnits"?: number;
  /**
   * Write throughput during the sampling period. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "writeUnits"?: number;
  /**
   * The size of the table, in GB. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageInGBs"?: number;
  /**
   * The number of times reads were throttled due to exceeding
   * the read throughput limit.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "readThrottleCount"?: number;
  /**
   * The number of times writes were throttled due to exceeding
   * the write throughput limit.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "writeThrottleCount"?: number;
  /**
   * The number of times writes were throttled because the table
   * exceeded its size limit.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageThrottleCount"?: number;
}

export namespace TableUsageSummary {
  export function getJsonObj(obj: TableUsageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TableUsageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
