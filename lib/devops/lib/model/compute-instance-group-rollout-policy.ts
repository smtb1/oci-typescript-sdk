/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
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
 * Specifies the rollout policy for compute instance group stages.
 */
export interface ComputeInstanceGroupRolloutPolicy {
  /**
   * The duration of delay between batch rollout. The default delay is 1 minute. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "batchDelayInSeconds"?: number;

  "policyType": string;
}

export namespace ComputeInstanceGroupRolloutPolicy {
  export function getJsonObj(obj: ComputeInstanceGroupRolloutPolicy): object {
    const jsonObj = { ...obj, ...{} };

    if ("policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "COMPUTE_INSTANCE_GROUP_LINEAR_ROLLOUT_POLICY_BY_PERCENTAGE":
          return model.ComputeInstanceGroupLinearRolloutPolicyByPercentage.getJsonObj(
            <model.ComputeInstanceGroupLinearRolloutPolicyByPercentage>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_LINEAR_ROLLOUT_POLICY_BY_COUNT":
          return model.ComputeInstanceGroupLinearRolloutPolicyByCount.getJsonObj(
            <model.ComputeInstanceGroupLinearRolloutPolicyByCount>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.policyType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ComputeInstanceGroupRolloutPolicy): object {
    const jsonObj = { ...obj, ...{} };

    if ("policyType" in obj && obj.policyType) {
      switch (obj.policyType) {
        case "COMPUTE_INSTANCE_GROUP_LINEAR_ROLLOUT_POLICY_BY_PERCENTAGE":
          return model.ComputeInstanceGroupLinearRolloutPolicyByPercentage.getDeserializedJsonObj(
            <model.ComputeInstanceGroupLinearRolloutPolicyByPercentage>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_LINEAR_ROLLOUT_POLICY_BY_COUNT":
          return model.ComputeInstanceGroupLinearRolloutPolicyByCount.getDeserializedJsonObj(
            <model.ComputeInstanceGroupLinearRolloutPolicyByCount>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.policyType);
      }
    }
    return jsonObj;
  }
}
