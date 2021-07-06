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
* The Flex Components for a DB system. The Flex Component determines resources to allocate to the DB system -  CPU cores, memory and storage for Flex shapes.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator.
* If you're an administrator who needs to write policies to give users access,
* see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface FlexComponentSummary {
  /**
   * The name of the Flex Component used for the DB system.
   */
  "name": string;
  /**
   * The minimum number of CPU cores that can be enabled on the DB Server for this Flex Component. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minimumCoreCount"?: number;
  /**
   * The maximum number of CPU cores that can ben enabled on the DB Server for this Flex Component. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableCoreCount"?: number;
  /**
   * The maximum  storage that can be enabled on the Storage Server for this Flex Component. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableDbStorageInGBs"?: number;
}

export namespace FlexComponentSummary {
  export function getJsonObj(obj: FlexComponentSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FlexComponentSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
