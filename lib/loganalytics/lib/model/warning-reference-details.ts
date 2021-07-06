/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * A list of LogAnalyticsWarning references.  Used as input to APIs which operate on a
 * list.  For example, the suppress warning API accepts a list of warning references
 * and will suppress all warnings in the input list.
 *
 */
export interface WarningReferenceDetails {
  /**
   * A list of LogAnalyticsWarning references.  Used as input to APIs which operate on a
   * list.  For example, the suppress warning API accepts a list of warning references
   * and will suppress all warnings in the input list.
   *
   */
  "warningReferences"?: Array<string>;
}

export namespace WarningReferenceDetails {
  export function getJsonObj(obj: WarningReferenceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WarningReferenceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
