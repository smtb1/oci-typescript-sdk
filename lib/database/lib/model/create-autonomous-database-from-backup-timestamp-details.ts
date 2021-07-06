/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details to create a point-in-time clone of an Oracle Autonomous Database by specifying a timestamp. Point-in-time clones use backups as the source of the data for the clone.
 *
 */
export interface CreateAutonomousDatabaseFromBackupTimestampDetails
  extends model.CreateAutonomousDatabaseBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the source Autonomous Database that you will clone to create a new Autonomous Database.
   */
  "autonomousDatabaseId": string;
  /**
   * The timestamp specified for the point-in-time clone of the source Autonomous Database. The timestamp must be in the past.
   */
  "timestamp": Date;
  /**
   * The Autonomous Database clone type.
   */
  "cloneType": CreateAutonomousDatabaseFromBackupTimestampDetails.CloneType;

  "source": string;
}

export namespace CreateAutonomousDatabaseFromBackupTimestampDetails {
  export enum CloneType {
    Full = "FULL",
    Metadata = "METADATA"
  }

  export function getJsonObj(
    obj: CreateAutonomousDatabaseFromBackupTimestampDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAutonomousDatabaseBase.getJsonObj(
            obj
          ) as CreateAutonomousDatabaseFromBackupTimestampDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const source = "BACKUP_FROM_TIMESTAMP";
  export function getDeserializedJsonObj(
    obj: CreateAutonomousDatabaseFromBackupTimestampDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAutonomousDatabaseBase.getDeserializedJsonObj(
            obj
          ) as CreateAutonomousDatabaseFromBackupTimestampDetails)),
      ...{}
    };

    return jsonObj;
  }
}
