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

export interface InstanceConfigurationInstanceSourceViaImageDetails
  extends model.InstanceConfigurationInstanceSourceDetails {
  /**
   * The size of the boot volume in GBs. The minimum value is 50 GB and the maximum
   * value is 16384 GB (16TB).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "bootVolumeSizeInGBs"?: number;
  /**
   * The OCID of the image used to boot the instance.
   */
  "imageId"?: string;

  "sourceType": string;
}

export namespace InstanceConfigurationInstanceSourceViaImageDetails {
  export function getJsonObj(
    obj: InstanceConfigurationInstanceSourceViaImageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceConfigurationInstanceSourceDetails.getJsonObj(
            obj
          ) as InstanceConfigurationInstanceSourceViaImageDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "image";
  export function getDeserializedJsonObj(
    obj: InstanceConfigurationInstanceSourceViaImageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceConfigurationInstanceSourceDetails.getDeserializedJsonObj(
            obj
          ) as InstanceConfigurationInstanceSourceViaImageDetails)),
      ...{}
    };

    return jsonObj;
  }
}
