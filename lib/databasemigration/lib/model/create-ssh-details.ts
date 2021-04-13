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
 * Details of the ssh key that will be used. Required for source database Manual and UserManagerOci connection types.
 * Not required for source container database connections.
 *
 */
export interface CreateSshDetails {
  /**
   * Name of the host the sshkey is valid for.
   *
   */
  "host": string;
  /**
   * Private ssh key string.
   *
   */
  "sshkey": string;
  /**
   * SSH user
   *
   */
  "user": string;
  /**
   * Sudo location
   *
   */
  "sudoLocation"?: string;
}

export namespace CreateSshDetails {
  export function getJsonObj(obj: CreateSshDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
