/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Column containing query results produced by the query language classify command.
 *
 */
export interface ClassifyColumn extends model.AbstractColumn {
  /**
   * A list of fields specified in the classify command in the query string.
   *
   */
  "classifyFieldNames"?: Array<string>;
  /**
   * Count of nulls found in each of the fields specified in the classify command in the query string.
   *
   */
  "classifyFieldNullCount"?: Array<number>;
  /**
   * Count of anomalies for each timeseries datapoint.
   *
   */
  "classifyAnomalyIntervalCounts"?: Array<number>;
  /**
   * Column descriptors for the classify result.
   *
   */
  "classifyColumns"?: Array<model.AbstractColumn>;
  /**
   * Results of the classify command.
   *
   */
  "classifyResult"?: Array<{ [key: string]: any }>;
  /**
   * Column descriptors of fields with strong correlation with the classify fields.
   *
   */
  "classifyCorrelateColumns"?: Array<model.AbstractColumn>;
  /**
   * Correlation results of the classify command.
   *
   */
  "classifyCorrelateResult"?: Array<{ [key: string]: any }>;

  "type": string;
}

export namespace ClassifyColumn {
  export function getJsonObj(obj: ClassifyColumn, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.AbstractColumn.getJsonObj(obj) as ClassifyColumn)),
      ...{
        "classifyColumns": obj.classifyColumns
          ? obj.classifyColumns.map(item => {
              return model.AbstractColumn.getJsonObj(item);
            })
          : undefined,

        "classifyCorrelateColumns": obj.classifyCorrelateColumns
          ? obj.classifyCorrelateColumns.map(item => {
              return model.AbstractColumn.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "CLASSIFY_COLUMN";
  export function getDeserializedJsonObj(obj: ClassifyColumn, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractColumn.getDeserializedJsonObj(obj) as ClassifyColumn)),
      ...{
        "classifyColumns": obj.classifyColumns
          ? obj.classifyColumns.map(item => {
              return model.AbstractColumn.getDeserializedJsonObj(item);
            })
          : undefined,

        "classifyCorrelateColumns": obj.classifyCorrelateColumns
          ? obj.classifyCorrelateColumns.map(item => {
              return model.AbstractColumn.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
