/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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

export interface CreateTagDetails {
  /**
   * The name you assign to the tag during creation. This is the tag key definition.
   * The name must be unique within the tag namespace and cannot be changed.
   *
   */
  "name": string;
  /**
   * The description you assign to the tag during creation.
   */
  "description": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Indicates whether the tag is enabled for cost tracking.
   *
   */
  "isCostTracking"?: boolean;
  "validator"?: model.DefaultTagDefinitionValidator | model.EnumTagDefinitionValidator;
}

export namespace CreateTagDetails {
  export function getJsonObj(obj: CreateTagDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "validator": obj.validator
          ? model.BaseTagDefinitionValidator.getJsonObj(obj.validator)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateTagDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "validator": obj.validator
          ? model.BaseTagDefinitionValidator.getDeserializedJsonObj(obj.validator)
          : undefined
      }
    };

    return jsonObj;
  }
}
