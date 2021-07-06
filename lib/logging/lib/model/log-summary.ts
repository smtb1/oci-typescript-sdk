/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, and delete log groups, log objects, and agent configurations.
 * OpenAPI spec version: 20200531
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
 * Log object configuration summary.
 */
export interface LogSummary {
  /**
   * The OCID of the resource.
   */
  "id": string;
  /**
   * Log group OCID.
   */
  "logGroupId": string;
  /**
   * The user-friendly display name. This must be unique within the enclosing resource,
   * and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Whether or not this resource is currently enabled.
   */
  "isEnabled"?: boolean;
  /**
   * The pipeline state.
   */
  "lifecycleState": model.LogLifecycleState;
  /**
   * The logType that the log object is for, whether custom or service.
   */
  "logType": LogSummary.LogType;
  "configuration"?: model.Configuration;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Time the resource was created.
   */
  "timeCreated"?: Date;
  /**
   * Time the resource was last modified.
   */
  "timeLastModified"?: Date;
  /**
   * Log retention duration in 30-day increments (30, 60, 90 and so on). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retentionDuration"?: number;
  /**
   * The OCID of the compartment that the resource belongs to.
   */
  "compartmentId"?: string;
}

export namespace LogSummary {
  export enum LogType {
    Custom = "CUSTOM",
    Service = "SERVICE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LogSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "configuration": obj.configuration
          ? model.Configuration.getJsonObj(obj.configuration)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "configuration": obj.configuration
          ? model.Configuration.getDeserializedJsonObj(obj.configuration)
          : undefined
      }
    };

    return jsonObj;
  }
}
