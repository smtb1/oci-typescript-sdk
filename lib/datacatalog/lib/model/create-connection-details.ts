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
 * Properties used in connection create operations.
 */
export interface CreateConnectionDetails {
  /**
   * A description of the connection.
   */
  "description"?: string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * The key of the object type. Type key's can be found via the '/types' endpoint.
   */
  "typeKey": string;
  /**
   * The list of customized properties along with the values for this object
   */
  "customPropertyMembers"?: Array<model.CustomPropertySetUsage>;
  /**
   * A map of maps that contains the properties which are specific to the connection type. Each connection type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * connections have required properties within the \"default\" category. To determine the set of optional and
   * required properties for a connection type, a query can be done on '/types?type=connection' that returns a
   * collection of all connection types. The appropriate connection type, which will include definitions of all
   * of it's properties, can be identified from this collection.
   * Example: `{\"properties\": { \"default\": { \"username\": \"user1\"}}}`
   *
   */
  "properties": { [key: string]: { [key: string]: string } };
  /**
   * A map of maps that contains the encrypted values for sensitive properties which are specific to the
   * connection type. Each connection type definition defines it's set of required and optional properties.
   * The map keys are category names and the values are maps of property name to property value. Every property is
   * contained inside of a category. Most connections have required properties within the \"default\" category.
   * To determine the set of optional and required properties for a connection type, a query can be done
   * on '/types?type=connection' that returns a collection of all connection types. The appropriate connection
   * type, which will include definitions of all of it's properties, can be identified from this collection.
   * Example: `{\"encProperties\": { \"default\": { \"password\": \"example-password\"}}}`
   *
   */
  "encProperties"?: { [key: string]: { [key: string]: string } };
  /**
   * Indicates whether this connection is the default connection. The first connection of a data asset defaults
   * to being the default, subsequent connections default to not being the default. If a default connection already
   * exists, then trying to create a connection as the default will fail. In this case the default connection would
   * need to be updated not to be the default and then the new connection can then be created as the default.
   *
   */
  "isDefault"?: boolean;
}

export namespace CreateConnectionDetails {
  export function getJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertySetUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertySetUsage.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
