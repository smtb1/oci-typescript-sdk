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
 * Type of recommendation.
 * - LINK_GLOSSARY_TERM : Create a tag linking the source object to a glossary term.
 *
 **/
export enum RecommendationType {
  LinkGlossaryTerm = "LINK_GLOSSARY_TERM",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace RecommendationType {
  export function getJsonObj(obj: RecommendationType): RecommendationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: RecommendationType): RecommendationType {
    return obj;
  }
}
