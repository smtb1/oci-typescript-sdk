/**
 * Cloud Advisor API
 * Use the Cloud Advisor API to find potential inefficiencies in your tenancy and address them.
Cloud Advisor can help you save money, improve performance, strengthen system resilience, and improve security.
For more information, see [Cloud Advisor](/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm).

 * OpenAPI spec version: 20200606
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { OptimizerClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class OptimizerWaiter {
  public constructor(
    private client: OptimizerClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forCategory till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetCategoryResponse | null (null in case of 404 response)
   */
  public async forCategory(
    request: serviceRequests.GetCategoryRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetCategoryResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getCategory(request),
      response => targetStates.includes(response.category.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forEnrollmentStatus till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetEnrollmentStatusResponse | null (null in case of 404 response)
   */
  public async forEnrollmentStatus(
    request: serviceRequests.GetEnrollmentStatusRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetEnrollmentStatusResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getEnrollmentStatus(request),
      response => targetStates.includes(response.enrollmentStatus.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forProfile till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetProfileResponse | null (null in case of 404 response)
   */
  public async forProfile(
    request: serviceRequests.GetProfileRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetProfileResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getProfile(request),
      response => targetStates.includes(response.profile.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forRecommendation till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRecommendationResponse | null (null in case of 404 response)
   */
  public async forRecommendation(
    request: serviceRequests.GetRecommendationRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetRecommendationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getRecommendation(request),
      response => targetStates.includes(response.recommendation.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forResourceAction till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetResourceActionResponse | null (null in case of 404 response)
   */
  public async forResourceAction(
    request: serviceRequests.GetResourceActionRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetResourceActionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getResourceAction(request),
      response => targetStates.includes(response.resourceAction.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
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
