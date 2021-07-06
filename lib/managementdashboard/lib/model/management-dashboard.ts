/**
 * ManagementDashboard API
 * API for the Management Dashboard micro-service. Use this API for dashboard and saved search metadata preservation and to perform  tasks such as creating a dashboard, creating a saved search, and obtaining a list of dashboards and saved searches in a compartment.
    

 * OpenAPI spec version: 20200901
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
 * Properties of a dashboard, including dashboard ID.
 */
export interface ManagementDashboard {
  /**
   * ID of the dashboard.  Same as id.
   */
  "dashboardId": string;
  /**
   * ID of the dashboard.  Same as dashboardId.
   */
  "id": string;
  /**
   * ID of the service (for example, log-analytics) that owns the dashboard. Each service has a unique ID.
   */
  "providerId": string;
  /**
   * Name of the service (for example, Logging Analytics) that owns the dashboard.
   */
  "providerName": string;
  /**
   * Version of the service that owns the dashboard.
   */
  "providerVersion": string;
  /**
   * Array of dashboard tiles.
   */
  "tiles": Array<model.ManagementDashboardTileDetails>;
  /**
   * Display name of the dashboard.
   */
  "displayName": string;
  /**
   * Description of the dashboard.
   */
  "description": string;
  /**
   * OCID of the compartment in which the dashboard resides.
   */
  "compartmentId": string;
  /**
   * Determines whether the dashboard is an Out-of-the-Box (OOB) dashboard. Note that OOB dashboards are only provided by Oracle and cannot be modified.
   */
  "isOobDashboard": boolean;
  /**
   * Determines whether the dashboard will be displayed in Dashboard Home.
   */
  "isShowInHome": boolean;
  /**
   * User who created the dashboard.
   */
  "createdBy": string;
  /**
   * Date and time the dashboard was created.
   */
  "timeCreated": Date;
  /**
   * User who updated the dashboard.
   */
  "updatedBy": string;
  /**
   * Date and time the dashboard was updated.
   */
  "timeUpdated": Date;
  /**
   * Version of the metadata.
   */
  "metadataVersion": string;
  /**
   * Determines whether the description of the dashboard is displayed.
   */
  "isShowDescription": boolean;
  /**
   * Screen image of the dashboard.
   */
  "screenImage": string;
  /**
   * JSON that contains internationalization options.
   */
  "nls": any;
  /**
   * JSON that contains user interface options.
   */
  "uiConfig": any;
  /**
   * Array of JSON that contain data source options.
   */
  "dataConfig": Array<any>;
  /**
   * Type of dashboard. NORMAL denotes a single dashboard and SET denotes a dashboard set.
   */
  "type": string;
  /**
   * Determines whether the dashboard is set as favorite.
   */
  "isFavorite": boolean;
  /**
   * Array of saved searches in the dashboard.
   */
  "savedSearches": Array<model.ManagementSavedSearch>;
  /**
   * State of dashboard.
   */
  "lifecycleState": model.LifecycleStates;
  /**
   * Defines parameters for the dashboard.
   */
  "parametersConfig"?: Array<any>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ManagementDashboard {
  export function getJsonObj(obj: ManagementDashboard): object {
    const jsonObj = {
      ...obj,
      ...{
        "tiles": obj.tiles
          ? obj.tiles.map(item => {
              return model.ManagementDashboardTileDetails.getJsonObj(item);
            })
          : undefined,

        "savedSearches": obj.savedSearches
          ? obj.savedSearches.map(item => {
              return model.ManagementSavedSearch.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagementDashboard): object {
    const jsonObj = {
      ...obj,
      ...{
        "tiles": obj.tiles
          ? obj.tiles.map(item => {
              return model.ManagementDashboardTileDetails.getDeserializedJsonObj(item);
            })
          : undefined,

        "savedSearches": obj.savedSearches
          ? obj.savedSearches.map(item => {
              return model.ManagementSavedSearch.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
