/**
 * Apm Traces API
 * API for APM Trace service. Use this API to query the Traces and associated Spans.

 * OpenAPI spec version: 20200630
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
 * Definition of a span object.
 *
 */
export interface Span {
  /**
   * Unique identifier (spanId) for the span.  Note that this field is
   * defined as spanKey in the API to comply with OCI API fields naming conventions.
   * The spanKey maps to the spanId in the APM repository.
   *
   */
  "key": string;
  /**
   * Unique parent identifier for the span if one exists. For root spans this will be null.
   *
   */
  "parentSpanKey"?: string;
  /**
   * Unique identifier for the trace.
   *
   */
  "traceKey": string;
  /**
   * Span start time.  Timestamp when the span was started.
   *
   */
  "timeStarted": Date;
  /**
   * Span end time.  Timestamp when the span was completed.
   *
   */
  "timeEnded": Date;
  /**
   * Total span duration in milliseconds.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "durationInMs": number;
  /**
   * Span name associated with the trace.  This is usually the method or uri of the request.
   *
   */
  "operationName": string;
  /**
   * Service name associated with the span.
   *
   */
  "serviceName"?: string;
  /**
   * Kind associated with the span.
   *
   */
  "kind"?: string;
  /**
   * List of tags associated with the span.
   *
   */
  "tags"?: Array<model.Tag>;
  /**
   * List of logs associated with the span.
   *
   */
  "logs"?: Array<model.SpanLogCollection>;
  /**
   * Indicates if the span has an error
   *
   */
  "isError": boolean;
}

export namespace Span {
  export function getJsonObj(obj: Span): object {
    const jsonObj = {
      ...obj,
      ...{
        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tag.getJsonObj(item);
            })
          : undefined,
        "logs": obj.logs
          ? obj.logs.map(item => {
              return model.SpanLogCollection.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}