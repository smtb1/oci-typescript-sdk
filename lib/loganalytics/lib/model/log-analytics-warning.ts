/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * LogAnalyticsWarning
 */
export interface LogAnalyticsWarning {
  /**
   * The unique identifier of the agent associated with the warning
   */
  "agentId"?: string;
  /**
   * The host containing the agent associated with the warning
   */
  "hostName"?: string;
  /**
   * The display name of the rule which triggered the warning
   */
  "ruleDisplayName"?: string;
  /**
   * The name of the source associated with the warning
   */
  "sourceName"?: string;
  /**
   * The entity compartment ID.
   */
  "compartmentId"?: string;
  /**
   * The display name of the source associated with the warning
   */
  "sourceDisplayName"?: string;
  /**
   * The name of the entity associated with the warning
   */
  "entityName"?: string;
  /**
   * The time at which the warning was most recently collected
   */
  "timeCollected"?: Date;
  /**
   * The unique identifier of the warning
   */
  "warningId"?: string;
  /**
   * The date at which the warning was initially triggered
   */
  "timeOfInitialWarning"?: Date;
  /**
   * A flag indicating if the warning is currently active
   */
  "isActive"?: boolean;
  /**
   * A flag indicating if the warning is currently suppressed
   */
  "isSuppressed"?: boolean;
  /**
   * The most recent date on which the warning was triggered
   */
  "timeOfLatestWarning"?: Date;
  /**
   * The warning level - either pattern, rule, or source.
   */
  "warningLevel"?: string;
  /**
   * A description of the warning intended for the consumer of the warning.  It will
   * usually detail the cause of the warning, may suggest a remedy, and can contain any
   * other relevant information the consumer might find useful
   *
   */
  "warningMessage"?: string;
  /**
   * The unique identifier of the warning pattern
   */
  "patternId"?: string;
  /**
   * The text of the pattern used by the warning
   */
  "patternText"?: string;
  /**
   * The unique identifier of the rule associated with the warning
   */
  "ruleId"?: string;
  /**
   * The unique identifier of the source associated with the warning
   */
  "sourceId"?: string;
  /**
   * The user who suppressed the warning, or empty if the warning is not suppressed
   */
  "suppressedBy"?: string;
  /**
   * The unique identifier of the entity associated with the warning
   */
  "entityId"?: string;
  /**
   * The type of the entity associated with the warning
   */
  "entityType"?: string;
  /**
   * The display name of the entity type associated with the warning
   */
  "entityTypeDisplayName"?: string;
  /**
   * The display name of the warning type
   */
  "typeDisplayName"?: string;
  /**
   * The internal name of the warning
   */
  "typeName"?: string;
  /**
   * The warning severity Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "severity"?: number;
}

export namespace LogAnalyticsWarning {
  export function getJsonObj(obj: LogAnalyticsWarning): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsWarning): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
