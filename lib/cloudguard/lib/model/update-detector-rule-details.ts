/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
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
 * Details of a Detector Rule to be overriden in Detector Recipe
 */
export interface UpdateDetectorRuleDetails {
  /**
   * Enables the control
   */
  "isEnabled": boolean;
  /**
   * The Risk Level
   */
  "riskLevel": model.RiskLevel;
  /**
   * Configuration details
   */
  "configurations"?: Array<model.DetectorConfiguration>;
  "condition"?: model.SimpleCondition | model.CompositeCondition;
  /**
   * user defined labels for a detector rule
   */
  "labels"?: Array<string>;
}

export namespace UpdateDetectorRuleDetails {
  export function getJsonObj(obj: UpdateDetectorRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.DetectorConfiguration.getJsonObj(item);
            })
          : undefined,
        "condition": obj.condition ? model.Condition.getJsonObj(obj.condition) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDetectorRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurations": obj.configurations
          ? obj.configurations.map(item => {
              return model.DetectorConfiguration.getDeserializedJsonObj(item);
            })
          : undefined,
        "condition": obj.condition
          ? model.Condition.getDeserializedJsonObj(obj.condition)
          : undefined
      }
    };

    return jsonObj;
  }
}
