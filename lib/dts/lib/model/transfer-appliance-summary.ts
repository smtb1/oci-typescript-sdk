/**
 * Data Transfer Service API
 * Data Transfer Service API Specification
 * OpenAPI spec version: 1.0.015
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

export interface TransferApplianceSummary {
  "label"?: string;
  "lifecycleState"?: TransferApplianceSummary.LifecycleState;
  "serialNumber"?: string;
  "creationTime"?: Date;
}

export namespace TransferApplianceSummary {
  export enum LifecycleState {
    Requested = "REQUESTED",
    OraclePreparing = "ORACLE_PREPARING",
    Shipping = "SHIPPING",
    Delivered = "DELIVERED",
    Preparing = "PREPARING",
    Finalized = "FINALIZED",
    ReturnDelayed = "RETURN_DELAYED",
    ReturnShipped = "RETURN_SHIPPED",
    ReturnShippedCancelled = "RETURN_SHIPPED_CANCELLED",
    OracleReceived = "ORACLE_RECEIVED",
    OracleReceivedCancelled = "ORACLE_RECEIVED_CANCELLED",
    Processing = "PROCESSING",
    Complete = "COMPLETE",
    CustomerNeverReceived = "CUSTOMER_NEVER_RECEIVED",
    OracleNeverReceived = "ORACLE_NEVER_RECEIVED",
    CustomerLost = "CUSTOMER_LOST",
    Cancelled = "CANCELLED",
    Deleted = "DELETED",
    Rejected = "REJECTED",
    Error = "ERROR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TransferApplianceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TransferApplianceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
