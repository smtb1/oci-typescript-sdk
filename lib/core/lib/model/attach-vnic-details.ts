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

export interface AttachVnicDetails {
  "createVnicDetails": model.CreateVnicDetails;
  /**
   * A user-friendly name for the attachment. Does not have to be unique, and it cannot be changed.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The OCID of the instance.
   */
  "instanceId": string;
  /**
   * Which physical network interface card (NIC) the VNIC will use. Defaults to 0.
   * Certain bare metal instance shapes have two active physical NICs (0 and 1). If
   * you add a secondary VNIC to one of these instances, you can specify which NIC
   * the VNIC will use. For more information, see
   * [Virtual Network Interface Cards (VNICs)](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingVNICs.htm).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nicIndex"?: number;
}

export namespace AttachVnicDetails {
  export function getJsonObj(obj: AttachVnicDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "createVnicDetails": obj.createVnicDetails
          ? model.CreateVnicDetails.getJsonObj(obj.createVnicDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AttachVnicDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "createVnicDetails": obj.createVnicDetails
          ? model.CreateVnicDetails.getDeserializedJsonObj(obj.createVnicDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
