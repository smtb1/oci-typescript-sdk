/**
 * Big Data Service API
 * API for the Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service
build on Hadoop, Spark and Data Science distribution, which can be fully integrated with existing enterprise
data in Oracle Database and Oracle Applications..

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * Inidividual worker nodes groups details
 */
export interface ChangeShapeNodes {
  /**
   * Change shape of worker nodes to the desired target shape. Only VM_STANDARD shapes are allowed here.
   */
  "worker"?: string;
  /**
   * Change shape of master nodes to the desired target shape. Only VM_STANDARD shapes are allowed here.
   */
  "master"?: string;
  /**
   * Change shape of utility nodes to the desired target shape. Only VM_STANDARD shapes are allowed here.
   */
  "utility"?: string;
  /**
   * Change shape of cloudsql node to the desired target shape. Only VM_STANDARD shapes are allowed here.
   */
  "cloudsql"?: string;
}

export namespace ChangeShapeNodes {
  export function getJsonObj(obj: ChangeShapeNodes): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChangeShapeNodes): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
