/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * Parameters for GoldenGate Replicat processes.
 *
 */
export interface CreateReplicat {
  /**
   * Number of threads used to read trail files (valid for Parallel Replicat)
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "mapParallelism"?: number;
  /**
   * Defines the range in which the Replicat automatically adjusts its apply parallelism (valid for Parallel Replicat)
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minApplyParallelism"?: number;
  /**
   * Defines the range in which the Replicat automatically adjusts its apply parallelism (valid for Parallel Replicat)
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxApplyParallelism"?: number;
}

export namespace CreateReplicat {
  export function getJsonObj(obj: CreateReplicat): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateReplicat): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
