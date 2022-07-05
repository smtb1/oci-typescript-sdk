/**
 * Bastion API
 * Use the Bastion API to provide restricted and time-limited access to target resources that don't have public endpoints. Bastions let authorized users connect from specific IP addresses to target resources using Secure Shell (SSH) sessions. For more information, see [the Bastion documentation](/iaas/Content/Bastion/home.htm).
 * OpenAPI spec version: 20210331
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
 * Summary information for a bastion session resource.
 */
export interface SessionSummary {
  /**
   * The unique identifier (OCID) of the session, which can't be changed after creation.
   */
  "id": string;
  /**
   * The name of the session.
   */
  "displayName"?: string;
  /**
   * The name of the bastion that is hosting this session.
   */
  "bastionName": string;
  /**
   * The unique identifier (OCID) of the bastion that is hosting this session.
   */
  "bastionId": string;
  "targetResourceDetails":
    | model.ManagedSshSessionTargetResourceDetails
    | model.PortForwardingSessionTargetResourceDetails;
  /**
   * The time the session was created. Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * The time the session was updated. Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the session.
   */
  "lifecycleState": model.SessionLifecycleState;
  /**
   * A message describing the current session state in more detail.
   */
  "lifecycleDetails"?: string;
  /**
   * The amount of time the session can remain active. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sessionTtlInSeconds": number;
}

export namespace SessionSummary {
  export function getJsonObj(obj: SessionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "targetResourceDetails": obj.targetResourceDetails
          ? model.TargetResourceDetails.getJsonObj(obj.targetResourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SessionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "targetResourceDetails": obj.targetResourceDetails
          ? model.TargetResourceDetails.getDeserializedJsonObj(obj.targetResourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
