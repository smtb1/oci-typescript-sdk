/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * The configuration details of an Object Storage based collection rule.
 *
 */
export interface LogAnalyticsObjectCollectionRule {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of this rule.
   */
  "id": string;
  /**
   * A unique name to the rule. The name must be unique, within the tenancy, and cannot be changed.
   */
  "name": string;
  /**
   * A string that describes the details of the rule. It does not have to be unique, and can be changed.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to which this rule belongs.
   */
  "compartmentId": string;
  /**
   * Object Storage namespace.
   */
  "osNamespace": string;
  /**
   * Name of the Object Storage bucket.
   */
  "osBucketName": string;
  /**
   * The type of log collection.
   *
   */
  "collectionType": model.ObjectCollectionRuleCollectionTypes;
  /**
   * The oldest time of the file in the bucket to consider for collection.
   * Accepted values are: BEGINNING or CURRENT_TIME or RFC3339 formatted datetime string.
   * Use this for HISTORIC or HISTORIC_LIVE collection types. When collectionType is LIVE, specifying pollSince value other than CURRENT_TIME will result in error.
   *
   */
  "pollSince": string;
  /**
   * The newest time of the file in the bucket to consider for collection.
   * Accepted values are: CURRENT_TIME or RFC3339 formatted datetime string.
   * Use this for HISTORIC collection type. When collectionType is LIVE or HISTORIC_LIVE, specifying pollTill will result in error.
   *
   */
  "pollTill"?: string;
  /**
   * Logging Analytics Log group OCID to associate the processed logs with.
   */
  "logGroupId": string;
  /**
   * Name of the Logging Analytics Source to use for the processing.
   */
  "logSourceName": string;
  /**
   * Logging Analytics entity OCID to associate the processed logs with.
   */
  "entityId"?: string;
  /**
   * An optional character encoding to aid in detecting the character encoding of the contents of the objects while processing.
   * It is recommended to set this value as ISO_8859_1 when configuring content of the objects having more numeric characters,
   * and very few alphabets.
   * For e.g. this applies when configuring VCN Flow Logs.
   *
   */
  "charEncoding"?: string;
  /**
   * Use this to override some property values which are defined at bucket level to the scope of object.
   * Supported propeties for override are: logSourceName, charEncoding, entityId.
   * Supported matchType for override are \"contains\".
   *
   */
  "overrides"?: { [key: string]: Array<model.PropertyOverride> };
  /**
   * The current state of the rule.
   *
   */
  "lifecycleState": model.ObjectCollectionRuleLifecycleStates;
  /**
   * A detailed status of the life cycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The time when this rule was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time when this rule was last updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * Whether or not this rule is currently enabled.
   *
   */
  "isEnabled": boolean;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
}

export namespace LogAnalyticsObjectCollectionRule {
  export function getJsonObj(obj: LogAnalyticsObjectCollectionRule): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsObjectCollectionRule): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
