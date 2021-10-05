/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * Database objects to include or exclude from migration
 *
 */
export interface DatabaseObject {
  /**
   * Owner of the object (regular expression is allowed)
   *
   */
  "owner": string;
  /**
   * Name of the object (regular expression is allowed)
   *
   */
  "objectName": string;
  /**
   * Type of object to exclude.
   * If not specified, matching owners and object names of type TABLE would be excluded.
   *
   */
  "type"?: string;
}

export namespace DatabaseObject {
  export function getJsonObj(obj: DatabaseObject): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseObject): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
