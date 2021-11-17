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
 * Defines the `routesTo` relationship between virtual network topology entities. A `RoutesTo` relationship
 * is defined when a routing table and a routing rule  are used to govern how to route traffic
 * from one entity to another. For example, a DRG might have a routing rule to send certain traffic to an LPG.
 *
 */
export interface TopologyRoutesToEntityRelationship extends model.TopologyEntityRelationship {
  "routeRuleDetails": model.TopologyRoutesToRelationshipDetails;

  "type": string;
}

export namespace TopologyRoutesToEntityRelationship {
  export function getJsonObj(
    obj: TopologyRoutesToEntityRelationship,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TopologyEntityRelationship.getJsonObj(obj) as TopologyRoutesToEntityRelationship)),
      ...{
        "routeRuleDetails": obj.routeRuleDetails
          ? model.TopologyRoutesToRelationshipDetails.getJsonObj(obj.routeRuleDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "ROUTES_TO";
  export function getDeserializedJsonObj(
    obj: TopologyRoutesToEntityRelationship,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TopologyEntityRelationship.getDeserializedJsonObj(
            obj
          ) as TopologyRoutesToEntityRelationship)),
      ...{
        "routeRuleDetails": obj.routeRuleDetails
          ? model.TopologyRoutesToRelationshipDetails.getDeserializedJsonObj(obj.routeRuleDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
