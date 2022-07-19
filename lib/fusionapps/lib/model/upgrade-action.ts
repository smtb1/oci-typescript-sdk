/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * Quarterly upgrade details.
 */
export interface UpgradeAction extends model.Action {
  /**
   * name of the repo
   */
  "version"?: string;
  /**
   * month qualifier
   */
  "qualifier"?: string;

  "actionType": string;
}

export namespace UpgradeAction {
  export function getJsonObj(obj: UpgradeAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Action.getJsonObj(obj) as UpgradeAction)),
      ...{}
    };

    return jsonObj;
  }
  export const actionType = "QUARTERLY_UPGRADE";
  export function getDeserializedJsonObj(obj: UpgradeAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Action.getDeserializedJsonObj(obj) as UpgradeAction)),
      ...{}
    };

    return jsonObj;
  }
}
