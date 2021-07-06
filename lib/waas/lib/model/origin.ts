/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * A detailed description of your web application's origin host server. An origin must be defined to set up WAF rules.
 */
export interface Origin {
  /**
   * The URI of the origin. Does not support paths. Port numbers should be specified in the `httpPort` and `httpsPort` fields.
   */
  "uri": string;
  /**
   * The HTTP port on the origin that the web application listens on. If unspecified, defaults to `80`. If `0` is specified - the origin is not used for HTTP traffic. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "httpPort"?: number;
  /**
   * The HTTPS port on the origin that the web application listens on. If unspecified, defaults to `443`. If `0` is specified - the origin is not used for HTTPS traffic. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "httpsPort"?: number;
  /**
   * A list of HTTP headers to forward to your origin.
   */
  "customHeaders"?: Array<model.Header>;
}

export namespace Origin {
  export function getJsonObj(obj: Origin): object {
    const jsonObj = {
      ...obj,
      ...{
        "customHeaders": obj.customHeaders
          ? obj.customHeaders.map(item => {
              return model.Header.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Origin): object {
    const jsonObj = {
      ...obj,
      ...{
        "customHeaders": obj.customHeaders
          ? obj.customHeaders.map(item => {
              return model.Header.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
