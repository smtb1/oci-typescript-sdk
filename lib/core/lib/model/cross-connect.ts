/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
* For use with Oracle Cloud Infrastructure FastConnect. A cross-connect represents a
* physical connection between an existing network and Oracle. Customers who are colocated
* with Oracle in a FastConnect location create and use cross-connects. For more
* information, see [FastConnect Overview](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/fastconnect.htm).
* <p>
Oracle recommends you create each cross-connect in a
* {@link CrossConnectGroup} so you can use link aggregation
* with the connection.
* <p>
**Note:** If you're a provider who is setting up a physical connection to Oracle so customers
* can use FastConnect over the connection, be aware that your connection is modeled the
* same way as a colocated customer's (with `CrossConnect` and `CrossConnectGroup` objects, and so on).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface CrossConnect {
  /**
   * The OCID of the compartment containing the cross-connect group.
   */
  "compartmentId"?: string;
  /**
   * The OCID of the cross-connect group this cross-connect belongs to (if any).
   *
   */
  "crossConnectGroupId"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The cross-connect's Oracle ID (OCID).
   */
  "id"?: string;
  /**
   * The cross-connect's current state.
   */
  "lifecycleState"?: CrossConnect.LifecycleState;
  /**
   * The name of the FastConnect location where this cross-connect is installed.
   *
   */
  "locationName"?: string;
  /**
   * A string identifying the meet-me room port for this cross-connect.
   */
  "portName"?: string;
  /**
    * The port speed for this cross-connect.
* <p>
Example: `10 Gbps`
* 
    */
  "portSpeedShapeName"?: string;
  /**
   * A reference name or identifier for the physical fiber connection that this cross-connect
   * uses.
   *
   */
  "customerReferenceName"?: string;
  /**
    * The date and time the cross-connect was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
}

export namespace CrossConnect {
  export enum LifecycleState {
    PendingCustomer = "PENDING_CUSTOMER",
    Provisioning = "PROVISIONING",
    Provisioned = "PROVISIONED",
    Inactive = "INACTIVE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CrossConnect): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
