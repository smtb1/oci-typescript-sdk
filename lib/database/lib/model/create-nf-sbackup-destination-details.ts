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
 * Used for creating NFS backup destinations.
 */
export interface CreateNFSBackupDestinationDetails extends model.CreateBackupDestinationDetails {
  /**
   * **Deprecated.** The local directory path on each VM cluster node where the NFS server location is mounted. The local directory path and the NFS server location must each be the same across all of the VM cluster nodes. Ensure that the NFS mount is maintained continuously on all of the VM cluster nodes.
   * This field is deprecated. Use the mountTypeDetails field instead to specify the mount type for NFS.
   *
   */
  "localMountPointPath"?: string;
  "mountTypeDetails"?: model.SelfMountDetails | model.AutomatedMountDetails;

  "type": string;
}

export namespace CreateNFSBackupDestinationDetails {
  export function getJsonObj(
    obj: CreateNFSBackupDestinationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateBackupDestinationDetails.getJsonObj(
            obj
          ) as CreateNFSBackupDestinationDetails)),
      ...{
        "mountTypeDetails": obj.mountTypeDetails
          ? model.MountTypeDetails.getJsonObj(obj.mountTypeDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "NFS";
  export function getDeserializedJsonObj(
    obj: CreateNFSBackupDestinationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateBackupDestinationDetails.getDeserializedJsonObj(
            obj
          ) as CreateNFSBackupDestinationDetails)),
      ...{
        "mountTypeDetails": obj.mountTypeDetails
          ? model.MountTypeDetails.getDeserializedJsonObj(obj.mountTypeDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
