/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20211001
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Decryption Profile used on the firewall policy rules.
 */
export interface DecryptionProfile {
  "type": string;
}

export namespace DecryptionProfile {
  export function getJsonObj(obj: DecryptionProfile): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "SSL_INBOUND_INSPECTION":
          return model.SslInboundInspectionProfile.getJsonObj(
            <model.SslInboundInspectionProfile>(<object>jsonObj),
            true
          );
        case "SSL_FORWARD_PROXY":
          return model.SslForwardProxyProfile.getJsonObj(
            <model.SslForwardProxyProfile>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DecryptionProfile): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "SSL_INBOUND_INSPECTION":
          return model.SslInboundInspectionProfile.getDeserializedJsonObj(
            <model.SslInboundInspectionProfile>(<object>jsonObj),
            true
          );
        case "SSL_FORWARD_PROXY":
          return model.SslForwardProxyProfile.getDeserializedJsonObj(
            <model.SslForwardProxyProfile>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.type);
      }
    }
    return jsonObj;
  }
}