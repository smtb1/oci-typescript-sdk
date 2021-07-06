/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * This is the information about recalled data
 */
export interface RecalledData {
  /**
   * This is the end of the time range of the related data
   */
  "timeDataEnded": Date;
  /**
   * This is the start of the time range of the related data
   */
  "timeDataStarted": Date;
  /**
   * This is the time when the first recall operation was started for this RecalledData
   */
  "timeStarted": Date;
  /**
   * This is the status of the recall
   */
  "status": RecalledData.Status;
  /**
   * This is the number of recall operations for this recall.  Note one RecalledData can be merged from the results
   * of several recall operations if the time duration of the results of the recall operations overlap.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recallCount": number;
  /**
   * This is the size in bytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageUsageInBytes": number;
}

export namespace RecalledData {
  export enum Status {
    Recalled = "RECALLED",
    Pending = "PENDING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RecalledData): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RecalledData): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
