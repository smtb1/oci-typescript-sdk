/**
 * REST API for Zero Downtime Migration (Oracle Database Migration Service --ODMS-- as customer-facing service name)
 * Provides users the ability to perform Zero Downtime migration operations
 * OpenAPI spec version: 20200720
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
 * Possible lifecycle states.
 *
 **/
export enum JobLifecycleStates {
  Accepted = "ACCEPTED",
  InProgress = "IN_PROGRESS",
  Unknown = "UNKNOWN",
  Terminated = "TERMINATED",
  Failed = "FAILED",
  Succeeded = "SUCCEEDED",
  Waiting = "WAITING",
  Canceling = "CANCELING",
  Canceled = "CANCELED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace JobLifecycleStates {
  export function getJsonObj(obj: JobLifecycleStates): object {
    return { obj };
  }
}
