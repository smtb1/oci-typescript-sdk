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
 * Details about the Channel target.
 */
export interface ChannelTarget {
  "targetType": string;
}

export namespace ChannelTarget {
  export function getJsonObj(obj: ChannelTarget): object {
    const jsonObj = { ...obj, ...{} };

    if ("targetType" in obj && obj.targetType) {
      switch (obj.targetType) {
        case "DBSYSTEM":
          return model.ChannelTargetDbSystem.getJsonObj(
            <model.ChannelTargetDbSystem>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.targetType);
      }
    }
    return jsonObj;
  }
}
