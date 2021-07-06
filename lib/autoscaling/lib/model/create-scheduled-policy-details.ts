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
* Creation details for a schedule-based autoscaling policy.
* <p>
In a schedule-based autoscaling policy, an autoscaling action is triggered at the scheduled execution time.
* 
*/
export interface CreateScheduledPolicyDetails extends model.CreateAutoScalingPolicyDetails {
  "executionSchedule": model.CronExecutionSchedule;
  "resourceAction"?: model.ResourcePowerAction;

  "policyType": string;
}

export namespace CreateScheduledPolicyDetails {
  export function getJsonObj(obj: CreateScheduledPolicyDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAutoScalingPolicyDetails.getJsonObj(obj) as CreateScheduledPolicyDetails)),
      ...{
        "executionSchedule": obj.executionSchedule
          ? model.ExecutionSchedule.getJsonObj(obj.executionSchedule)
          : undefined,
        "resourceAction": obj.resourceAction
          ? model.ResourceAction.getJsonObj(obj.resourceAction)
          : undefined
      }
    };

    return jsonObj;
  }
  export const policyType = "scheduled";
  export function getDeserializedJsonObj(
    obj: CreateScheduledPolicyDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAutoScalingPolicyDetails.getDeserializedJsonObj(
            obj
          ) as CreateScheduledPolicyDetails)),
      ...{
        "executionSchedule": obj.executionSchedule
          ? model.ExecutionSchedule.getDeserializedJsonObj(obj.executionSchedule)
          : undefined,
        "resourceAction": obj.resourceAction
          ? model.ResourceAction.getDeserializedJsonObj(obj.resourceAction)
          : undefined
      }
    };

    return jsonObj;
  }
}
