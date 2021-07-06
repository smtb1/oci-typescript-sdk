/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
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
 * Optional parameters for Data Pump Export and Import. Refer to [Configuring Optional Initial Load Advanced Settings](https://docs.us.oracle.com/en/cloud/paas/database-migration/dmsus/working-migration-resources.html#GUID-24BD3054-FDF8-48FF-8492-636C1D4B71ED)
 *
 */
export interface DataPumpParameters {
  /**
   * Set to false to force Data Pump worker processes to run on one instance.
   *
   */
  "isCluster"?: boolean;
  /**
   * Estimate size of dumps that will be generated.
   *
   */
  "estimate"?: model.DataPumpEstimate;
  /**
   * IMPORT: Specifies the action to be performed when data is loaded into a preexisting table.
   *
   */
  "tableExistsAction"?: model.DataPumpTableExistsAction;
  /**
   * Exclude paratemers for Export and Import.
   *
   */
  "excludeParameters"?: Array<model.DataPumpExcludeParameters>;
  /**
   * Maximum number of worker processes that can be used for a Data Pump Import job.
   * For an Autonomous Database, ODMS will automatically query its CPU core count and set this property.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "importParallelismDegree"?: number;
  /**
   * Maximum number of worker processes that can be used for a Data Pump Export job.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "exportParallelismDegree"?: number;
}

export namespace DataPumpParameters {
  export function getJsonObj(obj: DataPumpParameters): object {
    const jsonObj = {
      ...obj,
      ...{
        "excludeParameters": obj.excludeParameters
          ? obj.excludeParameters.map(item => {
              return model.DataPumpExcludeParameters.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataPumpParameters): object {
    const jsonObj = {
      ...obj,
      ...{
        "excludeParameters": obj.excludeParameters
          ? obj.excludeParameters.map(item => {
              return model.DataPumpExcludeParameters.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
