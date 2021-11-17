/**
 * Apm Configuration API
 * An API for the APM Configuration service. Use this API to query and set APM configuration.
 * OpenAPI spec version: 20210201
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
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ConfigApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class ConfigClient {
  protected static serviceEndpointTemplate = "https://apm-config.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
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
    this._endpoint = this._endpoint + "/20210201";
    if (this.logger) this.logger.info(`ConfigClient endpoint set to ${this._endpoint}`);
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
      ConfigClient.serviceEndpointTemplate,
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
      ConfigClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new Configuration item.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CreateConfigRequest
   * @return CreateConfigResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/CreateConfig.ts.html |here} to see how to use CreateConfig API.
   */
  public async createConfig(
    createConfigRequest: requests.CreateConfigRequest
  ): Promise<responses.CreateConfigResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#createConfig.");
    const pathParams = {};

    const queryParams = {
      "apmDomainId": createConfigRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createConfigRequest.opcRetryToken,
      "opc-request-id": createConfigRequest.opcRequestId,
      "opc-dry-run": createConfigRequest.opcDryRun
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createConfigRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/configs",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createConfigRequest.createConfigDetails,
        "CreateConfigDetails",
        model.CreateConfigDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateConfigResponse>{},
        body: await response.json(),
        bodyKey: "config",
        bodyModel: model.Config,
        type: "model.Config",
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
   * Deletes the specified configuration item
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param DeleteConfigRequest
   * @return DeleteConfigResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/DeleteConfig.ts.html |here} to see how to use DeleteConfig API.
   */
  public async deleteConfig(
    deleteConfigRequest: requests.DeleteConfigRequest
  ): Promise<responses.DeleteConfigResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#deleteConfig.");
    const pathParams = {
      "{configId}": deleteConfigRequest.configId
    };

    const queryParams = {
      "apmDomainId": deleteConfigRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteConfigRequest.ifMatch,
      "opc-request-id": deleteConfigRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      deleteConfigRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/configs/{configId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteConfigResponse>{},
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
   * Get the configuration of the item identified by the OCID.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetConfigRequest
   * @return GetConfigResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/GetConfig.ts.html |here} to see how to use GetConfig API.
   */
  public async getConfig(
    getConfigRequest: requests.GetConfigRequest
  ): Promise<responses.GetConfigResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#getConfig.");
    const pathParams = {
      "{configId}": getConfigRequest.configId
    };

    const queryParams = {
      "apmDomainId": getConfigRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getConfigRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getConfigRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/configs/{configId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetConfigResponse>{},
        body: await response.json(),
        bodyKey: "config",
        bodyModel: model.Config,
        type: "model.Config",
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
   * Returns all configured items optionally filtered by configuration type
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListConfigsRequest
   * @return ListConfigsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/ListConfigs.ts.html |here} to see how to use ListConfigs API.
   */
  public async listConfigs(
    listConfigsRequest: requests.ListConfigsRequest
  ): Promise<responses.ListConfigsResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#listConfigs.");
    const pathParams = {};

    const queryParams = {
      "apmDomainId": listConfigsRequest.apmDomainId,
      "configType": listConfigsRequest.configType,
      "displayName": listConfigsRequest.displayName,
      "limit": listConfigsRequest.limit,
      "page": listConfigsRequest.page,
      "sortOrder": listConfigsRequest.sortOrder,
      "sortBy": listConfigsRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listConfigsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listConfigsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/configs",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListConfigsResponse>{},
        body: await response.json(),
        bodyKey: "configCollection",
        bodyModel: model.ConfigCollection,
        type: "model.ConfigCollection",
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
   * Updates the item.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param UpdateConfigRequest
   * @return UpdateConfigResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/UpdateConfig.ts.html |here} to see how to use UpdateConfig API.
   */
  public async updateConfig(
    updateConfigRequest: requests.UpdateConfigRequest
  ): Promise<responses.UpdateConfigResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#updateConfig.");
    const pathParams = {
      "{configId}": updateConfigRequest.configId
    };

    const queryParams = {
      "apmDomainId": updateConfigRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateConfigRequest.ifMatch,
      "opc-request-id": updateConfigRequest.opcRequestId,
      "opc-dry-run": updateConfigRequest.opcDryRun
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateConfigRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/configs/{configId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateConfigRequest.updateConfigDetails,
        "UpdateConfigDetails",
        model.UpdateConfigDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateConfigResponse>{},
        body: await response.json(),
        bodyKey: "config",
        bodyModel: model.Config,
        type: "model.Config",
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
}
