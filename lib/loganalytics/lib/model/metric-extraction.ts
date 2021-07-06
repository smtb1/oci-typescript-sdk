/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Specify metric extraction for SAVED_SEARCH scheduled task execution
 * to post to OCI Monitoring.
 *
 */
export interface MetricExtraction {
  /**
   * The compartment OCID (/iaas/Content/General/Concepts/identifiers.htm) of the extracted metric.
   *
   */
  "compartmentId": string;
  /**
   * The namespace of the extracted metric.
   * A valid value starts with an alphabetical character and includes only
   * alphanumeric characters and underscores (_).
   *
   */
  "namespace": string;
  /**
   * The metric name of the extracted metric.
   * A valid value starts with an alphabetical character and includes only
   * alphanumeric characters, periods (.), underscores (_), hyphens (-), and dollar signs ($).
   *
   */
  "metricName": string;
  /**
   * The resourceGroup of the extracted metric.
   * A valid value starts with an alphabetical character and includes only
   * alphanumeric characters, periods (.), underscores (_), hyphens (-), and dollar signs ($).
   *
   */
  "resourceGroup"?: string;
}

export namespace MetricExtraction {
  export function getJsonObj(obj: MetricExtraction): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MetricExtraction): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
