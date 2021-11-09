/**
 * OperatorAccessControl API
 * Operator Access Control enables you to control the time duration and the actions an Oracle operator can perform on your Exadata Cloud@Customer infrastructure.
Using logging service, you can view a near real-time audit report of all actions performed by an Oracle operator. 

Use the table of contents and search tool to explore the OperatorAccessControl API.

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
 * Details of the access request approval.
 */
export interface ApproveAccessRequestDetails {
  /**
   * Comment by the approver during approval.
   */
  "approverComment"?: string;
  /**
   * Specifies the type of auditing to be enabled. There are two levels of auditing: command-level and keystroke-level.
   * By default, auditing is enabled at the command level i.e., each command issued by the operator is audited. When keystroke-level is chosen,
   * in addition to command level logging, key strokes are also logged.
   *
   */
  "auditType"?: Array<string>;
  /**
   * Message that needs to be displayed to the Ops User.
   */
  "additionalMessage"?: string;
  /**
   * The time when access request is scheduled to be approved in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeOfUserCreation"?: Date;
}

export namespace ApproveAccessRequestDetails {
  export function getJsonObj(obj: ApproveAccessRequestDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApproveAccessRequestDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
