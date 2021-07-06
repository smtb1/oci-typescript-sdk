/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The size and placement configuration of nodes in the node pool.
 */
export interface NodePoolNodeConfigDetails {
  /**
   * The number of nodes in the node pool.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "size"?: number;
  /**
   * The OCIDs of the Network Security Group(s) to associate nodes for this node pool with. For more information about NSGs, see {@link NetworkSecurityGroup}.
   *
   */
  "nsgIds"?: Array<string>;
  /**
    * The placement configurations for the node pool. Provide one placement
* configuration for each availability domain in which you intend to launch a node.
* <p>
To use the node pool with a regional subnet, provide a placement configuration for
* each availability domain, and include the regional subnet in each placement
* configuration.
* 
    */
  "placementConfigs"?: Array<model.NodePoolPlacementConfigDetails>;
}

export namespace NodePoolNodeConfigDetails {
  export function getJsonObj(obj: NodePoolNodeConfigDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "placementConfigs": obj.placementConfigs
          ? obj.placementConfigs.map(item => {
              return model.NodePoolPlacementConfigDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NodePoolNodeConfigDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "placementConfigs": obj.placementConfigs
          ? obj.placementConfigs.map(item => {
              return model.NodePoolPlacementConfigDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
