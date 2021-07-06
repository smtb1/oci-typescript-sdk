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
 * The information about new Data Mask Rule.
 */
export interface CreateDataMaskRuleDetails {
  /**
   * Data Mask Rule name
   */
  "displayName": string;
  /**
   * Compartment Identifier where the resource is created
   */
  "compartmentId": string;
  /**
   * The Data Mask Rule description.
   */
  "description"?: string;
  /**
   * IAM Group id associated with the data mask rule
   */
  "iamGroupId": string;
  "targetSelected":
    | model.AllTargetsSelected
    | model.TargetResourceTypesSelected
    | model.TargetIdsSelected;
  /**
   * Data Mask Categories
   */
  "dataMaskCategories": Array<CreateDataMaskRuleDetails.DataMaskCategories>;
  /**
   * The status of the dataMaskRule.
   */
  "dataMaskRuleStatus"?: model.DataMaskRuleStatus;
  /**
   * The current state of the DataMaskRule.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateDataMaskRuleDetails {
  export enum DataMaskCategories {
    Actor = "ACTOR",
    Pii = "PII",
    Phi = "PHI",
    Financial = "FINANCIAL",
    Location = "LOCATION",
    Custom = "CUSTOM"
  }

  export function getJsonObj(obj: CreateDataMaskRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "targetSelected": obj.targetSelected
          ? model.TargetSelected.getJsonObj(obj.targetSelected)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDataMaskRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "targetSelected": obj.targetSelected
          ? model.TargetSelected.getDeserializedJsonObj(obj.targetSelected)
          : undefined
      }
    };

    return jsonObj;
  }
}
