/**
 * Cloud Advisor API
 * APIs for managing Cloud Advisor. Cloud Advisor provides recommendations that help you maximize cost savings and improve the security posture of your tenancy.
 * OpenAPI spec version: 20200606
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
 * The metadata associated with the profile.
 *
 */
export interface Profile {
  /**
   * The unique OCID of the profile.
   */
  "id": string;
  /**
   * The OCID of the tenancy. The tenancy is the root compartment.
   */
  "compartmentId": string;
  /**
   * The name assigned to the profile. Avoid entering confidential information.
   */
  "name": string;
  /**
   * Text describing the profile. Avoid entering confidential information.
   */
  "description": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * Simple key-value pair applied without any predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Exists for cross-compatibility only.
* <p>
Example: `{\"bar-key\": \"value\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  "levelsConfiguration"?: model.LevelsConfiguration;
  "targetCompartments"?: model.TargetCompartments;
  "targetTags"?: model.TargetTags;
  /**
   * The profile's current state.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * The date and time the profile was created, in the format defined by RFC3339.
   */
  "timeCreated": Date;
  /**
   * The date and time the profile was last updated, in the format defined by RFC3339.
   */
  "timeUpdated": Date;
}

export namespace Profile {
  export function getJsonObj(obj: Profile): object {
    const jsonObj = {
      ...obj,
      ...{
        "levelsConfiguration": obj.levelsConfiguration
          ? model.LevelsConfiguration.getJsonObj(obj.levelsConfiguration)
          : undefined,
        "targetCompartments": obj.targetCompartments
          ? model.TargetCompartments.getJsonObj(obj.targetCompartments)
          : undefined,
        "targetTags": obj.targetTags ? model.TargetTags.getJsonObj(obj.targetTags) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Profile): object {
    const jsonObj = {
      ...obj,
      ...{
        "levelsConfiguration": obj.levelsConfiguration
          ? model.LevelsConfiguration.getDeserializedJsonObj(obj.levelsConfiguration)
          : undefined,
        "targetCompartments": obj.targetCompartments
          ? model.TargetCompartments.getDeserializedJsonObj(obj.targetCompartments)
          : undefined,
        "targetTags": obj.targetTags
          ? model.TargetTags.getDeserializedJsonObj(obj.targetTags)
          : undefined
      }
    };

    return jsonObj;
  }
}
