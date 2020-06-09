/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Error Information.
 */
export interface ErrorBody {
  /**
   * A short error code that defines the error, which is useful for programmatic parsing.
   */
  "code": string;
  /**
   * A human-readable error string.
   */
  "message": string;
}

export namespace ErrorBody {
  export function getJsonObj(obj: ErrorBody): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
