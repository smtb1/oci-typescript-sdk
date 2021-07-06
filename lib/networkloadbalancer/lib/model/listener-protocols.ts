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
 * Protocols supported for the listener of the network load balancer.
 **/
export enum ListenerProtocols {
  Any = "ANY",
  Tcp = "TCP",
  Udp = "UDP",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace ListenerProtocols {
  export function getJsonObj(obj: ListenerProtocols): ListenerProtocols {
    return obj;
  }
  export function getDeserializedJsonObj(obj: ListenerProtocols): ListenerProtocols {
    return obj;
  }
}
