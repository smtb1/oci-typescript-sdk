/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Partial information about a host which includes id, name, type.
 */
export interface HostDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the host.
   */
  "id": string;
  /**
   * The host name. The host name is unique amongst the hosts managed by the same management agent.
   */
  "hostName": string;
  /**
   * The user-friendly name for the host. The name does not have to be unique.
   */
  "hostDisplayName"?: string;
  /**
   * Platform type.
   */
  "platformType": HostDetails.PlatformType;
  /**
   * The identifier of the agent.
   */
  "agentIdentifier": string;
}

export namespace HostDetails {
  export enum PlatformType {
    Linux = "LINUX",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: HostDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
