/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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
* The configuration of the sorting and filtering behaviors in a steering policy. Rules can
* filter and sort answers based on weight, priority, endpoint health, and other data.
* <p>

* A rule may optionally include a sequence of cases, each with an optional `caseCondition`
* expression. Cases allow a sequence of conditions to be defined that will apply different
* parameters to the rule when the conditions are met. For more information about cases,
* see [Traffic Management API Guide](https://docs.cloud.oracle.com/iaas/Content/TrafficManagement/Concepts/trafficmanagementapi.htm).
* <p>

* **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
* 
*/
export interface SteeringPolicyRule {
  /**
   * A user-defined description of the rule's purpose or behavior.
   */
  "description"?: string;

  "ruleType": string;
}

export namespace SteeringPolicyRule {
  export function getJsonObj(obj: SteeringPolicyRule): object {
    const jsonObj = { ...obj, ...{} };

    if ("ruleType" in obj && obj.ruleType) {
      switch (obj.ruleType) {
        case "FILTER":
          return model.SteeringPolicyFilterRule.getJsonObj(
            <model.SteeringPolicyFilterRule>(<object>jsonObj),
            true
          );
        case "WEIGHTED":
          return model.SteeringPolicyWeightedRule.getJsonObj(
            <model.SteeringPolicyWeightedRule>(<object>jsonObj),
            true
          );
        case "LIMIT":
          return model.SteeringPolicyLimitRule.getJsonObj(
            <model.SteeringPolicyLimitRule>(<object>jsonObj),
            true
          );
        case "HEALTH":
          return model.SteeringPolicyHealthRule.getJsonObj(
            <model.SteeringPolicyHealthRule>(<object>jsonObj),
            true
          );
        case "PRIORITY":
          return model.SteeringPolicyPriorityRule.getJsonObj(
            <model.SteeringPolicyPriorityRule>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.ruleType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SteeringPolicyRule): object {
    const jsonObj = { ...obj, ...{} };

    if ("ruleType" in obj && obj.ruleType) {
      switch (obj.ruleType) {
        case "FILTER":
          return model.SteeringPolicyFilterRule.getDeserializedJsonObj(
            <model.SteeringPolicyFilterRule>(<object>jsonObj),
            true
          );
        case "WEIGHTED":
          return model.SteeringPolicyWeightedRule.getDeserializedJsonObj(
            <model.SteeringPolicyWeightedRule>(<object>jsonObj),
            true
          );
        case "LIMIT":
          return model.SteeringPolicyLimitRule.getDeserializedJsonObj(
            <model.SteeringPolicyLimitRule>(<object>jsonObj),
            true
          );
        case "HEALTH":
          return model.SteeringPolicyHealthRule.getDeserializedJsonObj(
            <model.SteeringPolicyHealthRule>(<object>jsonObj),
            true
          );
        case "PRIORITY":
          return model.SteeringPolicyPriorityRule.getDeserializedJsonObj(
            <model.SteeringPolicyPriorityRule>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.ruleType);
      }
    }
    return jsonObj;
  }
}
