/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details required to establish a TLS enabled connection.
 */
export interface TlsConfig {
  /**
   * Status to represent whether the database connection is TLS enabled or not.
   */
  "status": TlsConfig.Status;
  /**
   * The format of the certificate store.
   */
  "certificateStoreType"?: TlsConfig.CertificateStoreType;
  /**
   * The password to read the trust store and key store files, if they are password protected.
   */
  "storePassword"?: string;
  /**
   * Base64 encoded string of trust store file content.
   */
  "trustStoreContent"?: string;
  /**
   * Base64 encoded string of key store file content.
   */
  "keyStoreContent"?: string;
}

export namespace TlsConfig {
  export enum Status {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum CertificateStoreType {
    Jks = "JKS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TlsConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TlsConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
