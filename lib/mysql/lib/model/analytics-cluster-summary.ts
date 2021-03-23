/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * DEPRECATED -- please use HeatWave API instead.
 * A summary of an Analytics Cluster.
 *
 */
export interface AnalyticsClusterSummary {
  /**
   * The shape determines resources to allocate to the Analytics
   * Cluster nodes - CPU cores, memory.
   *
   */
  "shapeName": string;
  /**
   * The number of analytics-processing compute instances, of the
   * specified shape, in the Analytics Cluster.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "clusterSize": number;
  /**
   * The current state of the MySQL Analytics Cluster.
   */
  "lifecycleState": string;
  /**
   * The date and time the Analytics Cluster was created, as described by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   */
  "timeCreated": Date;
  /**
   * The time the Analytics Cluster was last updated, as described by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   */
  "timeUpdated": Date;
}

export namespace AnalyticsClusterSummary {
  export function getJsonObj(obj: AnalyticsClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
