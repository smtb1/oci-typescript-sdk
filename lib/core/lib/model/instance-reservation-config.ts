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
 * Data that defines the instance reservation configuration.
 *
 */
export interface InstanceReservationConfig {
  /**
   * The fault domain of this reservation configuration.
   * If a value is not supplied, this reservation configuration is applicable to all fault domains in the specified availability domain.
   * For more information, see [Capacity Reservations](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/reserve-capacity.htm).
   *
   */
  "faultDomain"?: string;
  /**
   * The shape to use when launching instances using compute capacity reservations. The shape determines the number of CPUs, the amount of memory,
   * and other resources allocated to the instance.
   * You can list all available shapes by calling {@link ListComputeCapacityReservationInstanceShapes}.
   *
   */
  "instanceShape": string;
  "instanceShapeConfig"?: model.InstanceReservationShapeConfigDetails;
  /**
   * The amount of capacity reserved in this configuration. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reservedCount": number;
  /**
   * The amount of capacity in use out of the total capacity reserved in this reservation configuration. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedCount": number;
}

export namespace InstanceReservationConfig {
  export function getJsonObj(obj: InstanceReservationConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "instanceShapeConfig": obj.instanceShapeConfig
          ? model.InstanceReservationShapeConfigDetails.getJsonObj(obj.instanceShapeConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
