/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
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
 * Information required to update a RoverEntitlement.
 */
export interface UpdateRoverEntitlementDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * tenant Id.
   */
  "tenantId"?: string;
  /**
   * Requestor name for the entitlement.
   */
  "requestorName"?: string;
  /**
   * Requestor email for the entitlement.
   */
  "requestorEmail"?: string;
  /**
   * Details about the entitlement.
   */
  "entitlementDetails"?: string;
  /**
   * The current state of the RoverNode.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A property that can contain details on the lifecycle.
   */
  "lifecycleStateDetails"?: string;
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{orcl-cloud: {free-tier-retain: true}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateRoverEntitlementDetails {
  export function getJsonObj(obj: UpdateRoverEntitlementDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}