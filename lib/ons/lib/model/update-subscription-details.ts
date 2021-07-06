/**
 * Notifications API
 * Use the Notifications API to broadcast messages to distributed components by topic, using a publish-subscribe pattern.
For information about managing topics, subscriptions, and messages, see [Notifications Overview](/iaas/Content/Notification/Concepts/notificationoverview.htm).

 * OpenAPI spec version: 20181201
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
 * The configuration details for updating the subscription.
 *
 */
export interface UpdateSubscriptionDetails {
  /**
   * The delivery policy of the subscription. Stored as a JSON string.
   */
  "deliveryPolicy"?: model.DeliveryPolicy;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateSubscriptionDetails {
  export function getJsonObj(obj: UpdateSubscriptionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "deliveryPolicy": obj.deliveryPolicy
          ? model.DeliveryPolicy.getJsonObj(obj.deliveryPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateSubscriptionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "deliveryPolicy": obj.deliveryPolicy
          ? model.DeliveryPolicy.getDeserializedJsonObj(obj.deliveryPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
