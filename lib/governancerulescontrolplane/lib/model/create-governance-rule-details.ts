/**
 * GovernanceRulesControlPlane API
 * A description of the GovernanceRulesControlPlane API
 * OpenAPI spec version: 20220504
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
 * Request object for CreateGovernanceRule operation.
 */
export interface CreateGovernanceRuleDetails {
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the root compartment containing the governance rule.
   */
  "compartmentId": string;
  /**
   * Display name of the governance rule.
   */
  "displayName": string;
  /**
   * Description of the governance rule.
   */
  "description"?: string;
  /**
    * Type of the governance rule, can be one of QUOTA, TAG, ALLOWED_REGIONS.
* <p>
Example: `QUOTA`
* 
    */
  "type": model.GovernanceRuleType;
  /**
    * The type of option used to create the governance rule, could be one of TEMPLATE or CLONE.
* <p>
Example: `TEMPLATE`
* 
    */
  "creationOption": model.CreationOption;
  "template": model.TagTemplate | model.QuotaTemplate | model.AllowedRegionsTemplate;
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the resource, which was used as a template to create this governance rule.
   */
  "relatedResourceId"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateGovernanceRuleDetails {
  export function getJsonObj(obj: CreateGovernanceRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "template": obj.template ? model.Template.getJsonObj(obj.template) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateGovernanceRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "template": obj.template ? model.Template.getDeserializedJsonObj(obj.template) : undefined
      }
    };

    return jsonObj;
  }
}
