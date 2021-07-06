/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
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
 * Database Connection Summary.
 *
 */
export interface ConnectionSummary {
  /**
   * The OCID of the resource
   *
   */
  "id": string;
  /**
   * OCID of the compartment
   *
   */
  "compartmentId": string;
  /**
   * Database connection type.
   *
   */
  "databaseType": model.DatabaseConnectionTypes;
  /**
   * Database Connection display name identifier.
   *
   */
  "displayName": string;
  /**
   * The OCID of the cloud database.
   *
   */
  "databaseId"?: string;
  /**
   * The time the Connection resource was created. An RFC3339 formatted datetime string.
   *
   */
  "timeCreated": Date;
  /**
   * The time of the last Connection resource details update. An RFC3339 formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the Connection resource.
   *
   */
  "lifecycleState": model.LifecycleStates;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information
   * for a resource in Failed state.
   *
   */
  "lifecycleDetails"?: string;
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
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ConnectionSummary {
  export function getJsonObj(obj: ConnectionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConnectionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
