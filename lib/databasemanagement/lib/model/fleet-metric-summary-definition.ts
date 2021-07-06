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
 * A summary of the fleet metrics, which provides the metric aggregated value of the databases in the fleet.
 */
export interface FleetMetricSummaryDefinition {
  /**
   * The name of the metric.
   */
  "metricName"?: string;
  /**
   * The metric aggregated value at the baseline date and time. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "baselineValue"?: number;
  /**
   * The metric aggregated value at the target date and time. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "targetValue"?: number;
  /**
   * The unit of the value.
   */
  "unit"?: string;
  /**
   * The percentage change in the metric aggregated value compared to the baseline value. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentageChange"?: number;
  /**
   * The unique dimension key and values of the baseline metric.
   */
  "dimensions"?: Array<model.MetricDimensionDefinition>;
}

export namespace FleetMetricSummaryDefinition {
  export function getJsonObj(obj: FleetMetricSummaryDefinition): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? obj.dimensions.map(item => {
              return model.MetricDimensionDefinition.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FleetMetricSummaryDefinition): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? obj.dimensions.map(item => {
              return model.MetricDimensionDefinition.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
