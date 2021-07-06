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
 * An object that represents the `round-robin` load balancing method.
 *
 */
export interface RoundRobinLoadBalancingMethod extends model.LoadBalancingMethod {
  "method": string;
}

export namespace RoundRobinLoadBalancingMethod {
  export function getJsonObj(
    obj: RoundRobinLoadBalancingMethod,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LoadBalancingMethod.getJsonObj(obj) as RoundRobinLoadBalancingMethod)),
      ...{}
    };

    return jsonObj;
  }
  export const method = "ROUND_ROBIN";
  export function getDeserializedJsonObj(
    obj: RoundRobinLoadBalancingMethod,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LoadBalancingMethod.getDeserializedJsonObj(obj) as RoundRobinLoadBalancingMethod)),
      ...{}
    };

    return jsonObj;
  }
}
