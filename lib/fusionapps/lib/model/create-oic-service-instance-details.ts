/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about new Integration Cloud instance being provisioned.
 */
export interface CreateOicServiceInstanceDetails extends model.CreateServiceInstanceDetails {
  /**
   * Number of 5K message packs per hour Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "messagePacks"?: number;
  /**
   * The   Oracle Integration edition
   */
  "edition"?: CreateOicServiceInstanceDetails.Edition;

  "serviceInstanceType": string;
}

export namespace CreateOicServiceInstanceDetails {
  export enum Edition {
    Standard = "STANDARD",
    Enterprise = "ENTERPRISE"
  }

  export function getJsonObj(
    obj: CreateOicServiceInstanceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateServiceInstanceDetails.getJsonObj(obj) as CreateOicServiceInstanceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const serviceInstanceType = "INTEGRATION_CLOUD";
  export function getDeserializedJsonObj(
    obj: CreateOicServiceInstanceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateServiceInstanceDetails.getDeserializedJsonObj(
            obj
          ) as CreateOicServiceInstanceDetails)),
      ...{}
    };

    return jsonObj;
  }
}