/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details of the database running on-premises or on a compute instance.
 */
export interface InstalledDatabaseDetails extends model.DatabaseDetails {
  /**
   * The OCID of the compute instance on which the database is running.
   */
  "instanceId"?: string;
  /**
   * A List of either the IP Addresses or FQDN names of the database hosts.
   *
   */
  "ipAddresses"?: Array<string>;
  /**
   * The port number of the database listener. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "listenerPort"?: number;
  /**
   * The service name of the database registered as target database.
   */
  "serviceName"?: string;

  "databaseType": string;
}

export namespace InstalledDatabaseDetails {
  export function getJsonObj(obj: InstalledDatabaseDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseDetails.getJsonObj(obj) as InstalledDatabaseDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const databaseType = "INSTALLED_DATABASE";
  export function getDeserializedJsonObj(
    obj: InstalledDatabaseDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseDetails.getDeserializedJsonObj(obj) as InstalledDatabaseDetails)),
      ...{}
    };

    return jsonObj;
  }
}
