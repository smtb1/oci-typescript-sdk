/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
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
 * Summary of the deployment environment.
 */
export interface DeployEnvironmentSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Optional description about the deployment environment.
   */
  "description"?: string;
  /**
   * Deployment environment display name, which can be renamed and is not necessarily unique.
   */
  "displayName"?: string;
  /**
   * The OCID of a project.
   */
  "projectId": string;
  /**
   * The OCID of a compartment.
   */
  "compartmentId": string;
  /**
   * Time the deployment environment was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * Time the deployment environment was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the deployment environment.
   */
  "lifecycleState"?: string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "deployEnvironmentType": string;
}

export namespace DeployEnvironmentSummary {
  export function getJsonObj(obj: DeployEnvironmentSummary): object {
    const jsonObj = { ...obj, ...{} };

    if ("deployEnvironmentType" in obj && obj.deployEnvironmentType) {
      switch (obj.deployEnvironmentType) {
        case "FUNCTION":
          return model.FunctionDeployEnvironmentSummary.getJsonObj(
            <model.FunctionDeployEnvironmentSummary>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP":
          return model.ComputeInstanceGroupDeployEnvironmentSummary.getJsonObj(
            <model.ComputeInstanceGroupDeployEnvironmentSummary>(<object>jsonObj),
            true
          );
        case "OKE_CLUSTER":
          return model.OkeClusterDeployEnvironmentSummary.getJsonObj(
            <model.OkeClusterDeployEnvironmentSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.deployEnvironmentType);
      }
    }
    return jsonObj;
  }
}