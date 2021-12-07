/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

 * OpenAPI spec version: 20160918
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
 * Tunnel detail information specific to IPSec phase 2.
 */
export interface TunnelPhaseTwoDetails {
  /**
   * Indicates whether custom phase two configuration is enabled.
   */
  "isCustomPhaseTwoConfig"?: boolean;
  /**
   * The total configured lifetime of an IKE security association. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lifetime"?: number;
  /**
   * The lifetime remaining before the key is refreshed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "remainingLifetime"?: number;
  /**
   * Phase Two authentication algorithm supported during tunnel negotiation.
   *
   */
  "customAuthenticationAlgorithm"?: string;
  /**
   * The negotiated authentication algorithm.
   */
  "negotiatedAuthenticationAlgorithm"?: string;
  /**
   * Custom Encryption Algorithm
   *
   */
  "customEncryptionAlgorithm"?: string;
  /**
   * The negotiated encryption algorithm.
   */
  "negotiatedEncryptionAlgorithm"?: string;
  /**
   * Proposed Diffie-Hellman group.
   *
   */
  "dhGroup"?: string;
  /**
   * The negotiated Diffie-Hellman group.
   */
  "negotiatedDhGroup"?: string;
  /**
   * ESP Phase 2 established
   */
  "isEspEstablished"?: boolean;
  /**
   * Is PFS (perfect forward secrecy) enabled
   */
  "isPfsEnabled"?: boolean;
  /**
    * The date and time we retrieved the remaining lifetime, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "remainingLifetimeLastRetrieved"?: Date;
}

export namespace TunnelPhaseTwoDetails {
  export function getJsonObj(obj: TunnelPhaseTwoDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TunnelPhaseTwoDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}