/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Mount type details for backup destination.
 */
export interface MountTypeDetails {
  "mountType": string;
}

export namespace MountTypeDetails {
  export function getJsonObj(obj: MountTypeDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("mountType" in obj && obj.mountType) {
      switch (obj.mountType) {
        case "SELF_MOUNT":
          return model.SelfMountDetails.getJsonObj(<model.SelfMountDetails>(<object>jsonObj), true);
        case "AUTOMATED_MOUNT":
          return model.AutomatedMountDetails.getJsonObj(
            <model.AutomatedMountDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.mountType);
      }
    }
    return jsonObj;
  }
}
