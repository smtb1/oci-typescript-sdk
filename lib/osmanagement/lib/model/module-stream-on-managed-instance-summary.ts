/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * Summary information pertaining to a module stream on a managed instance
 */
export interface ModuleStreamOnManagedInstanceSummary {
  /**
   * The name of the module that contains the stream.
   *
   */
  "moduleName": string;
  /**
   * The name of the stream.
   *
   */
  "streamName": string;
  /**
    * The status of the stream
* <p>
A stream with the \"ENABLED\" status can be used as a source for installing
* profiles.  Streams with this status are also \"ACTIVE\".
* <p>
A stream with the \"DISABLED\" status cannot be the source for installing
* profiles.  To install profiles and packages from this stream, it must be
* enabled.
* <p>
A stream with the \"ACTIVE\" status can be used as a source for installing
* profiles.  The packages that comprise the stream are also used when a
* matching package is installed directly.  In general, a stream can have
* this status if it is the default stream for the module and no stream has
* been explicitly enabled.
* 
    */
  "status": ModuleStreamOnManagedInstanceSummary.Status;
  /**
   * The set of profiles that the module stream contains.
   */
  "profiles"?: Array<model.ModuleStreamProfileOnManagedInstanceSummary>;
  /**
   * The OCID of the software source that provides this module stream.
   */
  "softwareSourceId"?: string;
  /**
   * The date and time of the last status change for this profile, as
   * described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339),
   * section 14.29.
   *
   */
  "timeModified"?: Date;
}

export namespace ModuleStreamOnManagedInstanceSummary {
  export enum Status {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Active = "ACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ModuleStreamOnManagedInstanceSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "profiles": obj.profiles
          ? obj.profiles.map(item => {
              return model.ModuleStreamProfileOnManagedInstanceSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModuleStreamOnManagedInstanceSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "profiles": obj.profiles
          ? obj.profiles.map(item => {
              return model.ModuleStreamProfileOnManagedInstanceSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}