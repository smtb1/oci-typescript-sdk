/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A count statistics
 */
export interface CountStatistic {
  /**
   * The array of statistics
   */
  "objectTypeCountList": Array<model.CountStatisticSummary>;
}

export namespace CountStatistic {
  export function getJsonObj(obj: CountStatistic): object {
    const jsonObj = {
      ...obj,
      ...{
        "objectTypeCountList": obj.objectTypeCountList
          ? obj.objectTypeCountList.map(item => {
              return model.CountStatisticSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
