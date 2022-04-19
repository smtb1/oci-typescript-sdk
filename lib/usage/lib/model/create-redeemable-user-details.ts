/**
 * Usage Proxy API
 * Use the Usage Proxy API to list Oracle Support Rewards, view related detailed usage information, and manage users who redeem rewards. For more information, see [Oracle Support Rewards Overview](/iaas/Content/Billing/Concepts/supportrewardsoverview.htm).
 * OpenAPI spec version: 20190111
 *
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
 * A list of email IDs to be added to the list of users that can redeem rewards.
 */
export interface CreateRedeemableUserDetails {
  /**
   * The list of email IDs to be added to the list of users that can redeem rewards.
   */
  "items"?: Array<model.RedeemableUser>;
}

export namespace CreateRedeemableUserDetails {
  export function getJsonObj(obj: CreateRedeemableUserDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.RedeemableUser.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateRedeemableUserDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.RedeemableUser.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
