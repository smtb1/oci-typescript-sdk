/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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
 * An OCI DNS resolver VNIC endpoint.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface ResolverVnicEndpoint extends model.ResolverEndpoint {
  /**
   * The OCID of a subnet. Must be part of the VCN that the resolver is attached to.
   */
  "subnetId"?: string;
  /**
   * An array of NSG OCIDs for the resolver endpoint.
   *
   */
  "nsgIds"?: Array<string>;

  "endpointType": string;
}

export namespace ResolverVnicEndpoint {
  export function getJsonObj(obj: ResolverVnicEndpoint, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ResolverEndpoint.getJsonObj(obj) as ResolverVnicEndpoint)),
      ...{}
    };

    return jsonObj;
  }
  export const endpointType = "VNIC";
  export function getDeserializedJsonObj(
    obj: ResolverVnicEndpoint,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResolverEndpoint.getDeserializedJsonObj(obj) as ResolverVnicEndpoint)),
      ...{}
    };

    return jsonObj;
  }
}
