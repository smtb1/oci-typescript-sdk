/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface PatchHistoryEntry {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the patch history entry.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the patch.
   */
  "patchId": string;
  /**
   * The action being performed or was completed.
   */
  "action"?: PatchHistoryEntry.Action;
  /**
   * The current state of the action.
   */
  "lifecycleState": PatchHistoryEntry.LifecycleState;
  /**
   * A descriptive text associated with the lifecycleState.
   * Typically contains additional displayable text.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time when the patch action started.
   */
  "timeStarted": Date;
  /**
   * The date and time when the patch action completed
   */
  "timeEnded"?: Date;
}

export namespace PatchHistoryEntry {
  export enum Action {
    Apply = "APPLY",
    Precheck = "PRECHECK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PatchHistoryEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PatchHistoryEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
