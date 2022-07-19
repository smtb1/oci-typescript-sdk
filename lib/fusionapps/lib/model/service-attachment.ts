/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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

/**
 * Description of ServiceAttachment.
 */
export interface ServiceAttachment {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Action
   */
  "action"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId"?: string;
  /**
   * The ID of the service instance created that can be used to identify this on the service control plane
   */
  "serviceInstanceId"?: string;
  /**
   * Service Attachment Display name, can be renamed
   */
  "displayName": string;
  /**
   * Type of the serviceInstance.
   */
  "serviceInstanceType": ServiceAttachment.ServiceInstanceType;
  /**
   * Public URL
   */
  "serviceUrl"?: string;
  /**
   * The time the the ServiceInstance was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time the ServiceInstance was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the ServiceInstance.
   */
  "lifecycleState": ServiceAttachment.LifecycleState;
  /**
   * Whether this service is provisioned due to the customer being subscribed to a specific SKU
   */
  "isSkuBased": boolean;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ServiceAttachment {
  export enum ServiceInstanceType {
    DigitalAssistant = "DIGITAL_ASSISTANT",
    IntegrationCloud = "INTEGRATION_CLOUD",
    AnalyticsWarehouse = "ANALYTICS_WAREHOUSE",
    Vbcs = "VBCS",
    VisualBuilderStudio = "VISUAL_BUILDER_STUDIO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ServiceAttachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ServiceAttachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
