/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
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
 * The information required to update a rover node's set key details.
 */
export interface RoverNodeActionSetKeyDetails {
  /**
   * The public key of the resource principal
   */
  "publicKey"?: string;
}

export namespace RoverNodeActionSetKeyDetails {
  export function getJsonObj(obj: RoverNodeActionSetKeyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RoverNodeActionSetKeyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
