/**
 * Oracle Cloud Agent API
 * API for the Oracle Cloud Agent software running on compute instances. Oracle Cloud Agent
is a lightweight process that monitors and manages compute instances.

 * OpenAPI spec version: 20180530
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
 * The execution output from a command when returned in plain text.
 */
export interface InstanceAgentCommandExecutionOutputViaTextDetails
  extends model.InstanceAgentCommandExecutionOutputContent {
  /**
   * The command output.
   */
  "text"?: string;
  /**
   * SHA-256 checksum value of the text content.
   */
  "textSha256"?: string;

  "outputType": string;
}

export namespace InstanceAgentCommandExecutionOutputViaTextDetails {
  export function getJsonObj(
    obj: InstanceAgentCommandExecutionOutputViaTextDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceAgentCommandExecutionOutputContent.getJsonObj(
            obj
          ) as InstanceAgentCommandExecutionOutputViaTextDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const outputType = "TEXT";
  export function getDeserializedJsonObj(
    obj: InstanceAgentCommandExecutionOutputViaTextDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceAgentCommandExecutionOutputContent.getDeserializedJsonObj(
            obj
          ) as InstanceAgentCommandExecutionOutputViaTextDetails)),
      ...{}
    };

    return jsonObj;
  }
}
