/**
 * Budgets API
 * Use the Budgets API to manage budgets and budget alerts.
 * OpenAPI spec version: 20190111
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { BudgetWaiter } from "./budget-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum BudgetApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class BudgetClient {
  protected static serviceEndpointTemplate = "https://usage.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": BudgetWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20190111";
    if (this.logger) this.logger.info(`BudgetClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      BudgetClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      BudgetClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new BudgetWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): BudgetWaiter {
    this._waiters = new BudgetWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): BudgetWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
   * Creates a new Alert Rule.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CreateAlertRuleRequest
   * @return CreateAlertRuleResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/budget/CreateAlertRule.ts.html |here} to see how to use CreateAlertRule API.
   */
  public async createAlertRule(
    createAlertRuleRequest: requests.CreateAlertRuleRequest
  ): Promise<responses.CreateAlertRuleResponse> {
    if (this.logger) this.logger.debug("Calling operation BudgetClient#createAlertRule.");
    const pathParams = {
      "{budgetId}": createAlertRuleRequest.budgetId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createAlertRuleRequest.opcRetryToken,
      "opc-request-id": createAlertRuleRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createAlertRuleRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/budgets/{budgetId}/alertRules",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createAlertRuleRequest.createAlertRuleDetails,
        "CreateAlertRuleDetails",
        model.CreateAlertRuleDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateAlertRuleResponse>{},
        body: await response.json(),
        bodyKey: "alertRule",
        bodyModel: model.AlertRule,
        type: "model.AlertRule",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new Budget.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CreateBudgetRequest
   * @return CreateBudgetResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/budget/CreateBudget.ts.html |here} to see how to use CreateBudget API.
   */
  public async createBudget(
    createBudgetRequest: requests.CreateBudgetRequest
  ): Promise<responses.CreateBudgetResponse> {
    if (this.logger) this.logger.debug("Calling operation BudgetClient#createBudget.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createBudgetRequest.opcRetryToken,
      "opc-request-id": createBudgetRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createBudgetRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/budgets",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createBudgetRequest.createBudgetDetails,
        "CreateBudgetDetails",
        model.CreateBudgetDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateBudgetResponse>{},
        body: await response.json(),
        bodyKey: "budget",
        bodyModel: model.Budget,
        type: "model.Budget",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Deletes a specified Alert Rule resource.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param DeleteAlertRuleRequest
   * @return DeleteAlertRuleResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/budget/DeleteAlertRule.ts.html |here} to see how to use DeleteAlertRule API.
   */
  public async deleteAlertRule(
    deleteAlertRuleRequest: requests.DeleteAlertRuleRequest
  ): Promise<responses.DeleteAlertRuleResponse> {
    if (this.logger) this.logger.debug("Calling operation BudgetClient#deleteAlertRule.");
    const pathParams = {
      "{budgetId}": deleteAlertRuleRequest.budgetId,
      "{alertRuleId}": deleteAlertRuleRequest.alertRuleId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteAlertRuleRequest.ifMatch,
      "opc-request-id": deleteAlertRuleRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      deleteAlertRuleRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/budgets/{budgetId}/alertRules/{alertRuleId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteAlertRuleResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Deletes a specified Budget resource
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param DeleteBudgetRequest
   * @return DeleteBudgetResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/budget/DeleteBudget.ts.html |here} to see how to use DeleteBudget API.
   */
  public async deleteBudget(
    deleteBudgetRequest: requests.DeleteBudgetRequest
  ): Promise<responses.DeleteBudgetResponse> {
    if (this.logger) this.logger.debug("Calling operation BudgetClient#deleteBudget.");
    const pathParams = {
      "{budgetId}": deleteBudgetRequest.budgetId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteBudgetRequest.ifMatch,
      "opc-request-id": deleteBudgetRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      deleteBudgetRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/budgets/{budgetId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteBudgetResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets an Alert Rule for a specified Budget.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetAlertRuleRequest
   * @return GetAlertRuleResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/budget/GetAlertRule.ts.html |here} to see how to use GetAlertRule API.
   */
  public async getAlertRule(
    getAlertRuleRequest: requests.GetAlertRuleRequest
  ): Promise<responses.GetAlertRuleResponse> {
    if (this.logger) this.logger.debug("Calling operation BudgetClient#getAlertRule.");
    const pathParams = {
      "{budgetId}": getAlertRuleRequest.budgetId,
      "{alertRuleId}": getAlertRuleRequest.alertRuleId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getAlertRuleRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getAlertRuleRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/budgets/{budgetId}/alertRules/{alertRuleId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetAlertRuleResponse>{},
        body: await response.json(),
        bodyKey: "alertRule",
        bodyModel: model.AlertRule,
        type: "model.AlertRule",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets a Budget by identifier
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetBudgetRequest
   * @return GetBudgetResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/budget/GetBudget.ts.html |here} to see how to use GetBudget API.
   */
  public async getBudget(
    getBudgetRequest: requests.GetBudgetRequest
  ): Promise<responses.GetBudgetResponse> {
    if (this.logger) this.logger.debug("Calling operation BudgetClient#getBudget.");
    const pathParams = {
      "{budgetId}": getBudgetRequest.budgetId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getBudgetRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getBudgetRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/budgets/{budgetId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetBudgetResponse>{},
        body: await response.json(),
        bodyKey: "budget",
        bodyModel: model.Budget,
        type: "model.Budget",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Returns a list of Alert Rules for a specified Budget.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListAlertRulesRequest
   * @return ListAlertRulesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/budget/ListAlertRules.ts.html |here} to see how to use ListAlertRules API.
   */
  public async listAlertRules(
    listAlertRulesRequest: requests.ListAlertRulesRequest
  ): Promise<responses.ListAlertRulesResponse> {
    if (this.logger) this.logger.debug("Calling operation BudgetClient#listAlertRules.");
    const pathParams = {
      "{budgetId}": listAlertRulesRequest.budgetId
    };

    const queryParams = {
      "limit": listAlertRulesRequest.limit,
      "page": listAlertRulesRequest.page,
      "sortOrder": listAlertRulesRequest.sortOrder,
      "sortBy": listAlertRulesRequest.sortBy,
      "lifecycleState": listAlertRulesRequest.lifecycleState,
      "displayName": listAlertRulesRequest.displayName
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listAlertRulesRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listAlertRulesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/budgets/{budgetId}/alertRules",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListAlertRulesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.AlertRuleSummary,
        type: "Array<model.AlertRuleSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listAlertRulesRecordIterator function.
   * Creates a new async iterator which will iterate over the models.AlertRuleSummary objects
   * contained in responses from the listAlertRules operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllAlertRules(
    request: requests.ListAlertRulesRequest
  ): AsyncIterableIterator<model.AlertRuleSummary> {
    return paginateRecords(request, req => this.listAlertRules(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listAlertRulesResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listAlertRules operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllAlertRulesResponses(
    request: requests.ListAlertRulesRequest
  ): AsyncIterableIterator<responses.ListAlertRulesResponse> {
    return paginateResponses(request, req => this.listAlertRules(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.AlertRuleSummary objects
   * contained in responses from the listAlertRules operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAlertRulesRecordIterator(
    request: requests.ListAlertRulesRequest
  ): AsyncIterableIterator<model.AlertRuleSummary> {
    return paginateRecords(request, req => this.listAlertRules(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listAlertRules operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAlertRulesResponseIterator(
    request: requests.ListAlertRulesRequest
  ): AsyncIterableIterator<responses.ListAlertRulesResponse> {
    return paginateResponses(request, req => this.listAlertRules(req));
  }

  /**
     * Gets a list of Budgets in a compartment.
* <p>
By default, ListBudgets returns budgets of 'COMPARTMENT' target type and the budget records with only ONE target compartment OCID.
* <p>
To list ALL budgets, set the targetType query parameter to ALL.
* Example:
*   'targetType=ALL'
* <p>
Additional targetTypes would be available in future releases. Clients should ignore new targetType 
* or upgrade to latest version of client SDK to handle new targetType.
* 
     * This operation does not retry by default if the user has not defined a retry configuration.
     * @param ListBudgetsRequest
     * @return ListBudgetsResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/budget/ListBudgets.ts.html |here} to see how to use ListBudgets API.
     */
  public async listBudgets(
    listBudgetsRequest: requests.ListBudgetsRequest
  ): Promise<responses.ListBudgetsResponse> {
    if (this.logger) this.logger.debug("Calling operation BudgetClient#listBudgets.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listBudgetsRequest.compartmentId,
      "limit": listBudgetsRequest.limit,
      "page": listBudgetsRequest.page,
      "sortOrder": listBudgetsRequest.sortOrder,
      "sortBy": listBudgetsRequest.sortBy,
      "lifecycleState": listBudgetsRequest.lifecycleState,
      "displayName": listBudgetsRequest.displayName,
      "targetType": listBudgetsRequest.targetType
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listBudgetsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listBudgetsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/budgets",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListBudgetsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.BudgetSummary,
        type: "Array<model.BudgetSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listBudgetsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.BudgetSummary objects
   * contained in responses from the listBudgets operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllBudgets(
    request: requests.ListBudgetsRequest
  ): AsyncIterableIterator<model.BudgetSummary> {
    return paginateRecords(request, req => this.listBudgets(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listBudgetsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listBudgets operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllBudgetsResponses(
    request: requests.ListBudgetsRequest
  ): AsyncIterableIterator<responses.ListBudgetsResponse> {
    return paginateResponses(request, req => this.listBudgets(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.BudgetSummary objects
   * contained in responses from the listBudgets operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listBudgetsRecordIterator(
    request: requests.ListBudgetsRequest
  ): AsyncIterableIterator<model.BudgetSummary> {
    return paginateRecords(request, req => this.listBudgets(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listBudgets operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listBudgetsResponseIterator(
    request: requests.ListBudgetsRequest
  ): AsyncIterableIterator<responses.ListBudgetsResponse> {
    return paginateResponses(request, req => this.listBudgets(req));
  }

  /**
   * Update an Alert Rule for the budget identified by the OCID.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param UpdateAlertRuleRequest
   * @return UpdateAlertRuleResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/budget/UpdateAlertRule.ts.html |here} to see how to use UpdateAlertRule API.
   */
  public async updateAlertRule(
    updateAlertRuleRequest: requests.UpdateAlertRuleRequest
  ): Promise<responses.UpdateAlertRuleResponse> {
    if (this.logger) this.logger.debug("Calling operation BudgetClient#updateAlertRule.");
    const pathParams = {
      "{budgetId}": updateAlertRuleRequest.budgetId,
      "{alertRuleId}": updateAlertRuleRequest.alertRuleId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateAlertRuleRequest.ifMatch,
      "opc-request-id": updateAlertRuleRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateAlertRuleRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/budgets/{budgetId}/alertRules/{alertRuleId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateAlertRuleRequest.updateAlertRuleDetails,
        "UpdateAlertRuleDetails",
        model.UpdateAlertRuleDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateAlertRuleResponse>{},
        body: await response.json(),
        bodyKey: "alertRule",
        bodyModel: model.AlertRule,
        type: "model.AlertRule",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Update a Budget identified by the OCID
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param UpdateBudgetRequest
   * @return UpdateBudgetResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/budget/UpdateBudget.ts.html |here} to see how to use UpdateBudget API.
   */
  public async updateBudget(
    updateBudgetRequest: requests.UpdateBudgetRequest
  ): Promise<responses.UpdateBudgetResponse> {
    if (this.logger) this.logger.debug("Calling operation BudgetClient#updateBudget.");
    const pathParams = {
      "{budgetId}": updateBudgetRequest.budgetId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateBudgetRequest.ifMatch,
      "opc-request-id": updateBudgetRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateBudgetRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/budgets/{budgetId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateBudgetRequest.updateBudgetDetails,
        "UpdateBudgetDetails",
        model.UpdateBudgetDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateBudgetResponse>{},
        body: await response.json(),
        bodyKey: "budget",
        bodyModel: model.Budget,
        type: "model.Budget",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
