/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
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
 * Permissions object for data assets.
 */
export interface DataAssetPermissionsSummary {
  /**
   * The unique key of the parent data asset.
   */
  "dataAssetKey"?: string;
  /**
   * An array of permissions.
   */
  "userPermissions"?: Array<string>;
}

export namespace DataAssetPermissionsSummary {
  export function getJsonObj(obj: DataAssetPermissionsSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataAssetPermissionsSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
