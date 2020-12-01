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
* Details of Backups such as OCID, description, backupType, and so on.
* <p>
To use any of the API operations, you must be authorized in an IAM
* policy. If you're not authorized, talk to an administrator. If you're an
* administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface BackupSummary {
  /**
   * OCID of the backup.
   */
  "id": string;
  /**
   * A user-supplied display name for the backup.
   */
  "displayName"?: string;
  /**
   * A user-supplied description of the backup.
   */
  "description"?: string;
  /**
   * The time the backup was created.
   */
  "timeCreated": Date;
  /**
   * The state of the backup.
   */
  "lifecycleState": string;
  /**
   * The type of backup.
   */
  "backupType": string;
  /**
   * If the backup was created automatically, or by a manual request.
   */
  "creationType": string;
  /**
   * The OCID of the DB System the Backup is associated with.
   */
  "dbSystemId": string;
  /**
   * Size of the data volume in GiBs.
   */
  "dataStorageSizeInGBs"?: number;
  /**
   * The size of the backup in GiBs.
   */
  "backupSizeInGBs"?: number;
  /**
   * Number of days to retain this backup.
   */
  "retentionInDays"?: number;
  /**
   * The version of the DB System used for backup.
   */
  "mysqlVersion"?: string;
  /**
   * The shape of the DB System instance used for backup.
   */
  "shapeName"?: string;
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

export namespace BackupSummary {
  export function getJsonObj(obj: BackupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
