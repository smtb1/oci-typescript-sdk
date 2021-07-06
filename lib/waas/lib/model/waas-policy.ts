/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * The details of a Web Application Acceleration and Security (WAAS) policy. A policy describes how the WAAS service should operate for the configured web application.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 */
export interface WaasPolicy {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the WAAS policy.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the WAAS policy's compartment.
   */
  "compartmentId"?: string;
  /**
   * The user-friendly name of the WAAS policy. The name can be changed and does not need to be unique.
   */
  "displayName"?: string;
  /**
   * The web application domain that the WAAS policy protects.
   */
  "domain"?: string;
  /**
   * An array of additional domains for this web application.
   */
  "additionalDomains"?: Array<string>;
  /**
   * The CNAME record to add to your DNS configuration to route traffic for the domain, and all additional domains, through the WAF.
   */
  "cname"?: string;
  /**
   * The current lifecycle state of the WAAS policy.
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * The date and time the policy was created, expressed in RFC 3339 timestamp format.
   */
  "timeCreated"?: Date;
  /**
   * A map of host servers (origins) and their keys for the web application. Origin keys are used to associate origins to specific protection rules. The key should be a user-friendly name for the host. **Examples:** `primary` or `secondary`.
   */
  "origins"?: { [key: string]: model.Origin };
  /**
   * The map of origin groups and their keys used to associate origins to the `wafConfig`. Origin groups allow you to apply weights to groups of origins for load balancing purposes. Origins with higher weights will receive larger proportions of client requests.
   */
  "originGroups"?: { [key: string]: model.OriginGroup };
  "policyConfig"?: model.PolicyConfig;
  "wafConfig"?: model.WafConfig;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace WaasPolicy {
  export function getJsonObj(obj: WaasPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "origins": obj.origins
          ? common.mapContainer(obj.origins, model.Origin.getJsonObj)
          : undefined,
        "originGroups": obj.originGroups
          ? common.mapContainer(obj.originGroups, model.OriginGroup.getJsonObj)
          : undefined,
        "policyConfig": obj.policyConfig
          ? model.PolicyConfig.getJsonObj(obj.policyConfig)
          : undefined,
        "wafConfig": obj.wafConfig ? model.WafConfig.getJsonObj(obj.wafConfig) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WaasPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "origins": obj.origins
          ? common.mapContainer(obj.origins, model.Origin.getDeserializedJsonObj)
          : undefined,
        "originGroups": obj.originGroups
          ? common.mapContainer(obj.originGroups, model.OriginGroup.getDeserializedJsonObj)
          : undefined,
        "policyConfig": obj.policyConfig
          ? model.PolicyConfig.getDeserializedJsonObj(obj.policyConfig)
          : undefined,
        "wafConfig": obj.wafConfig
          ? model.WafConfig.getDeserializedJsonObj(obj.wafConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
