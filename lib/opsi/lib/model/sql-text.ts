/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * SQL Text type object.
 */
export interface SqlText {
  /**
   * Version
   * Example: `1`
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version"?: number;
  /**
   * Unique SQL_ID for a SQL Statement.
   *
   */
  "sqlIdentifier": string;
  /**
   * Collection timestamp
   * Example: `\"2020-05-06T00:00:00.000Z\"`
   *
   */
  "timeCollected": Date;
  /**
   * SQL command
   * Example: `\"SELECT\"`
   *
   */
  "sqlCommand": string;
  /**
   * Exact matching signature
   * Example: `\"18067345456756876713\"`
   *
   */
  "exactMatchingSignature"?: string;
  /**
   * Force matching signature
   * Example: `\"18067345456756876713\"`
   *
   */
  "forceMatchingSignature"?: string;
  /**
   * Full SQL Text
   * Example: `\"SELECT username,profile,default_tablespace,temporary_tablespace FROM dba_users\"`
   * Disclaimer: SQL text being uploaded explicitly via APIs is not masked. Any sensitive literals contained in the sqlFullText column should be masked prior to ingestion.
   *
   */
  "sqlFullText": string;
}

export namespace SqlText {
  export function getJsonObj(obj: SqlText): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlText): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
