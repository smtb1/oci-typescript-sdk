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
 * Summary of a folder tag.
 */
export interface FolderTagSummary {
  /**
   * The unique key of the parent folder.
   */
  "folderKey"?: string;
  /**
   * Unique tag key that is immutable.
   */
  "key": string;
  /**
   * The date and time the tag was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * Name of the tag that matches the term name.
   */
  "name"?: string;
  /**
   * URI to the tag instance in the API.
   */
  "uri"?: string;
  /**
   * Unique key of the related term.
   */
  "termKey"?: string;
  /**
   * Path of the related term.
   */
  "termPath"?: string;
  /**
   * Description of the related term.
   */
  "termDescription"?: string;
  /**
   * Unique id of the parent glossary of the term.
   */
  "glossaryKey"?: string;
  /**
   * State of the Tag.
   */
  "lifecycleState"?: model.LifecycleState;
}

export namespace FolderTagSummary {
  export function getJsonObj(obj: FolderTagSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FolderTagSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
