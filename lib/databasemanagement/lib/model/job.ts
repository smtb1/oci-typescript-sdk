/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details of the job.
 */
export interface Job {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the job.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which the job resides.
   */
  "compartmentId": string;
  /**
   * The display name of the job.
   */
  "name": string;
  /**
   * The description of the job.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database Group where the job has to be executed.
   */
  "managedDatabaseGroupId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database where the job has to be executed.
   */
  "managedDatabaseId"?: string;
  /**
   * The details of the Managed Databases where the job has to be executed.
   */
  "managedDatabasesDetails"?: Array<model.JobDatabase>;
  /**
   * The subtype of the Oracle Database where the job has to be executed. Applicable only when managedDatabaseGroupId is provided.
   */
  "databaseSubType"?: model.DatabaseSubType;
  /**
   * The schedule type of the job.
   */
  "scheduleType": Job.ScheduleType;
  /**
   * The lifecycle state of the job.
   */
  "lifecycleState": Job.LifecycleState;
  /**
   * The job timeout duration, which is expressed like \"1h 10m 15s\".
   */
  "timeout"?: string;
  "resultLocation"?: model.ObjectStorageJobExecutionResultLocation;
  /**
   * The error message that is returned if the job submission fails. Null is returned in all other scenarios.
   */
  "submissionErrorMessage"?: string;
  /**
   * The date and time when the job was created.
   */
  "timeCreated": Date;
  /**
   * The date and time when the job was last updated.
   */
  "timeUpdated": Date;

  "jobType": string;
}

export namespace Job {
  export enum ScheduleType {
    Immediate = "IMMEDIATE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Job): object {
    const jsonObj = {
      ...obj,
      ...{
        "managedDatabasesDetails": obj.managedDatabasesDetails
          ? obj.managedDatabasesDetails.map(item => {
              return model.JobDatabase.getJsonObj(item);
            })
          : undefined,

        "resultLocation": obj.resultLocation
          ? model.JobExecutionResultLocation.getJsonObj(obj.resultLocation)
          : undefined
      }
    };

    if ("jobType" in obj && obj.jobType) {
      switch (obj.jobType) {
        case "SQL":
          return model.SqlJob.getJsonObj(<model.SqlJob>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.jobType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Job): object {
    const jsonObj = {
      ...obj,
      ...{
        "managedDatabasesDetails": obj.managedDatabasesDetails
          ? obj.managedDatabasesDetails.map(item => {
              return model.JobDatabase.getDeserializedJsonObj(item);
            })
          : undefined,

        "resultLocation": obj.resultLocation
          ? model.JobExecutionResultLocation.getDeserializedJsonObj(obj.resultLocation)
          : undefined
      }
    };

    if ("jobType" in obj && obj.jobType) {
      switch (obj.jobType) {
        case "SQL":
          return model.SqlJob.getDeserializedJsonObj(<model.SqlJob>(<object>jsonObj), true);
        default:
          throw Error("Unknown value for: " + obj.jobType);
      }
    }
    return jsonObj;
  }
}
