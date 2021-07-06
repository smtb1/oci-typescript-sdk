/**
 * Management Agent API
 * API for Management Agent Cloud Service
 * OpenAPI spec version: 20200202
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
 * Summary of the ManagementAgentPlugin.
 */
export interface ManagementAgentPluginSummary {
  /**
   * Management Agent Plugin Id
   */
  "id": string;
  /**
   * Management Agent Plugin Name
   */
  "name": string;
  /**
   * Management Agent Plugin Version Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version"?: number;
  /**
   * Supported Platform Types
   */
  "supportedPlatformTypes"?: Array<model.PlatformTypes>;
  /**
   * Management Agent Plugin Display Name
   */
  "displayName"?: string;
  /**
   * Management Agent Plugin description
   */
  "description"?: string;
  /**
   * A flag to indicate whether a given plugin can be deployed from Agent Console UI or not.
   */
  "isConsoleDeployable"?: boolean;
  /**
   * The current state of Management Agent Plugin
   */
  "lifecycleState": model.LifecycleStates;
}

export namespace ManagementAgentPluginSummary {
  export function getJsonObj(obj: ManagementAgentPluginSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "supportedPlatformTypes": obj.supportedPlatformTypes
          ? obj.supportedPlatformTypes.map(item => {
              return model.PlatformTypes.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagementAgentPluginSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "supportedPlatformTypes": obj.supportedPlatformTypes
          ? obj.supportedPlatformTypes.map(item => {
              return model.PlatformTypes.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
