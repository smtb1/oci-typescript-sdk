/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Entity details including whether or not it is eligible for association with the source.
 */
export interface AssociableEntity {
  /**
   * The entity OCID.
   */
  "entityId"?: string;
  /**
   * The name of the entity.
   */
  "entityName"?: string;
  /**
   * The type name of the entity.
   */
  "entityTypeName"?: string;
  /**
   * The display name of the entity type.
   */
  "entityTypeDisplayName"?: string;
  /**
   * The entity host.
   */
  "host"?: string;
  /**
   * The OCID of the Management Agent.
   */
  "agentId"?: string;
  /**
   * This field indicates whether the entity is (in)eligible to be associated with this source.
   *
   */
  "eligibilityStatus"?: AssociableEntity.EligibilityStatus;
  /**
   * The reason the entity is not eligible for association.
   */
  "ineligibilityDetails"?: string;
}

export namespace AssociableEntity {
  export enum EligibilityStatus {
    Eligible = "ELIGIBLE",
    Ineligible = "INELIGIBLE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AssociableEntity): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AssociableEntity): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
