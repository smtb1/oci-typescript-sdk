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
 * The data entity details object.
 */
export interface DataEntityDetails {
  "modelType": string;
}

export namespace DataEntityDetails {
  export function getJsonObj(obj: DataEntityDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "FILE_ENTITY":
          return model.DataEntityFromFileEntityDetails.getJsonObj(
            <model.DataEntityFromFileEntityDetails>(<object>jsonObj),
            true
          );
        case "VIEW_ENTITY":
          return model.DataEntityFromViewEntityDetails.getJsonObj(
            <model.DataEntityFromViewEntityDetails>(<object>jsonObj),
            true
          );
        case "TABLE_ENTITY":
          return model.DataEntityFromTableEntityDetails.getJsonObj(
            <model.DataEntityFromTableEntityDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
}
