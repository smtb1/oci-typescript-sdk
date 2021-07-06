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
 * Details of the Operator Control assignment. An Operator Control Assignment identifies the target resource that is placed under the governance of an Operator Control.
 * Creating an Operator Control Assignment Assignment with a time duration ensures that human accesses to the target resource will be governed by Operator Control for the duration specified.
 *
 */
export interface CreateOperatorControlAssignmentDetails {
  /**
   * The OCID of the operator control that is being assigned to a target resource.
   */
  "operatorControlId": string;
  /**
   * The OCID of the target resource being brought under the governance of the operator control.
   */
  "resourceId": string;
  /**
   * Name of the target resource.
   */
  "resourceName": string;
  /**
   * Type of the target resource.
   */
  "resourceType"?: model.ResourceTypes;
  /**
   * The OCID of the compartment that contains the target resource.
   */
  "resourceCompartmentId": string;
  /**
   * The time at which the target resource will be brought under the governance of the operator control in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format. Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeAssignmentFrom"?: Date;
  /**
   * The time at which the target resource will leave the governance of the operator control in [RFC 3339](https://tools.ietf.org/html/rfc3339)timestamp format.Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeAssignmentTo"?: Date;
  /**
   * The OCID of the compartment that contains the operator control assignment.
   */
  "compartmentId": string;
  /**
   * If set, then the target resource is always governed by the operator control.
   */
  "isEnforcedAlways"?: boolean;
  /**
   * Comment about the assignment of the operator control to this target resource.
   */
  "comment"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateOperatorControlAssignmentDetails {
  export function getJsonObj(obj: CreateOperatorControlAssignmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateOperatorControlAssignmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
