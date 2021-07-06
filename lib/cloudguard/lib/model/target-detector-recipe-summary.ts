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
 * Summary of DetectorRecipe
 */
export interface TargetDetectorRecipeSummary {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * DetectorRecipe Identifier Name
   */
  "displayName": string;
  /**
   * DetectorRecipe Description
   */
  "description": string;
  /**
   * Owner of DetectorRecipe
   */
  "owner": model.OwnerType;
  /**
   * Unique identifier for Detector Recipe of which this is an extension
   */
  "detectorRecipeId": string;
  /**
   * Type of detector
   */
  "detector"?: model.DetectorEnum;
  /**
   * The current state of the resource.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The date and time the target detector recipe was created. Format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the target detector recipe was updated. Format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
}

export namespace TargetDetectorRecipeSummary {
  export function getJsonObj(obj: TargetDetectorRecipeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TargetDetectorRecipeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
