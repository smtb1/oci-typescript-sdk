/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * The configuration details to update load balancer to a different shape.
 *
 */
export interface ShapeDetails {
  /**
    * Bandwidth in Mbps that determines the total pre-provisioned bandwidth (ingress plus egress).
* The values must be between 10 and the maximumBandwidthInMbps.
* <p>
Example: `150`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "minimumBandwidthInMbps": number;
  /**
    * Bandwidth in Mbps that determines the maximum bandwidth (ingress plus egress) that the load balancer can
* achieve. This bandwidth cannot be always guaranteed. For a guaranteed bandwidth use the minimumBandwidthInMbps
* parameter.
* <p>
The values must be between minimumBandwidthInMbps and 8192 (8Gbps).
* <p>
Example: `1500`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "maximumBandwidthInMbps": number;
}

export namespace ShapeDetails {
  export function getJsonObj(obj: ShapeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ShapeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
