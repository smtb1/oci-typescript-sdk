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
 * The properties that define extra options for a cluster.
 */
export interface ClusterCreateOptions {
  /**
   * The OCIDs of the subnets used for Kubernetes services load balancers.
   */
  "serviceLbSubnetIds"?: Array<string>;
  /**
   * Network configuration for Kubernetes.
   */
  "kubernetesNetworkConfig"?: model.KubernetesNetworkConfig;
  /**
   * Configurable cluster add-ons
   */
  "addOns"?: model.AddOnOptions;
  /**
   * Configurable cluster admission controllers
   */
  "admissionControllerOptions"?: model.AdmissionControllerOptions;
}

export namespace ClusterCreateOptions {
  export function getJsonObj(obj: ClusterCreateOptions): object {
    const jsonObj = {
      ...obj,
      ...{
        "kubernetesNetworkConfig": obj.kubernetesNetworkConfig
          ? model.KubernetesNetworkConfig.getJsonObj(obj.kubernetesNetworkConfig)
          : undefined,
        "addOns": obj.addOns ? model.AddOnOptions.getJsonObj(obj.addOns) : undefined,
        "admissionControllerOptions": obj.admissionControllerOptions
          ? model.AdmissionControllerOptions.getJsonObj(obj.admissionControllerOptions)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ClusterCreateOptions): object {
    const jsonObj = {
      ...obj,
      ...{
        "kubernetesNetworkConfig": obj.kubernetesNetworkConfig
          ? model.KubernetesNetworkConfig.getDeserializedJsonObj(obj.kubernetesNetworkConfig)
          : undefined,
        "addOns": obj.addOns ? model.AddOnOptions.getDeserializedJsonObj(obj.addOns) : undefined,
        "admissionControllerOptions": obj.admissionControllerOptions
          ? model.AdmissionControllerOptions.getDeserializedJsonObj(obj.admissionControllerOptions)
          : undefined
      }
    };

    return jsonObj;
  }
}
