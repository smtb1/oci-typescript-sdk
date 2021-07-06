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
 * An array of IP addresses that bypass the Web Application Firewall. Supports both single IP addresses or subnet masks (CIDR notation).
 */
export interface Whitelist {
  /**
   * The unique name of the whitelist.
   */
  "name": string;
  /**
   * A set of IP addresses or CIDR notations to include in the whitelist.
   */
  "addresses"?: Array<string>;
  /**
   * A list of [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of IP address lists to include in the whitelist.
   */
  "addressLists"?: Array<string>;
}

export namespace Whitelist {
  export function getJsonObj(obj: Whitelist): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Whitelist): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
