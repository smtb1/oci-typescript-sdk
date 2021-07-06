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
 * An object that represents one or multiple Oracle services that you can enable for a
 * {@link ServiceGateway}. In the User Guide topic
 * [Access to Oracle Services: Service Gateway](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/servicegateway.htm), the
 * term *service CIDR label* is used to refer to the string that represents the regional public
 * IP address ranges of the Oracle service or services covered by a given `Service` object. That
 * unique string is the value of the `Service` object's `cidrBlock` attribute.
 *
 */
export interface Service {
  /**
    * A string that represents the regional public IP address ranges for the Oracle service or
* services covered by this `Service` object. Also known as the `Service` object's *service
* CIDR label*.
* <p>
When you set up a route rule to route traffic to the service gateway, use this value as the
* rule's destination. See {@link RouteTable}. Also, when you set up
* a security list rule to cover traffic with the service gateway, use the `cidrBlock` value
* as the rule's destination (for an egress rule) or the source (for an ingress rule).
* See {@link SecurityList}.
* <p>
Example: `oci-phx-objectstorage`
* 
    */
  "cidrBlock": string;
  /**
    * Description of the Oracle service or services covered by this `Service` object.
* <p>
Example: `OCI PHX Object Storage`
* 
    */
  "description": string;
  /**
   * The `Service` object's [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "id": string;
  /**
    * Name of the `Service` object. This name can change and is not guaranteed to be unique.
* <p>
Example: `OCI PHX Object Storage`
* 
    */
  "name": string;
}

export namespace Service {
  export function getJsonObj(obj: Service): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Service): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
