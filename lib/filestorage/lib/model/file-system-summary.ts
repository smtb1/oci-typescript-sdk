/**
 * File Storage API
 * API for the File Storage service. Use this API to manage file systems, mount targets, and snapshots. For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Summary information for a file system.
 *
 */
export interface FileSystemSummary {
  /**
    * The availability domain the file system is in. May be unset
* as a blank or NULL value.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
   * The number of bytes consumed by the file system, including
   * any snapshots. This number reflects the metered size of the file
   * system and is updated asynchronously with respect to
   * updates to the file system.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "meteredBytes": number;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that contains the file system.
   */
  "compartmentId": string;
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: `My file system`
* 
    */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the file system.
   */
  "id": string;
  /**
   * The current state of the file system.
   */
  "lifecycleState": FileSystemSummary.LifecycleState;
  /**
    * The date and time the file system was created, expressed
* in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair
   *  with no predefined name, type, or namespace.
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
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the KMS key used to encrypt the encryption keys associated with this file system.
   *
   */
  "kmsKeyId"?: string;
  "sourceDetails"?: model.SourceDetails;
  /**
   * Specifies whether the file system has been cloned.
   * See [Cloning a File System](https://docs.cloud.oracle.com/iaas/Content/File/Tasks/cloningafilesystem.htm).
   *
   */
  "isCloneParent"?: boolean;
  /**
   * Specifies whether the data has finished copying from the source to the clone.
   * Hydration can take up to several hours to complete depending on the size of the source.
   * The source and clone remain available during hydration, but there may be some performance impact.
   * See [Cloning a File System](https://docs.cloud.oracle.com/iaas/Content/File/Tasks/cloningafilesystem.htm#hydration).
   *
   */
  "isHydrated"?: boolean;
  /**
   * Additional information about the current 'lifecycleState'.
   */
  "lifecycleDetails"?: string;
}

export namespace FileSystemSummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: FileSystemSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.SourceDetails.getJsonObj(obj.sourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FileSystemSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.SourceDetails.getDeserializedJsonObj(obj.sourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
