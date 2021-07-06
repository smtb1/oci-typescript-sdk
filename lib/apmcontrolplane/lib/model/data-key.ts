/**
 * Application Performance Monitoring (APM) Control Plane API
 * Provide a set of APIs for tenant to perform operations like create, update, delete and list APM domains, and also
work request APIs to monitor progress of these operations.

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
 * The information about a Data Key, including the Data Key's value.
 */
export interface DataKey {
  /**
   * Value of the Data Key.
   */
  "value"?: string;
  /**
   * Name of the Data Key. The name uniquely identifies a Data Key within an APM domain.
   *
   */
  "name": string;
  /**
   * Type of the Data Key.
   */
  "type": model.DataKeyTypes;
}

export namespace DataKey {
  export function getJsonObj(obj: DataKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
