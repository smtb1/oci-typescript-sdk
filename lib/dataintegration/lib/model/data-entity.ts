/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The data entity object.
 */
export interface DataEntity {
  "metadata"?: model.ObjectMetadata;

  "modelType": string;
}

export namespace DataEntity {
  export function getJsonObj(obj: DataEntity): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    if ("modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "TABLE_ENTITY":
          return model.DataEntityFromTable.getJsonObj(
            <model.DataEntityFromTable>(<object>jsonObj),
            true
          );
        case "VIEW_ENTITY":
          return model.DataEntityFromView.getJsonObj(
            <model.DataEntityFromView>(<object>jsonObj),
            true
          );
        case "FILE_ENTITY":
          return model.DataEntityFromFile.getJsonObj(
            <model.DataEntityFromFile>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataEntity): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    if ("modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "TABLE_ENTITY":
          return model.DataEntityFromTable.getDeserializedJsonObj(
            <model.DataEntityFromTable>(<object>jsonObj),
            true
          );
        case "VIEW_ENTITY":
          return model.DataEntityFromView.getDeserializedJsonObj(
            <model.DataEntityFromView>(<object>jsonObj),
            true
          );
        case "FILE_ENTITY":
          return model.DataEntityFromFile.getDeserializedJsonObj(
            <model.DataEntityFromFile>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
}
