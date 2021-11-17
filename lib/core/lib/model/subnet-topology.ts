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
 * Defines the visualization of a subnet in a VCN.
 */
export interface SubnetTopology extends model.Topology {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the subnet for which the visualization is generated.
   */
  "subnetId"?: string;

  "type": string;
}

export namespace SubnetTopology {
  export function getJsonObj(obj: SubnetTopology, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Topology.getJsonObj(obj) as SubnetTopology)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "SUBNET";
  export function getDeserializedJsonObj(obj: SubnetTopology, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Topology.getDeserializedJsonObj(obj) as SubnetTopology)),
      ...{}
    };

    return jsonObj;
  }
}
