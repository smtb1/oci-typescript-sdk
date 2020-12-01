/**
 *
 *
 * OpenAPI spec version: 20190415
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
export interface DeleteChannelRequest extends common.BaseRequest {
  /**
   * The Channel [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "channelId": string;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a
   * resource, set the `If-Match` header to the value of the etag from a
   * previous GET or POST response for that resource. The resource will be
   * updated or deleted only if the etag you provide matches the resource's
   * current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * Customer-defined unique identifier for the request. If you need to
   * contact Oracle about a specific request, please provide the request
   * ID that you supplied in this header with the request.
   *
   */
  "opcRequestId"?: string;
}
