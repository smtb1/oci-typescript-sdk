/**
 * Cloud Advisor API
 * APIs for managing Cloud Advisor. Cloud Advisor provides recommendations that help you maximize cost savings and improve the security posture of your tenancy.
 * OpenAPI spec version: 20200606
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
 * The request object for updating the enrollment status details.
 *
 */
export interface UpdateEnrollmentStatusDetails {
  /**
   * The Cloud Advisor enrollment status.
   */
  "status": model.OptimizerEnrollmentStatus;
}

export namespace UpdateEnrollmentStatusDetails {
  export function getJsonObj(obj: UpdateEnrollmentStatusDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateEnrollmentStatusDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
