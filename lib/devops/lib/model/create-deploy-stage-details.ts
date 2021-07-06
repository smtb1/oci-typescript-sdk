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
 * The information about new deployment stage.
 */
export interface CreateDeployStageDetails {
  /**
   * Optional description about the deployment stage.
   */
  "description"?: string;
  /**
   * Deployment stage display name, which can be renamed and is not necessarily unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of a pipeline.
   */
  "deployPipelineId": string;
  "deployStagePredecessorCollection": model.DeployStagePredecessorCollection;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "deployStageType": string;
}

export namespace CreateDeployStageDetails {
  export function getJsonObj(obj: CreateDeployStageDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployStagePredecessorCollection": obj.deployStagePredecessorCollection
          ? model.DeployStagePredecessorCollection.getJsonObj(obj.deployStagePredecessorCollection)
          : undefined
      }
    };

    if ("deployStageType" in obj && obj.deployStageType) {
      switch (obj.deployStageType) {
        case "MANUAL_APPROVAL":
          return model.CreateManualApprovalDeployStageDetails.getJsonObj(
            <model.CreateManualApprovalDeployStageDetails>(<object>jsonObj),
            true
          );
        case "WAIT":
          return model.CreateWaitDeployStageDetails.getJsonObj(
            <model.CreateWaitDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_DEPLOYMENT":
          return model.CreateOkeDeployStageDetails.getJsonObj(
            <model.CreateOkeDeployStageDetails>(<object>jsonObj),
            true
          );
        case "LOAD_BALANCER_TRAFFIC_SHIFT":
          return model.CreateLoadBalancerTrafficShiftDeployStageDetails.getJsonObj(
            <model.CreateLoadBalancerTrafficShiftDeployStageDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_ROLLING_DEPLOYMENT":
          return model.CreateComputeInstanceGroupDeployStageDetails.getJsonObj(
            <model.CreateComputeInstanceGroupDeployStageDetails>(<object>jsonObj),
            true
          );
        case "INVOKE_FUNCTION":
          return model.CreateInvokeFunctionDeployStageDetails.getJsonObj(
            <model.CreateInvokeFunctionDeployStageDetails>(<object>jsonObj),
            true
          );
        case "DEPLOY_FUNCTION":
          return model.CreateFunctionDeployStageDetails.getJsonObj(
            <model.CreateFunctionDeployStageDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.deployStageType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDeployStageDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployStagePredecessorCollection": obj.deployStagePredecessorCollection
          ? model.DeployStagePredecessorCollection.getDeserializedJsonObj(
              obj.deployStagePredecessorCollection
            )
          : undefined
      }
    };

    if ("deployStageType" in obj && obj.deployStageType) {
      switch (obj.deployStageType) {
        case "MANUAL_APPROVAL":
          return model.CreateManualApprovalDeployStageDetails.getDeserializedJsonObj(
            <model.CreateManualApprovalDeployStageDetails>(<object>jsonObj),
            true
          );
        case "WAIT":
          return model.CreateWaitDeployStageDetails.getDeserializedJsonObj(
            <model.CreateWaitDeployStageDetails>(<object>jsonObj),
            true
          );
        case "OKE_DEPLOYMENT":
          return model.CreateOkeDeployStageDetails.getDeserializedJsonObj(
            <model.CreateOkeDeployStageDetails>(<object>jsonObj),
            true
          );
        case "LOAD_BALANCER_TRAFFIC_SHIFT":
          return model.CreateLoadBalancerTrafficShiftDeployStageDetails.getDeserializedJsonObj(
            <model.CreateLoadBalancerTrafficShiftDeployStageDetails>(<object>jsonObj),
            true
          );
        case "COMPUTE_INSTANCE_GROUP_ROLLING_DEPLOYMENT":
          return model.CreateComputeInstanceGroupDeployStageDetails.getDeserializedJsonObj(
            <model.CreateComputeInstanceGroupDeployStageDetails>(<object>jsonObj),
            true
          );
        case "INVOKE_FUNCTION":
          return model.CreateInvokeFunctionDeployStageDetails.getDeserializedJsonObj(
            <model.CreateInvokeFunctionDeployStageDetails>(<object>jsonObj),
            true
          );
        case "DEPLOY_FUNCTION":
          return model.CreateFunctionDeployStageDetails.getDeserializedJsonObj(
            <model.CreateFunctionDeployStageDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.deployStageType);
      }
    }
    return jsonObj;
  }
}
