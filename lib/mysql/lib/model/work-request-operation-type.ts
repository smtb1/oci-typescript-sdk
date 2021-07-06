/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Possible operation types.
 **/
export enum WorkRequestOperationType {
  CreateDbsystem = "CREATE_DBSYSTEM",
  UpdateDbsystem = "UPDATE_DBSYSTEM",
  DeleteDbsystem = "DELETE_DBSYSTEM",
  StartDbsystem = "START_DBSYSTEM",
  StopDbsystem = "STOP_DBSYSTEM",
  RestartDbsystem = "RESTART_DBSYSTEM",
  AddAnalyticsCluster = "ADD_ANALYTICS_CLUSTER",
  UpdateAnalyticsCluster = "UPDATE_ANALYTICS_CLUSTER",
  DeleteAnalyticsCluster = "DELETE_ANALYTICS_CLUSTER",
  StartAnalyticsCluster = "START_ANALYTICS_CLUSTER",
  StopAnalyticsCluster = "STOP_ANALYTICS_CLUSTER",
  RestartAnalyticsCluster = "RESTART_ANALYTICS_CLUSTER",
  GenerateAnalyticsClusterMemoryEstimate = "GENERATE_ANALYTICS_CLUSTER_MEMORY_ESTIMATE",
  AddHeatwaveCluster = "ADD_HEATWAVE_CLUSTER",
  UpdateHeatwaveCluster = "UPDATE_HEATWAVE_CLUSTER",
  DeleteHeatwaveCluster = "DELETE_HEATWAVE_CLUSTER",
  StartHeatwaveCluster = "START_HEATWAVE_CLUSTER",
  StopHeatwaveCluster = "STOP_HEATWAVE_CLUSTER",
  RestartHeatwaveCluster = "RESTART_HEATWAVE_CLUSTER",
  GenerateHeatwaveClusterMemoryEstimate = "GENERATE_HEATWAVE_CLUSTER_MEMORY_ESTIMATE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace WorkRequestOperationType {
  export function getJsonObj(obj: WorkRequestOperationType): WorkRequestOperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestOperationType): WorkRequestOperationType {
    return obj;
  }
}
