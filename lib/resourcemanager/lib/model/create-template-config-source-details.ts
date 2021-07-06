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
 * Property details for the configuration source used for the template.
 *
 */
export interface CreateTemplateConfigSourceDetails {
  "templateConfigSourceType": string;
}

export namespace CreateTemplateConfigSourceDetails {
  export function getJsonObj(obj: CreateTemplateConfigSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("templateConfigSourceType" in obj && obj.templateConfigSourceType) {
      switch (obj.templateConfigSourceType) {
        case "ZIP_UPLOAD":
          return model.CreateTemplateZipUploadConfigSourceDetails.getJsonObj(
            <model.CreateTemplateZipUploadConfigSourceDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.templateConfigSourceType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateTemplateConfigSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("templateConfigSourceType" in obj && obj.templateConfigSourceType) {
      switch (obj.templateConfigSourceType) {
        case "ZIP_UPLOAD":
          return model.CreateTemplateZipUploadConfigSourceDetails.getDeserializedJsonObj(
            <model.CreateTemplateZipUploadConfigSourceDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.templateConfigSourceType);
      }
    }
    return jsonObj;
  }
}
