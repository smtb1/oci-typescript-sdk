/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The Object Storage connection details.
 */
export interface ConnectionFromObjectStorage extends model.Connection {
  /**
   * The credential file content from a wallet for the data asset.
   */
  "credentialFileContent"?: string;
  /**
   * The OCI user OCID for the user to connect to.
   */
  "userId"?: string;
  /**
   * The fingeprint for the user.
   */
  "fingerPrint"?: string;
  /**
   * The pass phrase for the connection.
   */
  "passPhrase"?: string;

  "modelType": string;
}

export namespace ConnectionFromObjectStorage {
  export function getJsonObj(obj: ConnectionFromObjectStorage, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getJsonObj(obj) as ConnectionFromObjectStorage)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_OBJECT_STORAGE_CONNECTION";
}
