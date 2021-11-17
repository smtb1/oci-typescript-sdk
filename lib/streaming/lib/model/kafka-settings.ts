/**
 * Streaming API
 * Use the Streaming API to produce and consume messages, create streams and stream pools, and manage related items. For more information, see [Streaming](/Content/Streaming/Concepts/streamingoverview.htm).
 * OpenAPI spec version: 20180418
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
 * Settings for the Kafka compatibility layer.
 */
export interface KafkaSettings {
  /**
   * Bootstrap servers.
   */
  "bootstrapServers"?: string;
  /**
   * Enable auto creation of topic on the server.
   */
  "autoCreateTopicsEnable"?: boolean;
  /**
   * The number of hours to keep a log file before deleting it (in hours). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "logRetentionHours"?: number;
  /**
   * The default number of log partitions per topic. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numPartitions"?: number;
}

export namespace KafkaSettings {
  export function getJsonObj(obj: KafkaSettings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: KafkaSettings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
