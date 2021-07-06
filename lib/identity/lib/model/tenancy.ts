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
* The root compartment that contains all of your organization's compartments and other
* Oracle Cloud Infrastructure cloud resources. When you sign up for Oracle Cloud Infrastructure,
* Oracle creates a tenancy for your company, which is a secure and isolated partition
* where you can create, organize, and administer your cloud resources.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access,
* see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface Tenancy {
  /**
   * The OCID of the tenancy.
   */
  "id"?: string;
  /**
   * The name of the tenancy.
   */
  "name"?: string;
  /**
   * The description of the tenancy.
   */
  "description"?: string;
  /**
    * The region key for the tenancy's home region. For the full list of supported regions, see
* [Regions and Availability Domains](https://docs.cloud.oracle.com/Content/General/Concepts/regions.htm).
* <p>
Example: `PHX`
* 
    */
  "homeRegionKey"?: string;
  /**
   * Url which refers to the UPI IDCS compatibility layer endpoint configured for this Tenant's home region.
   */
  "upiIdcsCompatibilityLayerEndpoint"?: string;
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
}

export namespace Tenancy {
  export function getJsonObj(obj: Tenancy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Tenancy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
