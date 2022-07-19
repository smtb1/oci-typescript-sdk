/**
 *
 *
 * OpenAPI spec version: 20220126
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

export interface CreateAccessRequestResponse {
  /**
   * Unique Oracle-assigned identifier for the asynchronous work. You can use this to query its status.
   *
   */
  "opcWorkRequestId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * this contains the full URI for the get request, e.g. \"https://iaas.us-phoenix-1.oraclecloud.com/20210331/lockbox/<some-ocid>\"
   *
   */
  "location": string;
  /**
   * For optimistic concurrency control. See `if-match`.
   *
   */
  "etag": string;
  /**
   * The returned model.AccessRequest instance.
   */
  "accessRequest": model.AccessRequest;
}
