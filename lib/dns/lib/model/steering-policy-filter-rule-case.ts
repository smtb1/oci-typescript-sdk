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

export interface SteeringPolicyFilterRuleCase {
  /**
   * An expression that uses conditions at the time of a DNS query to indicate
   * whether a case matches. Conditions may include the geographical location, IP
   * subnet, or ASN the DNS query originated. **Example:** If you have an
   * office that uses the subnet `192.0.2.0/24` you could use a `caseCondition`
   * expression `query.client.subnet in ('192.0.2.0/24')` to define a case that
   * matches queries from that office.
   *
   */
  "caseCondition"?: string;
  /**
   * An array of `SteeringPolicyFilterAnswerData` objects.
   */
  "answerData"?: Array<model.SteeringPolicyFilterAnswerData>;
}

export namespace SteeringPolicyFilterRuleCase {
  export function getJsonObj(obj: SteeringPolicyFilterRuleCase): object {
    const jsonObj = {
      ...obj,
      ...{
        "answerData": obj.answerData
          ? obj.answerData.map(item => {
              return model.SteeringPolicyFilterAnswerData.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SteeringPolicyFilterRuleCase): object {
    const jsonObj = {
      ...obj,
      ...{
        "answerData": obj.answerData
          ? obj.answerData.map(item => {
              return model.SteeringPolicyFilterAnswerData.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
