/**
 * NetworkLoadBalancer API
 * A description of the network load balancer API
 * OpenAPI spec version: 20200501
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
 * A load balancer IP address.
 */
export interface IpAddress {
  /**
    * An IP address.
* <p>
Example: `192.168.0.3`
* 
    */
  "ipAddress": string;
  /**
    * Whether the IP address is public or private.
* <p>
If \"true\", then the IP address is public and accessible from the internet.
* <p>
If \"false\", then the IP address is private and accessible only from within the associated virtual cloud network.
* 
    */
  "isPublic"?: boolean;
  "reservedIp"?: model.ReservedIP;
}

export namespace IpAddress {
  export function getJsonObj(obj: IpAddress): object {
    const jsonObj = {
      ...obj,
      ...{
        "reservedIp": obj.reservedIp ? model.ReservedIP.getJsonObj(obj.reservedIp) : undefined
      }
    };

    return jsonObj;
  }
}
