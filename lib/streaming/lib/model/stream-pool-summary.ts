/**
 * Streaming Service API
 * The API for the Streaming Service.
 * OpenAPI spec version: 20180418
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
 * The summary representation of a stream pool.
 */
export interface StreamPoolSummary {
  /**
   * The OCID of the stream pool.
   */
  "id": string;
  /**
   * Compartment OCID that the pool belongs to.
   */
  "compartmentId": string;
  /**
   * The name of the stream pool.
   */
  "name": string;
  /**
   * The current state of the stream pool.
   */
  "lifecycleState": StreamPoolSummary.LifecycleState;
  /**
    * The date and time the stream pool was created, expressed in in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: `2018-04-20T00:00:07.405Z`
* 
    */
  "timeCreated": Date;
  /**
   * True if the stream pool is private, false otherwise.
   * The associated endpoint and subnetId of a private stream pool can be retrieved through the {@link #getStreamPool(GetStreamPoolRequest) getStreamPool} API.
   *
   */
  "isPrivate"?: boolean;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair that is applied with no predefined name, type, or namespace. Exists for cross-compatibility only.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace StreamPoolSummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: StreamPoolSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StreamPoolSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
