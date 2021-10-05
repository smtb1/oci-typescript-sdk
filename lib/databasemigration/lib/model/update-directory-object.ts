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
 * Directory object details, used to define either import or export directory objects in Data Pump Settings.
 * Import directory is required for Non-Autonomous target connections. If specified for an autonomous target, it will show an error.
 * Export directory will error if there are database link details specified.
 * If an empty object is specified, the stored Directory Object details will be removed.
 *
 */
export interface UpdateDirectoryObject {
  /**
   * Name of directory object in database
   *
   */
  "name"?: string;
  /**
   * Absolute path of directory on database server
   *
   */
  "path"?: string;
}

export namespace UpdateDirectoryObject {
  export function getJsonObj(obj: UpdateDirectoryObject): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDirectoryObject): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
