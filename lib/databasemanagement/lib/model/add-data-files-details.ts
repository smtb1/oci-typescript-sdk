/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details required to add data files or temp files to the tablespace.
 *
 */
export interface AddDataFilesDetails {
  "credentialDetails":
    | model.TablespaceAdminPasswordCredentialDetails
    | model.TablespaceAdminSecretCredentialDetails;
  /**
   * Specifies whether the file is a data file or temp file.
   *
   */
  "fileType": AddDataFilesDetails.FileType;
  /**
   * The list of data files or temp files added to the tablespace.
   *
   */
  "dataFiles"?: Array<string>;
  /**
   * The number of data files or temp files to be added for the tablespace. This is for Oracle Managed Files only.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "fileCount"?: number;
  /**
   * The size of each data file or temp file.
   *
   */
  "fileSize"?: model.TablespaceStorageSize;
  /**
   * Specifies whether Oracle can reuse the data file or temp file. Reuse is only allowed when the file name is provided.
   *
   */
  "isReusable"?: boolean;
  /**
   * Specifies whether the data file or temp file can be extended automatically.
   *
   */
  "isAutoExtensible"?: boolean;
  /**
   * The size of the next increment of disk space to be allocated automatically when more extents are required.
   *
   */
  "autoExtendNextSize"?: model.TablespaceStorageSize;
  /**
   * The maximum disk space allowed for automatic extension of the data files or temp files.
   *
   */
  "autoExtendMaxSize"?: model.TablespaceStorageSize;
  /**
   * Specifies whether the disk space of the data file or temp file can be limited.
   *
   */
  "isMaxSizeUnlimited"?: boolean;
}

export namespace AddDataFilesDetails {
  export enum FileType {
    Datafile = "DATAFILE",
    Tempfile = "TEMPFILE"
  }

  export function getJsonObj(obj: AddDataFilesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentialDetails": obj.credentialDetails
          ? model.TablespaceAdminCredentialDetails.getJsonObj(obj.credentialDetails)
          : undefined,

        "fileSize": obj.fileSize ? model.TablespaceStorageSize.getJsonObj(obj.fileSize) : undefined,

        "autoExtendNextSize": obj.autoExtendNextSize
          ? model.TablespaceStorageSize.getJsonObj(obj.autoExtendNextSize)
          : undefined,
        "autoExtendMaxSize": obj.autoExtendMaxSize
          ? model.TablespaceStorageSize.getJsonObj(obj.autoExtendMaxSize)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddDataFilesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentialDetails": obj.credentialDetails
          ? model.TablespaceAdminCredentialDetails.getDeserializedJsonObj(obj.credentialDetails)
          : undefined,

        "fileSize": obj.fileSize
          ? model.TablespaceStorageSize.getDeserializedJsonObj(obj.fileSize)
          : undefined,

        "autoExtendNextSize": obj.autoExtendNextSize
          ? model.TablespaceStorageSize.getDeserializedJsonObj(obj.autoExtendNextSize)
          : undefined,
        "autoExtendMaxSize": obj.autoExtendMaxSize
          ? model.TablespaceStorageSize.getDeserializedJsonObj(obj.autoExtendMaxSize)
          : undefined
      }
    };

    return jsonObj;
  }
}