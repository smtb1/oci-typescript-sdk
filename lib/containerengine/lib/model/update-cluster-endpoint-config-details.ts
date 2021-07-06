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
 * The properties that define a request to update a cluster endpoint config.
 */
export interface UpdateClusterEndpointConfigDetails {
  /**
   * A list of the OCIDs of the network security groups (NSGs) to apply to the cluster endpoint. For more information about NSGs, see {@link NetworkSecurityGroup}.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * Whether the cluster should be assigned a public IP address. Defaults to false. If set to true on a private subnet, the cluster update will fail.
   */
  "isPublicIpEnabled"?: boolean;
}

export namespace UpdateClusterEndpointConfigDetails {
  export function getJsonObj(obj: UpdateClusterEndpointConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateClusterEndpointConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
