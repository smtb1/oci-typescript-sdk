/**
 *
 *
 * OpenAPI spec version: 20200430
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
export interface UpdateDataFlowRequest {
  /**
   * DIS workspace id
   */
  "workspaceId": string;
  /**
   * DIS DataFlow key
   */
  "dataFlowKey": string;
  /**
   * The details needed to updated a data flow.
   */
  "updateDataFlowDetails": model.UpdateDataFlowDetails;
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * Update and Delete operations should accept an optional If-Match header,
   * in which clients can send a previously-received ETag. When If-Match is
   * provided and its value does not exactly match the ETag of the resource
   * on the server, the request should fail with HTTP response status code 412
   *
   */
  "ifMatch"?: string;
}
