/**
 * REST API for Zero Downtime Migration (Oracle Database Migration Service --ODMS-- as customer-facing service name)
 * Provides users the ability to perform Zero Downtime migration operations
 * OpenAPI spec version: 20200720
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
 * Connect Descriptor details.
 *
 */
export interface ConnectDescriptor {
  /**
   * Host of the connect descriptor.
   *
   */
  "host"?: string;
  /**
   * Port of the connect descriptor.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * Database service name.
   *
   */
  "databaseServiceName"?: string;
  /**
   * Connect string.
   *
   */
  "connectString"?: string;
}

export namespace ConnectDescriptor {
  export function getJsonObj(obj: ConnectDescriptor): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}