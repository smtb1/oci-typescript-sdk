/**
 *
 *
 * OpenAPI spec version: 20200501
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/networkloadbalancer/CreateListener.ts.html |here} to see how to use CreateListenerRequest.
 */
export interface CreateListenerRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network load balancer to update.
   */
  "networkLoadBalancerId": string;
  /**
   * Details to add a listener.
   */
  "createListenerDetails": model.CreateListenerDetails;
  /**
   * The unique Oracle-assigned identifier for the request. If you must contact Oracle about a
   * particular request, then provide the request identifier.
   *
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so that it can be retried in case of a timeout or
   * server error without risk of rerunning that same action. Retry tokens expire after 24
   * hours but they can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * might be rejected.
   *
   */
  "opcRetryToken"?: string;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call
   * for a resource, set the `if-match` parameter to the value of the
   * etag from a previous GET or POST response for that resource.
   * The resource will be updated or deleted only if the etag you
   * provide matches the current etag value of the resource.
   *
   */
  "ifMatch"?: string;
}
