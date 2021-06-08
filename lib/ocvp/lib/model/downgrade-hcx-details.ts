/**
 * Oracle Cloud VMware Solution API
 * Use this API to manage your [Oracle Cloud VMware Solution](/iaas/Content/VMware/Concepts/ocvsoverview.htm).

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
 * The HCX on-premise licenses to be reserved when downgrade from HCX Enterprise to HCX Advanced.
 */
export interface DowngradeHcxDetails {
  /**
   * The HCX on-premise licenses keys to be reserved when downgrade from HCX Enterprise to HCX Advanced.
   */
  "reservingHcxOnPremiseLicenseKeys": Array<string>;
}

export namespace DowngradeHcxDetails {
  export function getJsonObj(obj: DowngradeHcxDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}