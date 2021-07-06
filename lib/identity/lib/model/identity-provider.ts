/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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
* The resulting base object when you add an identity provider to your tenancy. A
* {@link Saml2IdentityProvider}
* is a specific type of `IdentityProvider` that supports the SAML 2.0 protocol. Each
* `IdentityProvider` object has its own OCID. For more information, see
* [Identity Providers and Federation](https://docs.cloud.oracle.com/Content/Identity/Concepts/federation.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access,
* see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string
* values using the API.
* 
*/
export interface IdentityProvider {
  /**
   * The OCID of the `IdentityProvider`.
   */
  "id": string;
  /**
   * The OCID of the tenancy containing the `IdentityProvider`.
   */
  "compartmentId": string;
  /**
   * The name you assign to the `IdentityProvider` during creation. The name
   * must be unique across all `IdentityProvider` objects in the tenancy and
   * cannot be changed. This is the name federated users see when choosing
   * which identity provider to use when signing in to the Oracle Cloud Infrastructure
   * Console.
   *
   */
  "name": string;
  /**
   * The description you assign to the `IdentityProvider` during creation. Does
   * not have to be unique, and it's changeable.
   *
   */
  "description": string;
  /**
    * The identity provider service or product.
* Supported identity providers are Oracle Identity Cloud Service (IDCS) and Microsoft
* Active Directory Federation Services (ADFS).
* <p>
Allowed values are:
* - `ADFS`
* - `IDCS`
* <p>
Example: `IDCS`
* 
    */
  "productType": string;
  /**
    * Date and time the `IdentityProvider` was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The current state. After creating an `IdentityProvider`, make sure its
   * `lifecycleState` changes from CREATING to ACTIVE before using it.
   *
   */
  "lifecycleState": IdentityProvider.LifecycleState;
  /**
   * The detailed status of INACTIVE lifecycleState. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inactiveStatus"?: number;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "protocol": string;
}

export namespace IdentityProvider {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IdentityProvider): object {
    const jsonObj = { ...obj, ...{} };

    if ("protocol" in obj && obj.protocol) {
      switch (obj.protocol) {
        case "SAML2":
          return model.Saml2IdentityProvider.getJsonObj(
            <model.Saml2IdentityProvider>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.protocol);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IdentityProvider): object {
    const jsonObj = { ...obj, ...{} };

    if ("protocol" in obj && obj.protocol) {
      switch (obj.protocol) {
        case "SAML2":
          return model.Saml2IdentityProvider.getDeserializedJsonObj(
            <model.Saml2IdentityProvider>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.protocol);
      }
    }
    return jsonObj;
  }
}
