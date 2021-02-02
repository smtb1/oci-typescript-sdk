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
 * Array of custom property IDs for which we have to associate the custom property to the type
 */
export interface TypeCustomPropertyDetails {
  /**
   * array of custom property Ids
   */
  "customPropertyIds"?: Array<string>;
}

export namespace TypeCustomPropertyDetails {
  export function getJsonObj(obj: TypeCustomPropertyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}