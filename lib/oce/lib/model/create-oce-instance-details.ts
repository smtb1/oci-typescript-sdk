/**
 * Oracle Content and Experience API
 * Oracle Content and Experience is a cloud-based content hub to drive omni-channel content management and accelerate experience delivery
 * OpenAPI spec version: 20190912
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
 * The information about new OceInstance.
 */
export interface CreateOceInstanceDetails {
  /**
   * OceInstance description
   */
  "description"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * OceInstance Name
   */
  "name": string;
  /**
   * Tenancy Identifier
   */
  "tenancyId": string;
  /**
   * Identity Cloud Service access token identifying a stripe and service administrator user
   */
  "idcsAccessToken": string;
  "identityStripe"?: model.IdentityStripeDetails;
  /**
   * Tenancy Name
   */
  "tenancyName": string;
  /**
   * Instance type based on its usage
   */
  "instanceUsageType"?: CreateOceInstanceDetails.InstanceUsageType;
  /**
   * Object Storage Namespace of Tenancy
   */
  "objectStorageNamespace": string;
  /**
   * Admin Email for Notification
   */
  "adminEmail": string;
  /**
   * Upgrade schedule type representing service to be upgraded immediately whenever latest version is released
   * or delay upgrade of the service to previous released version
   *
   */
  "upgradeSchedule"?: string;
  /**
   * Web Application Firewall(WAF) primary domain
   */
  "wafPrimaryDomain"?: string;
  /**
   * Flag indicating whether the instance access is private or public
   */
  "instanceAccessType"?: CreateOceInstanceDetails.InstanceAccessType;
  /**
   * Flag indicating whether the instance license is new cloud or bring your own license
   */
  "instanceLicenseType"?: model.LicenseType;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
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
}

export namespace CreateOceInstanceDetails {
  export enum InstanceUsageType {
    Primary = "PRIMARY",
    Nonprimary = "NONPRIMARY"
  }

  export enum InstanceAccessType {
    Public = "PUBLIC",
    Private = "PRIVATE"
  }

  export function getJsonObj(obj: CreateOceInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "identityStripe": obj.identityStripe
          ? model.IdentityStripeDetails.getJsonObj(obj.identityStripe)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateOceInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "identityStripe": obj.identityStripe
          ? model.IdentityStripeDetails.getDeserializedJsonObj(obj.identityStripe)
          : undefined
      }
    };

    return jsonObj;
  }
}
