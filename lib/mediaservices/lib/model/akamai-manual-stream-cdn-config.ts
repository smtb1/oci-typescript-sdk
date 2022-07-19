/**
 * Media Services
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](/iaas/Content/dms-mediaflow/home.htm) and Media Streams [Media Streams](/iaas/Content/dms-mediastream/home.htm).

Use the table of contents and search tool to explore the Media Flow API and Media Streams API.

 * OpenAPI spec version: 20211101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Configuration fields for manual Akamai configuration.
 */
export interface AkamaiManualStreamCdnConfig extends model.StreamCdnConfigSection {
  /**
   * The type of data used to compute the signature.
   */
  "originAuthSignType"?: AkamaiManualStreamCdnConfig.OriginAuthSignType;
  /**
   * The type of encryption used to compute the signature.
   */
  "originAuthSignEncryption"?: AkamaiManualStreamCdnConfig.OriginAuthSignEncryption;
  /**
   * The shared secret key A, two for errorless key rotation.
   */
  "originAuthSecretKeyA"?: string;
  /**
   * Nonce identifier for originAuthSecretKeyA (used to determine key used to sign).
   */
  "originAuthSecretKeyNonceA"?: string;
  /**
   * The shared secret key B, two for errorless key rotation.
   */
  "originAuthSecretKeyB"?: string;
  /**
   * Nonce identifier for originAuthSecretKeyB (used to determine key used to sign).
   */
  "originAuthSecretKeyNonceB"?: string;
  /**
   * The hostname of the CDN edge server to use when building CDN URLs.
   */
  "edgeHostname"?: string;
  /**
   * The path to prepend when building CDN URLs.
   */
  "edgePathPrefix"?: string;
  /**
   * Whether token authentication should be used at the CDN edge.
   */
  "isEdgeTokenAuth"?: boolean;
  /**
   * The encryption key to use for edge token authentication.
   */
  "edgeTokenKey"?: string;
  /**
   * Salt to use when encrypting authentication token.
   */
  "edgeTokenSalt"?: string;

  "type": string;
}

export namespace AkamaiManualStreamCdnConfig {
  export enum OriginAuthSignType {
    ForwardUrl = "ForwardURL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OriginAuthSignEncryption {
    Sha256Hmac = "SHA256-HMAC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AkamaiManualStreamCdnConfig, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.StreamCdnConfigSection.getJsonObj(obj) as AkamaiManualStreamCdnConfig)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "AKAMAI_MANUAL";
  export function getDeserializedJsonObj(
    obj: AkamaiManualStreamCdnConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.StreamCdnConfigSection.getDeserializedJsonObj(
            obj
          ) as AkamaiManualStreamCdnConfig)),
      ...{}
    };

    return jsonObj;
  }
}
