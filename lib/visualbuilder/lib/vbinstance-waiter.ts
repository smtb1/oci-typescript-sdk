/**
 * Visual Builder API
 * Oracle Visual Builder enables developers to quickly build web and mobile applications. With a visual development environment that makes it easy to connect to Oracle data and third-party REST services, developers can build modern, consumer-grade applications in a fraction of the time it would take in other tools.
The Visual Builder Instance Management API allows users to create and manage a Visual Builder instance.

 * OpenAPI spec version: 20210601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { VbInstanceClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class VbInstanceWaiter {
  public constructor(
    private client: VbInstanceClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forVbInstance till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVbInstanceResponse | null (null in case of 404 response)
   */
  public async forVbInstance(
    request: serviceRequests.GetVbInstanceRequest,
    ...targetStates: models.VbInstance.LifecycleState[]
  ): Promise<serviceResponses.GetVbInstanceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getVbInstance(request),
      response => targetStates.includes(response.vbInstance.lifecycleState!),
      targetStates.includes(models.VbInstance.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}