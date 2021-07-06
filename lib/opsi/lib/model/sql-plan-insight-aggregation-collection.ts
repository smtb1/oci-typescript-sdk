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
 * SQL plan insights response.
 *
 */
export interface SqlPlanInsightAggregationCollection {
  /**
   * Unique SQL_ID for a SQL Statement.
   *
   */
  "sqlIdentifier": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database insight resource.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "databaseId": string;
  /**
   * The start timestamp that was passed into the request.
   */
  "timeIntervalStart": Date;
  /**
   * The end timestamp that was passed into the request.
   */
  "timeIntervalEnd": Date;
  /**
   * List of SQL plan insights.
   */
  "insights": Array<model.SqlPlanInsights>;
  /**
   * List of SQL plan statistics.
   */
  "items": Array<model.SqlPlanInsightAggregation>;
}

export namespace SqlPlanInsightAggregationCollection {
  export function getJsonObj(obj: SqlPlanInsightAggregationCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "insights": obj.insights
          ? obj.insights.map(item => {
              return model.SqlPlanInsights.getJsonObj(item);
            })
          : undefined,
        "items": obj.items
          ? obj.items.map(item => {
              return model.SqlPlanInsightAggregation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlPlanInsightAggregationCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "insights": obj.insights
          ? obj.insights.map(item => {
              return model.SqlPlanInsights.getDeserializedJsonObj(item);
            })
          : undefined,
        "items": obj.items
          ? obj.items.map(item => {
              return model.SqlPlanInsightAggregation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
