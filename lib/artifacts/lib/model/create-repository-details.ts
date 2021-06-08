/**
 * Container Images API
 * API covering the [Registry](/iaas/Content/Registry/Concepts/registryoverview.htm) services.
Use this API to manage resources such as container images and repositories.

 * OpenAPI spec version: 20160918
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
 * Parameters needed to create an artifact repository.
 */
export interface CreateRepositoryDetails {
  /**
   * A user-friendly display name for the repository. If not present, will be auto-generated. It can be modified later. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the repository's compartment.
   *
   */
  "compartmentId": string;
  /**
   * A short description of the repository. It can be updated later.
   */
  "description"?: string;
  /**
   * Whether to make the repository immutable. The artifacts of an immutable repository cannot be overwritten.
   */
  "isImmutable": boolean;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "repositoryType": string;
}

export namespace CreateRepositoryDetails {
  export function getJsonObj(obj: CreateRepositoryDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("repositoryType" in obj && obj.repositoryType) {
      switch (obj.repositoryType) {
        case "GENERIC":
          return model.CreateGenericRepositoryDetails.getJsonObj(
            <model.CreateGenericRepositoryDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.repositoryType);
      }
    }
    return jsonObj;
  }
}