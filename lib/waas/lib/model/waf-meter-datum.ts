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

export interface WafMeterDatum {
  /**
   * The date and time the traffic was observed, rounded down to the start of a range, and expressed in RFC 3339 timestamp format.
   */
  "timeObserved"?: Date;
  /**
   * The number of seconds this data covers. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeRangeInSeconds"?: number;
  /**
   * The tenancy OCID of the data.
   */
  "tenancyId"?: string;
  /**
   * The compartment OCID of the data.
   */
  "compartmentId"?: string;
  /**
   * The policy OCID of the data.
   */
  "waasPolicyId"?: string;
  /**
   * True if origin (endpoint) is an OCI resource. False if external.
   */
  "isOciOrigin"?: boolean;
  /**
   * True if bot manager is enabled.
   */
  "isBotEnabled"?: boolean;
  /**
   * The number of incoming requests. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "requestCount"?: number;
  /**
   * Traffic in bytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "trafficInBytes"?: number;
  /**
   * The tag slug for the specified `waasPolicyId`.
   */
  "tagSlug"?: string;
}

export namespace WafMeterDatum {
  export function getJsonObj(obj: WafMeterDatum): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WafMeterDatum): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
