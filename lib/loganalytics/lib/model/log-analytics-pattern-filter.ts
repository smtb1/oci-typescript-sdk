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
 * LogAnalyticsPatternFilter
 */
export interface LogAnalyticsPatternFilter {
  "pattern"?: model.LogAnalyticsSourcePattern;
  /**
   * The agent version.
   */
  "agentVersion"?: string;
  /**
   * A flag indicating whether or not the pattern filter is currently
   * in use.
   *
   */
  "isInUse"?: boolean;
  /**
   * The operating system.
   */
  "operatingSystem"?: string;
  /**
   * The pattern unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "patternId"?: number;
  /**
   * The source unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sourceId"?: number;
  /**
   * The pattern filter version.
   */
  "version"?: string;
  "source"?: model.LogAnalyticsSource;
}

export namespace LogAnalyticsPatternFilter {
  export function getJsonObj(obj: LogAnalyticsPatternFilter): object {
    const jsonObj = {
      ...obj,
      ...{
        "pattern": obj.pattern
          ? model.LogAnalyticsSourcePattern.getJsonObj(obj.pattern)
          : undefined,

        "source": obj.source ? model.LogAnalyticsSource.getJsonObj(obj.source) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsPatternFilter): object {
    const jsonObj = {
      ...obj,
      ...{
        "pattern": obj.pattern
          ? model.LogAnalyticsSourcePattern.getDeserializedJsonObj(obj.pattern)
          : undefined,

        "source": obj.source
          ? model.LogAnalyticsSource.getDeserializedJsonObj(obj.source)
          : undefined
      }
    };

    return jsonObj;
  }
}
