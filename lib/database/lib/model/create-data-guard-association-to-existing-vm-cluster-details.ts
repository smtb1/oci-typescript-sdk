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
 * The configuration details for creating a Data Guard association for a ExaCC Vmcluster database. For these types of vm cluster databases, the `creationType` should be `ExistingVmCluster`. A standby database will be created in the VM cluster you specify.
 *
 */
export interface CreateDataGuardAssociationToExistingVmClusterDetails
  extends model.CreateDataGuardAssociationDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the VM Cluster in which to create the standby database.
   * You must supply this value if creationType is `ExistingVmCluster`.
   *
   */
  "peerVmClusterId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB home in which to create the standby database.
   * You must supply this value to create standby database with an existing DB home
   *
   */
  "peerDbHomeId"?: string;

  "creationType": string;
}

export namespace CreateDataGuardAssociationToExistingVmClusterDetails {
  export function getJsonObj(
    obj: CreateDataGuardAssociationToExistingVmClusterDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataGuardAssociationDetails.getJsonObj(
            obj
          ) as CreateDataGuardAssociationToExistingVmClusterDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const creationType = "ExistingVmCluster";
  export function getDeserializedJsonObj(
    obj: CreateDataGuardAssociationToExistingVmClusterDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataGuardAssociationDetails.getDeserializedJsonObj(
            obj
          ) as CreateDataGuardAssociationToExistingVmClusterDetails)),
      ...{}
    };

    return jsonObj;
  }
}
