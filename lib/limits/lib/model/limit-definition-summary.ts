/**
 * Service Limits APIs
 * APIs that interact with the resource limits of a specific resource type
 * OpenAPI spec version: 20181025
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
 * The metadata specific to a resource limit definition.
 */
export interface LimitDefinitionSummary {
  /**
   * The resource limit name. To be used for writing policies (in case of quotas) or other programmatic calls.
   *
   */
  "name"?: string;
  /**
   * The service name of the limit.
   */
  "serviceName"?: string;
  /**
   * The limit description.
   */
  "description"?: string;
  /**
   * Reflects the scope of the resource limit: which can be Global (across all regions), regional or ad specific.
   *
   */
  "scopeType"?: LimitDefinitionSummary.ScopeType;
  /**
   * If true, quota policies can be created on top of this resource limit.
   *
   */
  "areQuotasSupported"?: boolean;
  /**
   * Reflects if the GetResourceAvailability API is supported for this limit or not.
   * If not, the API will return an empty JSON response.
   *
   */
  "isResourceAvailabilitySupported"?: boolean;
  /**
   * Indicates if the limit has been deprecated.
   *
   */
  "isDeprecated"?: boolean;
  /**
   * Indicates if the customer can request a limit increase for this resource.
   *
   */
  "isEligibleForLimitIncrease"?: boolean;
}

export namespace LimitDefinitionSummary {
  export enum ScopeType {
    Global = "GLOBAL",
    Region = "REGION",
    Ad = "AD",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LimitDefinitionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
