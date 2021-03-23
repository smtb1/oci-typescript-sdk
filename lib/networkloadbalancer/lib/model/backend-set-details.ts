/**
 * NetworkLoadBalancer API
 * A description of the network load balancer API
 * OpenAPI spec version: 20200501
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
 * The configuration of a network load balancer backend set.
 * For more information about backend set configuration, see
 * [Managing Backend Sets](https://docs.cloud.oracle.com/Content/Balance/Tasks/managingbackendsets.htm).
 * <p>
 **Caution:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface BackendSetDetails {
  /**
    * The network load balancer policy for the backend set.
* <p>
Example: `FIVE_TUPLE`
* 
    */
  "policy"?: model.NetworkLoadBalancingPolicy;
  /**
   * If this parameter is enabled, then the network load balancer preserves the source IP of the packet when it is forwarded to backends.
   * Backends see the original source IP. If the isPreserveSourceDestination parameter is enabled for the network load balancer resource, then this parameter cannot be disabled.
   * The value is true by default.
   *
   */
  "isPreserveSource"?: boolean;
  /**
   * An array of backends.
   *
   */
  "backends"?: Array<model.Backend>;
  "healthChecker": model.HealthChecker;
}

export namespace BackendSetDetails {
  export function getJsonObj(obj: BackendSetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "backends": obj.backends
          ? obj.backends.map(item => {
              return model.Backend.getJsonObj(item);
            })
          : undefined,
        "healthChecker": obj.healthChecker
          ? model.HealthChecker.getJsonObj(obj.healthChecker)
          : undefined
      }
    };

    return jsonObj;
  }
}
