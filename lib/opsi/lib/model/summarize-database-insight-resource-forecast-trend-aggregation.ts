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
 * Forecast results from the selected time period.
 */
export interface SummarizeDatabaseInsightResourceForecastTrendAggregation {
  /**
   * The start timestamp that was passed into the request.
   */
  "timeIntervalStart": Date;
  /**
   * The end timestamp that was passed into the request.
   */
  "timeIntervalEnd": Date;
  /**
   * Defines the type of resource metric (example: CPU, STORAGE)
   *
   */
  "resourceMetric": SummarizeDatabaseInsightResourceForecastTrendAggregation.ResourceMetric;
  /**
   * Displays usage unit ( CORES, GB)
   *
   */
  "usageUnit": model.UsageUnit;
  /**
   * Time series patterns used in the forecasting.
   */
  "pattern": SummarizeDatabaseInsightResourceForecastTrendAggregation.Pattern;
  /**
   * The name of tablespace.
   */
  "tablespaceName": string;
  /**
   * Time series data used for the forecast analysis.
   */
  "historicalData": Array<model.HistoricalDataItem>;
  /**
   * Time series data result of the forecasting analysis.
   */
  "projectedData": Array<model.ProjectedDataItem>;
}

export namespace SummarizeDatabaseInsightResourceForecastTrendAggregation {
  export enum ResourceMetric {
    Cpu = "CPU",
    Storage = "STORAGE",
    Io = "IO",
    Memory = "MEMORY",
    MemoryPga = "MEMORY_PGA",
    MemorySga = "MEMORY_SGA",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Pattern {
    Linear = "LINEAR",
    MonthlySeasons = "MONTHLY_SEASONS",
    MonthlyAndYearlySeasons = "MONTHLY_AND_YEARLY_SEASONS",
    WeeklySeasons = "WEEKLY_SEASONS",
    WeeklyAndMonthlySeasons = "WEEKLY_AND_MONTHLY_SEASONS",
    WeeklyMonthlyAndYearlySeasons = "WEEKLY_MONTHLY_AND_YEARLY_SEASONS",
    WeeklyAndYearlySeasons = "WEEKLY_AND_YEARLY_SEASONS",
    YearlySeasons = "YEARLY_SEASONS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: SummarizeDatabaseInsightResourceForecastTrendAggregation
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "historicalData": obj.historicalData
          ? obj.historicalData.map(item => {
              return model.HistoricalDataItem.getJsonObj(item);
            })
          : undefined,
        "projectedData": obj.projectedData
          ? obj.projectedData.map(item => {
              return model.ProjectedDataItem.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: SummarizeDatabaseInsightResourceForecastTrendAggregation
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "historicalData": obj.historicalData
          ? obj.historicalData.map(item => {
              return model.HistoricalDataItem.getDeserializedJsonObj(item);
            })
          : undefined,
        "projectedData": obj.projectedData
          ? obj.projectedData.map(item => {
              return model.ProjectedDataItem.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
