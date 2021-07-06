/**
 * Analytics API
 * Analytics API.

 * OpenAPI spec version: 20190331
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
 * Input payload to update a vanity url.
 *
 */
export interface UpdateVanityUrlDetails {
  /**
   * Passphrase for the PEM Private key (if any).
   *
   */
  "passphrase"?: string;
  /**
   * PEM Private key for HTTPS connections.
   *
   */
  "privateKey": string;
  /**
   * PEM certificate for HTTPS connections.
   *
   */
  "publicCertificate": string;
  /**
   * PEM CA certificate(s) for HTTPS connections. This may include multiple PEM certificates.
   *
   */
  "caCertificate": string;
}

export namespace UpdateVanityUrlDetails {
  export function getJsonObj(obj: UpdateVanityUrlDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateVanityUrlDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
