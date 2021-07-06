/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information to use to update a Deployment.
 *
 */
export interface UpdateDeploymentDetails {
  /**
   * An object's Display Name.
   *
   */
  "displayName"?: string;
  /**
   * The Oracle license model that applies to a Deployment.
   *
   */
  "licenseModel"?: model.LicenseModel;
  /**
   * Metadata about this specific object.
   *
   */
  "description"?: string;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Tags defined for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * An array of [Network Security Group](https://docs.cloud.oracle.com/Content/Network/Concepts/networksecuritygroups.htm) OCIDs used to define network access for a deployment.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet being referenced.
   *
   */
  "subnetId"?: string;
  /**
   * True if this object is publicly available.
   *
   */
  "isPublic"?: boolean;
  /**
   * A three-label Fully Qualified Domain Name (FQDN) for a resource.
   *
   */
  "fqdn"?: string;
  /**
   * The Minimum number of OCPUs to be made available for this Deployment.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount"?: number;
  /**
   * Indicates if auto scaling is enabled for the Deployment's CPU core count.
   *
   */
  "isAutoScalingEnabled"?: boolean;
  "oggData"?: model.UpdateOggDeploymentDetails;
}

export namespace UpdateDeploymentDetails {
  export function getJsonObj(obj: UpdateDeploymentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "oggData": obj.oggData
          ? model.UpdateOggDeploymentDetails.getJsonObj(obj.oggData)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDeploymentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "oggData": obj.oggData
          ? model.UpdateOggDeploymentDetails.getDeserializedJsonObj(obj.oggData)
          : undefined
      }
    };

    return jsonObj;
  }
}
