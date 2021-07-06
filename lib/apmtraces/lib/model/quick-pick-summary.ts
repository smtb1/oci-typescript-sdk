/**
 * Apm Traces API
 * API for APM Trace service. Use this API to query the Traces and associated Spans.

 * OpenAPI spec version: 20200630
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
 * Summary of quick pick query objects that contains the quick pick queries.
 *
 */
export interface QuickPickSummary {
  /**
   * Quick pick name for the query.
   *
   */
  "quickPickName": string;
  /**
   * Query for the quick pick.
   *
   */
  "quickPickQuery": string;
}

export namespace QuickPickSummary {
  export function getJsonObj(obj: QuickPickSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: QuickPickSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
