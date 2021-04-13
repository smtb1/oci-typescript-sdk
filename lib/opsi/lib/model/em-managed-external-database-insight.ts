/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Database insight resource.
 */
export interface EmManagedExternalDatabaseInsight extends model.DatabaseInsight {
  /**
   * Enterprise Manager Unique Identifier
   */
  "enterpriseManagerIdentifier": string;
  /**
   * Enterprise Manager Entity Name
   */
  "enterpriseManagerEntityName": string;
  /**
   * Enterprise Manager Entity Type
   */
  "enterpriseManagerEntityType": string;
  /**
   * Enterprise Manager Entity Unique Identifier
   */
  "enterpriseManagerEntityIdentifier": string;
  /**
   * Enterprise Manager Entity Display Name
   */
  "enterpriseManagerEntityDisplayName"?: string;
  /**
   * OPSI Enterprise Manager Bridge OCID
   */
  "enterpriseManagerBridgeId": string;

  "entitySource": string;
}

export namespace EmManagedExternalDatabaseInsight {
  export function getJsonObj(
    obj: EmManagedExternalDatabaseInsight,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseInsight.getJsonObj(obj) as EmManagedExternalDatabaseInsight)),
      ...{}
    };

    return jsonObj;
  }
  export const entitySource = "EM_MANAGED_EXTERNAL_DATABASE";
}
