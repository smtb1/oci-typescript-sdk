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
 * Specifies wait criteria for the Wait stage.
 */
export interface WaitCriteriaSummary {
  "waitType": string;
}

export namespace WaitCriteriaSummary {
  export function getJsonObj(obj: WaitCriteriaSummary): object {
    const jsonObj = { ...obj, ...{} };

    if ("waitType" in obj && obj.waitType) {
      switch (obj.waitType) {
        case "ABSOLUTE_WAIT":
          return model.AbsoluteWaitCriteriaSummary.getJsonObj(
            <model.AbsoluteWaitCriteriaSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.waitType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WaitCriteriaSummary): object {
    const jsonObj = { ...obj, ...{} };

    if ("waitType" in obj && obj.waitType) {
      switch (obj.waitType) {
        case "ABSOLUTE_WAIT":
          return model.AbsoluteWaitCriteriaSummary.getDeserializedJsonObj(
            <model.AbsoluteWaitCriteriaSummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.waitType);
      }
    }
    return jsonObj;
  }
}
