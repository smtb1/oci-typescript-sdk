/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

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

export interface UpdateIPSecConnectionTunnelDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid
   * entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The type of routing to use for this tunnel (either BGP dynamic routing or static routing).
   *
   */
  "routing"?: UpdateIPSecConnectionTunnelDetails.Routing;
  /**
   * Internet Key Exchange protocol version.
   *
   */
  "ikeVersion"?: UpdateIPSecConnectionTunnelDetails.IkeVersion;
  "bgpSessionConfig"?: model.UpdateIPSecTunnelBgpSessionDetails;
  "encryptionDomainConfig"?: model.UpdateIPSecTunnelEncryptionDomainDetails;
}

export namespace UpdateIPSecConnectionTunnelDetails {
  export enum Routing {
    Bgp = "BGP",
    Static = "STATIC",
    Policy = "POLICY"
  }

  export enum IkeVersion {
    V1 = "V1",
    V2 = "V2"
  }

  export function getJsonObj(obj: UpdateIPSecConnectionTunnelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "bgpSessionConfig": obj.bgpSessionConfig
          ? model.UpdateIPSecTunnelBgpSessionDetails.getJsonObj(obj.bgpSessionConfig)
          : undefined,
        "encryptionDomainConfig": obj.encryptionDomainConfig
          ? model.UpdateIPSecTunnelEncryptionDomainDetails.getJsonObj(obj.encryptionDomainConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateIPSecConnectionTunnelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "bgpSessionConfig": obj.bgpSessionConfig
          ? model.UpdateIPSecTunnelBgpSessionDetails.getDeserializedJsonObj(obj.bgpSessionConfig)
          : undefined,
        "encryptionDomainConfig": obj.encryptionDomainConfig
          ? model.UpdateIPSecTunnelEncryptionDomainDetails.getDeserializedJsonObj(
              obj.encryptionDomainConfig
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
