/**
 * Resource Manager API
 * API for the Resource Manager service.
Use this API to install, configure, and manage resources via the "infrastructure-as-code" model.
For more information, see
[Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).

 * OpenAPI spec version: 20180917
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
 * Updates the property details for the configuration source.
 *
 */
export interface UpdateConfigSourceDetails {
  /**
   * The path of the directory from which to run terraform. If not specified, the the root will be used. This parameter is ignored for the `configSourceType` value of `COMPARTMENT_CONFIG_SOURCE`.
   */
  "workingDirectory"?: string;

  "configSourceType": string;
}

export namespace UpdateConfigSourceDetails {
  export function getJsonObj(obj: UpdateConfigSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("configSourceType" in obj && obj.configSourceType) {
      switch (obj.configSourceType) {
        case "GIT_CONFIG_SOURCE":
          return model.UpdateGitConfigSourceDetails.getJsonObj(
            <model.UpdateGitConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_CONFIG_SOURCE":
          return model.UpdateObjectStorageConfigSourceDetails.getJsonObj(
            <model.UpdateObjectStorageConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "ZIP_UPLOAD":
          return model.UpdateZipUploadConfigSourceDetails.getJsonObj(
            <model.UpdateZipUploadConfigSourceDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.configSourceType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateConfigSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("configSourceType" in obj && obj.configSourceType) {
      switch (obj.configSourceType) {
        case "GIT_CONFIG_SOURCE":
          return model.UpdateGitConfigSourceDetails.getDeserializedJsonObj(
            <model.UpdateGitConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_CONFIG_SOURCE":
          return model.UpdateObjectStorageConfigSourceDetails.getDeserializedJsonObj(
            <model.UpdateObjectStorageConfigSourceDetails>(<object>jsonObj),
            true
          );
        case "ZIP_UPLOAD":
          return model.UpdateZipUploadConfigSourceDetails.getDeserializedJsonObj(
            <model.UpdateZipUploadConfigSourceDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.configSourceType);
      }
    }
    return jsonObj;
  }
}
