/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
 *
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
 * A private network reverse connection creates a connection from service to customer subnet over a private network.
 */
export interface CatalogPrivateEndpointSummary {
  /**
   * Unique identifier that is immutable
   */
  "id": string;
  /**
   * Subnet Identifier
   */
  "subnetId": string;
  /**
   * List of DNS zones to be used by the data assets to be harvested.
   * Example: custpvtsubnet.oraclevcn.com for data asset: db.custpvtsubnet.oraclevcn.com
   *
   */
  "dnsZones": Array<string>;
  /**
   * Identifier of the compartment this private endpoint belongs to
   */
  "compartmentId": string;
  /**
   * The time the private endpoint was created. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the private endpoint was updated. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * Mutable name of the Private Reverse Connection Endpoint
   */
  "displayName"?: string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in 'Failed' state.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The current state of the private endpoint resource.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The list of catalogs using the private reverse connection endpoint
   */
  "attachedCatalogs"?: Array<string>;
}

export namespace CatalogPrivateEndpointSummary {
  export function getJsonObj(obj: CatalogPrivateEndpointSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
