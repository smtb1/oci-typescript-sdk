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
 * The Ingest Workflow Job information.
 */
export interface IngestStreamDistributionChannelResult {
  /**
   * Identifier of the Ingest Workflow Job created.
   */
  "mediaWorkflowJobId": string;
}

export namespace IngestStreamDistributionChannelResult {
  export function getJsonObj(obj: IngestStreamDistributionChannelResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IngestStreamDistributionChannelResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
