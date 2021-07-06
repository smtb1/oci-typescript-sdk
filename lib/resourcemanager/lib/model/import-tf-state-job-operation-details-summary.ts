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
 * Job details that are specific to import Terraform state operations.
 *
 */
export interface ImportTfStateJobOperationDetailsSummary extends model.JobOperationDetailsSummary {
  "operation": string;
}

export namespace ImportTfStateJobOperationDetailsSummary {
  export function getJsonObj(
    obj: ImportTfStateJobOperationDetailsSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.JobOperationDetailsSummary.getJsonObj(
            obj
          ) as ImportTfStateJobOperationDetailsSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const operation = "IMPORT_TF_STATE";
  export function getDeserializedJsonObj(
    obj: ImportTfStateJobOperationDetailsSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.JobOperationDetailsSummary.getDeserializedJsonObj(
            obj
          ) as ImportTfStateJobOperationDetailsSummary)),
      ...{}
    };

    return jsonObj;
  }
}
