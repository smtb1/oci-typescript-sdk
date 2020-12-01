/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Parameters detailing how to provision the initial data of the system.
 *
 */
export interface CreateDbSystemSourceDetails {
  "sourceType": string;
}

export namespace CreateDbSystemSourceDetails {
  export function getJsonObj(obj: CreateDbSystemSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "BACKUP":
          return model.CreateDbSystemSourceFromBackupDetails.getJsonObj(
            <model.CreateDbSystemSourceFromBackupDetails>(<object>jsonObj),
            true
          );
        case "NONE":
          return model.CreateDbSystemSourceFromNoneDetails.getJsonObj(
            <model.CreateDbSystemSourceFromNoneDetails>(<object>jsonObj),
            true
          );
        case "IMPORTURL":
          return model.CreateDbSystemSourceImportFromUrlDetails.getJsonObj(
            <model.CreateDbSystemSourceImportFromUrlDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.sourceType);
      }
    }
    return jsonObj;
  }
}
