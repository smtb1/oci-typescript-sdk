/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, and delete log groups, log objects, and agent configurations.
 * OpenAPI spec version: 20200531
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
 * Syslog Parser.
 */
export interface UnifiedAgentSyslogParser extends model.UnifiedAgentParser {
  "timeFormat"?: string;
  "rfc5424TimeFormat"?: string;
  "messageFormat"?: UnifiedAgentSyslogParser.MessageFormat;
  "isWithPriority"?: boolean;
  "isSupportColonlessIdent"?: boolean;
  "syslogParserType"?: UnifiedAgentSyslogParser.SyslogParserType;

  "parserType": string;
}

export namespace UnifiedAgentSyslogParser {
  export enum MessageFormat {
    Rfc3164 = "RFC3164",
    Rfc5424 = "RFC5424",
    Auto = "AUTO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SyslogParserType {
    String = "STRING",
    Regexp = "REGEXP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: UnifiedAgentSyslogParser, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentParser.getJsonObj(obj) as UnifiedAgentSyslogParser)),
      ...{}
    };

    return jsonObj;
  }
  export const parserType = "SYSLOG";
  export function getDeserializedJsonObj(
    obj: UnifiedAgentSyslogParser,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentParser.getDeserializedJsonObj(obj) as UnifiedAgentSyslogParser)),
      ...{}
    };

    return jsonObj;
  }
}
