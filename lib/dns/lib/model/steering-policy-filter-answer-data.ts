/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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

export interface SteeringPolicyFilterAnswerData {
  /**
   * An expression that is used to select a set of answers that match a condition. For example, answers with matching pool properties.
   *
   */
  "answerCondition"?: string;
  /**
   * Keeps the answer only if the value is `true`.
   */
  "shouldKeep"?: boolean;
}

export namespace SteeringPolicyFilterAnswerData {
  export function getJsonObj(obj: SteeringPolicyFilterAnswerData): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SteeringPolicyFilterAnswerData): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
