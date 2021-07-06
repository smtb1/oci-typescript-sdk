/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
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
 * The object used to update announcement email preferences.
 */
export interface UpdateAnnouncementsPreferencesDetails
  extends model.BaseCreateAnnouncementsPreferencesDetails {
  "type": string;
}

export namespace UpdateAnnouncementsPreferencesDetails {
  export function getJsonObj(
    obj: UpdateAnnouncementsPreferencesDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BaseCreateAnnouncementsPreferencesDetails.getJsonObj(
            obj
          ) as UpdateAnnouncementsPreferencesDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "UpdateAnnouncementsPreferencesDetails";
  export function getDeserializedJsonObj(
    obj: UpdateAnnouncementsPreferencesDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BaseCreateAnnouncementsPreferencesDetails.getDeserializedJsonObj(
            obj
          ) as UpdateAnnouncementsPreferencesDetails)),
      ...{}
    };

    return jsonObj;
  }
}
