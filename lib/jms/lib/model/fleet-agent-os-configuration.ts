/**
 * Java Management Service Query API
 * API for the Java Management Service. Use this API to view and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Management Agent Configuration for list of include/exclude file system paths (specific to operating system).
 *
 */
export interface FleetAgentOsConfiguration {
  /**
   * An array of file system paths (environment variables supported).
   *
   */
  "includePaths": Array<string>;
  /**
   * An array of file system paths (environment variables supported).
   *
   */
  "excludePaths": Array<string>;
}

export namespace FleetAgentOsConfiguration {
  export function getJsonObj(obj: FleetAgentOsConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FleetAgentOsConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
