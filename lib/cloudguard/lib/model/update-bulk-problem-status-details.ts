/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
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
 * List of problem ids to be passed in to update the Problem status.
 */
export interface UpdateBulkProblemStatusDetails {
  /**
   * Action taken by user
   */
  "status": model.ProblemLifecycleDetail;
  /**
   * List of ProblemIds to be passed in to update the Problem status.
   */
  "problemIds": Array<string>;
  /**
   * User defined comment to be passed in to update the problem.
   */
  "comment"?: string;
}

export namespace UpdateBulkProblemStatusDetails {
  export function getJsonObj(obj: UpdateBulkProblemStatusDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateBulkProblemStatusDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
