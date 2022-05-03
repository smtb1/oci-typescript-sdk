/**
 * ADM API
 * Use the ADM API to create ADM knowledge base and vulnerability audits.  For more information, see [ADM](/Content/adm/using/home.htm).
 * OpenAPI spec version: 20220421
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
import { ApplicationDependencyManagementClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ApplicationDependencyManagementWaiter {
  public constructor(
    private client: ApplicationDependencyManagementClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forKnowledgeBase till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetKnowledgeBaseResponse | null (null in case of 404 response)
   */
  public async forKnowledgeBase(
    request: serviceRequests.GetKnowledgeBaseRequest,
    ...targetStates: models.KnowledgeBase.LifecycleState[]
  ): Promise<serviceResponses.GetKnowledgeBaseResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getKnowledgeBase(request),
      response => targetStates.includes(response.knowledgeBase.lifecycleState!),
      targetStates.includes(models.KnowledgeBase.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forVulnerabilityAudit till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVulnerabilityAuditResponse | null (null in case of 404 response)
   */
  public async forVulnerabilityAudit(
    request: serviceRequests.GetVulnerabilityAuditRequest,
    ...targetStates: models.VulnerabilityAudit.LifecycleState[]
  ): Promise<serviceResponses.GetVulnerabilityAuditResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getVulnerabilityAudit(request),
      response => targetStates.includes(response.vulnerabilityAudit.lifecycleState!),
      targetStates.includes(models.VulnerabilityAudit.LifecycleState.Deleted)
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