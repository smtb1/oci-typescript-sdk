/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

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
 * The summary of the AWR wait event time series data for one event.
 */
export interface AwrDbWaitEventSummary {
  /**
   * The name of the event.
   */
  "name": string;
  /**
   * The begin time of the wait event.
   */
  "timeBegin"?: Date;
  /**
   * The end time of the wait event.
   */
  "timeEnd"?: Date;
  /**
   * The wait count per second. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "waitsPerSec"?: number;
  /**
   * The average wait time per second. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "avgWaitTimePerSec"?: number;
  /**
   * The ID of the snapshot. The snapshot ID is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   * It can be retrieved from the following endpoint:
   * /managedDatabases/{managedDatabaseId}/awrDbs/{awrDbId}/awrDbSnapshots
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "snapshotId"?: number;
}

export namespace AwrDbWaitEventSummary {
  export function getJsonObj(obj: AwrDbWaitEventSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwrDbWaitEventSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
