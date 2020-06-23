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
 * Properties used in connection create operations.
 */
export interface CreateConnectionDetails {
  /**
   * Generated key that can be used in API calls to identify connection. On scenarios where reference to the connection is needed, a value can be passed in create.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value can be edited by the user and it is restricted to 1000 characters
   */
  "name": string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore and numbers. It should begin with upper case letter or underscore. The value can be edited by the user.
   */
  "identifier": string;
  /**
   * The properties for the connection.
   */
  "connectionProperties"?: Array<model.ConnectionProperty>;
  "registryMetadata"?: model.RegistryMetadata;

  "modelType": string;
}

export namespace CreateConnectionDetails {
  export function getJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "connectionProperties": obj.connectionProperties
          ? obj.connectionProperties.map(item => {
              return model.ConnectionProperty.getJsonObj(item);
            })
          : undefined,
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    if ("modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "ORACLE_ATP_CONNECTION":
          return model.CreateConnectionFromAtp.getJsonObj(
            <model.CreateConnectionFromAtp>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_CONNECTION":
          return model.CreateConnectionFromAdwc.getJsonObj(
            <model.CreateConnectionFromAdwc>(<object>jsonObj),
            true
          );
        case "ORACLEDB_CONNECTION":
          return model.CreateConnectionFromOracle.getJsonObj(
            <model.CreateConnectionFromOracle>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_CONNECTION":
          return model.CreateConnectionFromObjectStorage.getJsonObj(
            <model.CreateConnectionFromObjectStorage>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
}
