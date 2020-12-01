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
 * Complete information for a Backup.
 */
export interface CreateBackupDetails {
  /**
   * A user-supplied display name for the backup.
   */
  "displayName"?: string;
  /**
   * A user-supplied description for the backup.
   */
  "description"?: string;
  /**
   * The type of backup.
   */
  "backupType"?: CreateBackupDetails.BackupType;
  /**
   * The OCID of the DB System the Backup is associated with.
   */
  "dbSystemId": string;
  /**
   * Number of days to retain this backup.
   */
  "retentionInDays"?: number;
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

export namespace CreateBackupDetails {
  export enum BackupType {
    Full = "FULL",
    Incremental = "INCREMENTAL"
  }

  export function getJsonObj(obj: CreateBackupDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
