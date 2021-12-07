/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
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
 * Specifies Deliver Artifacts stage specific run details.
 */
export interface DeliverArtifactStageRunProgress extends model.BuildPipelineStageRunProgress {
  "deliveredArtifacts"?: model.DeliveredArtifactCollection;

  "buildPipelineStageType": string;
}

export namespace DeliverArtifactStageRunProgress {
  export function getJsonObj(
    obj: DeliverArtifactStageRunProgress,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildPipelineStageRunProgress.getJsonObj(obj) as DeliverArtifactStageRunProgress)),
      ...{
        "deliveredArtifacts": obj.deliveredArtifacts
          ? model.DeliveredArtifactCollection.getJsonObj(obj.deliveredArtifacts)
          : undefined
      }
    };

    return jsonObj;
  }
  export const buildPipelineStageType = "DELIVER_ARTIFACT";
  export function getDeserializedJsonObj(
    obj: DeliverArtifactStageRunProgress,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildPipelineStageRunProgress.getDeserializedJsonObj(
            obj
          ) as DeliverArtifactStageRunProgress)),
      ...{
        "deliveredArtifacts": obj.deliveredArtifacts
          ? model.DeliveredArtifactCollection.getDeserializedJsonObj(obj.deliveredArtifacts)
          : undefined
      }
    };

    return jsonObj;
  }
}