/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary of the scheduled activity for a Fusion environment.
 */
export interface ScheduledActivitySummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * A friendly name for the scheduled activity. Can be changed later.
   */
  "displayName": string;
  /**
   * The run cadence of this scheduled activity. Valid values are Quarterly, Monthly, OneOff, and Vertex.
   */
  "runCycle": string;
  /**
   * The OCID of the Fusion environment for the scheduled activity.
   */
  "fusionEnvironmentId": string;
  /**
   * The current state of the scheduled activity. Valid values are Scheduled, In progress , Failed, Completed.
   */
  "lifecycleState": string;
  /**
   * List of actions
   */
  "actions"?: Array<model.Action>;
  /**
   * Current time the scheduled activity is scheduled to start. An RFC3339 formatted datetime string.
   */
  "timeScheduledStart": Date;
  /**
   * Current time the scheduled activity is scheduled to end. An RFC3339 formatted datetime string.
   */
  "timeExpectedFinish": Date;
  /**
   * The time the scheduled activity actually completed / cancelled / failed. An RFC3339 formatted datetime string.
   */
  "timeFinished"?: Date;
  /**
   * Cumulative delay hours Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "delayInHours"?: number;
  /**
   * Service availability / impact during scheduled activity execution, up down
   */
  "serviceAvailability": string;
  /**
   * The time the scheduled activity record was created. An RFC3339 formatted datetime string.
   */
  "timeAccepted"?: Date;
  /**
   * The time the scheduled activity record was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ScheduledActivitySummary {
  export function getJsonObj(obj: ScheduledActivitySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "actions": obj.actions
          ? obj.actions.map(item => {
              return model.Action.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScheduledActivitySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "actions": obj.actions
          ? obj.actions.map(item => {
              return model.Action.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
