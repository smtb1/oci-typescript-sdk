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
 * LogAnalyticsSourcePattern
 */
export interface LogAnalyticsSourcePattern {
  /**
   * The converted text.
   */
  "convertedText"?: string;
  /**
   * The parser unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbParserId"?: number;
  /**
   * The date time columns.
   */
  "dbPatternDateTimeColumns"?: string;
  /**
   * The date time field.
   */
  "dbPatternDateTimeField"?: string;
  /**
   * The sequence column.
   */
  "dbPatternSequenceColumn"?: string;
  /**
   * The parser field list.
   */
  "fields"?: Array<model.LogAnalyticsParserField>;
  /**
   * A flag indicating if this is source pattern is included.
   *
   */
  "isInclude"?: boolean;
  /**
   * A flag indicating if this is the default source pattern.
   *
   */
  "isDefault"?: boolean;
  "patternFilter"?: model.LogAnalyticsPatternFilter;
  /**
   * The source pattern alias.
   */
  "alias"?: string;
  /**
   * The source pattern description.
   */
  "description"?: string;
  /**
   * A flag inidcating whether or not the source pattern is enabled.
   *
   */
  "isEnabled"?: boolean;
  /**
   * The source pattern unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "patternId"?: number;
  /**
   * The system flag.  A value of false denotes a custom, or user
   * defined object.  A value of true denotes a built in object.
   *
   */
  "isSystem"?: boolean;
  /**
   * The source unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sourceId"?: number;
  /**
   * A flag indicating whether or not agent warnings are suppressed for
   * this source pattern.
   *
   */
  "isAgentWarningSuppressed"?: boolean;
  /**
   * The pattern text.
   */
  "patternText"?: string;
  /**
   * The pattern type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "patternType"?: number;
  /**
   * The source entity type.
   */
  "entityType"?: Array<string>;
}

export namespace LogAnalyticsSourcePattern {
  export function getJsonObj(obj: LogAnalyticsSourcePattern): object {
    const jsonObj = {
      ...obj,
      ...{
        "fields": obj.fields
          ? obj.fields.map(item => {
              return model.LogAnalyticsParserField.getJsonObj(item);
            })
          : undefined,

        "patternFilter": obj.patternFilter
          ? model.LogAnalyticsPatternFilter.getJsonObj(obj.patternFilter)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsSourcePattern): object {
    const jsonObj = {
      ...obj,
      ...{
        "fields": obj.fields
          ? obj.fields.map(item => {
              return model.LogAnalyticsParserField.getDeserializedJsonObj(item);
            })
          : undefined,

        "patternFilter": obj.patternFilter
          ? model.LogAnalyticsPatternFilter.getDeserializedJsonObj(obj.patternFilter)
          : undefined
      }
    };

    return jsonObj;
  }
}
