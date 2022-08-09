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
 * The policy that specifies the maintenance and upgrade preferences for an environment. For more information about the options, see [Understanding Environment Maintenance](https://docs.cloud.oracle.com/iaas/Content/fusion-applications/plan-environment-family.htm#about-env-maintenance).
 */
export interface MaintenancePolicy {
  /**
   * When \"ENABLED\", the Fusion environment is patched monthly. When \"DISABLED\", the Fusion environment is not patched monthly. This setting overrides the environment family setting. When not set, the environment follows the environment family policy.
   */
  "monthlyPatchingOverride"?: MaintenancePolicy.MonthlyPatchingOverride;
  /**
   * User choice to upgrade both test and prod pods at the same time. Overrides fusion environment families'.
   */
  "environmentMaintenanceOverride"?: MaintenancePolicy.EnvironmentMaintenanceOverride;
}

export namespace MaintenancePolicy {
  export enum MonthlyPatchingOverride {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    None = "NONE"
  }

  export enum EnvironmentMaintenanceOverride {
    Prod = "PROD",
    NonProd = "NON_PROD",
    None = "NONE"
  }

  export function getJsonObj(obj: MaintenancePolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MaintenancePolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}