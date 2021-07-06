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
 * Full data catalog type definition. Fully defines a type of the data catalog. All types are statically defined
 * in the system and are immutable. It isn't possible to create new types or update existing types via the API.
 *
 */
export interface Type {
  /**
   * Unique type key that is immutable.
   */
  "key": string;
  /**
   * The immutable name of the type.
   */
  "name"?: string;
  /**
   * Detailed description of the type.
   */
  "description"?: string;
  /**
   * The data catalog's OCID.
   */
  "catalogId"?: string;
  /**
   * A map of arrays which defines the type specific properties, both required and optional. The map keys are
   * category names and the values are arrays contiaing all property details. Every property is contained inside
   * of a category. Most types have required properties within the \"default\" category.
   * Example:
   * `{
   *    \"properties\": {
   *      \"default\": {
   *        \"attributes:\": [
   *          {
   *            \"name\": \"host\",
   *            \"type\": \"string\",
   *            \"isRequired\": true,
   *            \"isUpdatable\": false
   *          },
   *          ...
   *        ]
   *      }
   *    }
   *  }`
   *
   */
  "properties"?: { [key: string]: Array<model.PropertyDefinition> };
  /**
   * The current state of the type.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Indicates whether the type is internal, making it unavailable for use by metadata elements.
   */
  "isInternal"?: boolean;
  /**
   * Indicates whether the type can be used for tagging metadata elements.
   */
  "isTag"?: boolean;
  /**
   * Indicates whether the type is approved for use as a classifying object.
   */
  "isApproved"?: boolean;
  /**
   * Indicates the category this type belongs to. For instance, data assets, connections.
   */
  "typeCategory"?: string;
  /**
   * Mapping type equivalence in the external system.
   */
  "externalTypeName"?: string;
  /**
   * URI to the type instance in the API.
   */
  "uri"?: string;
  /**
   * Custom properties associated with this Type.
   */
  "customProperties"?: Array<model.CustomPropertySummary>;
}

export namespace Type {
  export function getJsonObj(obj: Type): object {
    const jsonObj = {
      ...obj,
      ...{
        "customProperties": obj.customProperties
          ? obj.customProperties.map(item => {
              return model.CustomPropertySummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Type): object {
    const jsonObj = {
      ...obj,
      ...{
        "customProperties": obj.customProperties
          ? obj.customProperties.map(item => {
              return model.CustomPropertySummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
