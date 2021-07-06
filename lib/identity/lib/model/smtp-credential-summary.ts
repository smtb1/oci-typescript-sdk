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
 * As the name suggests, an `SmtpCredentialSummary` object contains information about an `SmtpCredential`.
 * The SMTP credential is used for SMTP authentication with
 * the [Email Delivery Service](https://docs.cloud.oracle.com/Content/Email/Concepts/overview.htm).
 *
 */
export interface SmtpCredentialSummary {
  /**
   * The SMTP user name.
   *
   */
  "username"?: string;
  /**
   * The OCID of the SMTP credential.
   */
  "id"?: string;
  /**
   * The OCID of the user the SMTP credential belongs to.
   */
  "userId"?: string;
  /**
   * The description you assign to the SMTP credential. Does not have to be unique, and it's changeable.
   */
  "description"?: string;
  /**
    * Date and time the `SmtpCredential` object was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
    * Date and time when this credential will expire, in the format defined by RFC3339.
* Null if it never expires.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeExpires"?: Date;
  /**
   * The credential's current state. After creating a SMTP credential, make sure its `lifecycleState` changes from
   * CREATING to ACTIVE before using it.
   *
   */
  "lifecycleState"?: SmtpCredentialSummary.LifecycleState;
  /**
   * The detailed status of INACTIVE lifecycleState. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inactiveStatus"?: number;
}

export namespace SmtpCredentialSummary {
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

  export function getJsonObj(obj: SmtpCredentialSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SmtpCredentialSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
