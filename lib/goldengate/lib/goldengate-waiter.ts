/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
import { GoldenGateClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class GoldenGateWaiter {
  public constructor(
    private client: GoldenGateClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forDatabaseRegistration till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDatabaseRegistrationResponse | null (null in case of 404 response)
   */
  public async forDatabaseRegistration(
    request: serviceRequests.GetDatabaseRegistrationRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetDatabaseRegistrationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDatabaseRegistration(request),
      response => targetStates.includes(response.databaseRegistration.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forDeployment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDeploymentResponse | null (null in case of 404 response)
   */
  public async forDeployment(
    request: serviceRequests.GetDeploymentRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetDeploymentResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDeployment(request),
      response => targetStates.includes(response.deployment.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forDeploymentBackup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDeploymentBackupResponse | null (null in case of 404 response)
   */
  public async forDeploymentBackup(
    request: serviceRequests.GetDeploymentBackupRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetDeploymentBackupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDeploymentBackup(request),
      response => targetStates.includes(response.deploymentBackup.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forDeploymentUpgrade till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDeploymentUpgradeResponse | null (null in case of 404 response)
   */
  public async forDeploymentUpgrade(
    request: serviceRequests.GetDeploymentUpgradeRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetDeploymentUpgradeResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDeploymentUpgrade(request),
      response => targetStates.includes(response.deploymentUpgrade.lifecycleState!),
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
