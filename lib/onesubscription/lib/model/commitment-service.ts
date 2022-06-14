/**
 * OneSubscription APIs
 * OneSubscription APIs

 * OpenAPI spec version: 20190111
 * Contact: kuaskum_org_ww@oracle.com
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
 * Subscribed service commitment details
 *
 */
export interface CommitmentService {
  /**
   * Commitment start date
   *
   */
  "timeStart"?: Date;
  /**
   * Commitment end date
   *
   */
  "timeEnd"?: Date;
  /**
   * Commitment quantity
   *
   */
  "quantity"?: string;
  /**
   * Commitment available amount
   *
   */
  "availableAmount"?: string;
  /**
   * Commitment line net amount
   *
   */
  "lineNetAmount"?: string;
  /**
   * Funded Allocation line value
   *
   */
  "fundedAllocationValue"?: string;
}

export namespace CommitmentService {
  export function getJsonObj(obj: CommitmentService): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CommitmentService): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
