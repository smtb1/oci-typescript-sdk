/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

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
 * a subscription summary for a listing resource version.
 */
export interface AppCatalogSubscriptionSummary {
  /**
   * Name of the publisher who published this listing.
   */
  "publisherName"?: string;
  /**
   * The ocid of the listing resource.
   */
  "listingId"?: string;
  /**
   * Listing resource version.
   */
  "listingResourceVersion"?: string;
  /**
   * Listing resource id.
   */
  "listingResourceId"?: string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The short summary to the listing.
   */
  "summary"?: string;
  /**
   * The compartmentID of the subscription.
   */
  "compartmentId"?: string;
  /**
   * Date and time at which the subscription was created, in [RFC3339](https://tools.ietf.org/html/rfc3339) format.
   * Example: `2018-03-20T12:32:53.532Z`
   *
   */
  "timeCreated"?: Date;
}

export namespace AppCatalogSubscriptionSummary {
  export function getJsonObj(obj: AppCatalogSubscriptionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppCatalogSubscriptionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
