/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
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
 * Update cloud guard configuration details for a tenancy.
 */
export interface UpdateConfigurationDetails {
  /**
   * The reporting region value
   */
  "reportingRegion": string;
  /**
   * Status of Cloud Guard Tenant
   */
  "status": model.CloudGuardStatus;
  /**
   * Identifies if Oracle managed resources will be created by customers.
   * If no value is specified false is the default.
   *
   */
  "selfManageResources"?: boolean;
}

export namespace UpdateConfigurationDetails {
  export function getJsonObj(obj: UpdateConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
