/**
 * Autoscaling API
 * APIs for dynamically scaling Compute resources to meet application requirements. For more information about
autoscaling, see [Autoscaling](/Content/Compute/Tasks/autoscalinginstancepools.htm). For information about the
Compute service, see [Overview of the Compute Service](/Content/Compute/Concepts/computeoverview.htm).

**Note:** Autoscaling is not available in US Government Cloud tenancies. For more information, see
[Oracle Cloud Infrastructure US Government Cloud](/Content/General/Concepts/govoverview.htm).

 * OpenAPI spec version: 20181001
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
* Autoscaling policies define the criteria that trigger autoscaling actions and the actions to take.
* <p>
An autoscaling policy is part of an autoscaling configuration. For more information, see
* [Autoscaling](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/autoscalinginstancepools.htm).
* <p>
You can create the following types of autoscaling policies:
*   
*   - **Schedule-based:** Autoscaling events take place at the specific times that you schedule.
*   - **Threshold-based:** An autoscaling action is triggered when a performance metric meets or exceeds a threshold.
* 
*/
export interface AutoScalingPolicy {
  /**
   * The capacity requirements of the autoscaling policy.
   */
  "capacity"?: model.Capacity;
  /**
   * The ID of the autoscaling policy that is assigned after creation.
   */
  "id"?: string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * The date and time the autoscaling configuration was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * Whether the autoscaling policy is enabled.
   */
  "isEnabled"?: boolean;

  "policyType": string;
}

export namespace AutoScalingPolicy {
  export function getJsonObj(obj: AutoScalingPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "capacity": obj.capacity ? model.Capacity.getJsonObj(obj.capacity) : undefined
      }
    };

    if ("policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "scheduled":
          return model.ScheduledPolicy.getJsonObj(<model.ScheduledPolicy>(<object>jsonObj), true);
        case "threshold":
          return model.ThresholdPolicy.getJsonObj(<model.ThresholdPolicy>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.policyType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutoScalingPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "capacity": obj.capacity ? model.Capacity.getDeserializedJsonObj(obj.capacity) : undefined
      }
    };

    if ("policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "scheduled":
          return model.ScheduledPolicy.getDeserializedJsonObj(
            <model.ScheduledPolicy>(<object>jsonObj),
            true
          );
        case "threshold":
          return model.ThresholdPolicy.getDeserializedJsonObj(
            <model.ThresholdPolicy>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.policyType);
      }
    }
    return jsonObj;
  }
}
