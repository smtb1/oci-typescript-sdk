/**
 * Media Services API
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](/iaas/Content/dms-mediaflow/home.htm) and [Media Streams](/iaas/Content/dms-mediastream/home.htm).

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
 * The output result of an executed MediaWorkflowJob.
 */
export interface JobOutput {
  /**
   * Type of job output.
   */
  "assetType"?: JobOutput.AssetType;
  /**
   * The namespace name of the job output.
   */
  "namespaceName"?: string;
  /**
   * The bucket name of the job output.
   */
  "bucketName"?: string;
  /**
   * The object name of the job output.
   */
  "objectName"?: string;
  /**
   * The ID associated with the job output.
   */
  "id"?: string;
}

export namespace JobOutput {
  export enum AssetType {
    Audio = "AUDIO",
    Video = "VIDEO",
    Playlist = "PLAYLIST",
    Image = "IMAGE",
    CaptionFile = "CAPTION_FILE",
    TranscriptionJob = "TRANSCRIPTION_JOB",
    VisionJob = "VISION_JOB",
    TextAnalysis = "TEXT_ANALYSIS",
    Other = "OTHER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: JobOutput): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JobOutput): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}