/**
 * Bastion API
 * Oracle Cloud Infrastructure Bastion provides restricted and time-limited access to target resources that don't have public endpoints. Through the configuration of a bastion, you can let authorized users connect from specific IP addresses to target resources by way of Secure Shell (SSH) sessions hosted on the bastion.
 * OpenAPI spec version: 20210331
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
 * Details about a bastion session's target resource.
 */
export interface TargetResourceDetails {
  /**
   * The port number to connect to on the target resource. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "targetResourcePort": number;

  "sessionType": string;
}

export namespace TargetResourceDetails {
  export function getJsonObj(obj: TargetResourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("sessionType" in obj && obj.sessionType) {
      switch (obj.sessionType) {
        case "MANAGED_SSH":
          return model.ManagedSshSessionTargetResourceDetails.getJsonObj(
            <model.ManagedSshSessionTargetResourceDetails>(<object>jsonObj),
            true
          );
        case "PORT_FORWARDING":
          return model.PortForwardingSessionTargetResourceDetails.getJsonObj(
            <model.PortForwardingSessionTargetResourceDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.sessionType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TargetResourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("sessionType" in obj && obj.sessionType) {
      switch (obj.sessionType) {
        case "MANAGED_SSH":
          return model.ManagedSshSessionTargetResourceDetails.getDeserializedJsonObj(
            <model.ManagedSshSessionTargetResourceDetails>(<object>jsonObj),
            true
          );
        case "PORT_FORWARDING":
          return model.PortForwardingSessionTargetResourceDetails.getDeserializedJsonObj(
            <model.PortForwardingSessionTargetResourceDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.sessionType);
      }
    }
    return jsonObj;
  }
}
